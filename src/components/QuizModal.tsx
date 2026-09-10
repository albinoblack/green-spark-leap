import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Building2,
  Check,
  Home,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { brl, maskPhone, onlyDigits } from "@/lib/format";
import { track } from "@/lib/tracking";
import { CONSULTANT_WHATSAPP, DISTRIBUIDORAS, MAX_ECONOMIA, UFS } from "@/lib/site-config";

type Perfil = "Residência" | "Empresa";

const FAIXAS = [
  { label: "Até R$ 200", valor: 180 },
  { label: "R$ 200 a R$ 400", valor: 300 },
  { label: "R$ 400 a R$ 700", valor: 550 },
  { label: "R$ 700 a R$ 1.200", valor: 950 },
  { label: "R$ 1.200 a R$ 3.000", valor: 2000 },
  { label: "Acima de R$ 3.000", valor: 3500 },
];

const ANALISES = [
  "Verificando disponibilidade de usina na sua região",
  "Consultando regras da sua distribuidora",
  "Cruzando seu perfil de consumo",
  "Calculando economia potencial",
];

const TOTAL_STEPS = 6;

export function QuizModal({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [step, setStep] = useState(1);
  const [perfil, setPerfil] = useState<Perfil | null>(null);
  const [conta, setConta] = useState<number | null>(null);
  const [manual, setManual] = useState("");
  const [distribuidora, setDistribuidora] = useState<string | null>(null);
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const [aceite, setAceite] = useState(false);
  const [analiseIdx, setAnaliseIdx] = useState(0);
  const [aprovado, setAprovado] = useState(false);

  const economiaMes = useMemo(() => Math.round((conta ?? 0) * MAX_ECONOMIA), [conta]);

  useEffect(() => {
    if (!open) return;
    setStep(1);
    setAnaliseIdx(0);
    setAprovado(false);
    track("StartQuiz");
  }, [open]);

  useEffect(() => {
    if (step !== 5) return;
    setAnaliseIdx(0);
    setAprovado(false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    ANALISES.forEach((_, i) => timers.push(setTimeout(() => setAnaliseIdx(i + 1), 750 * (i + 1))));
    timers.push(setTimeout(() => setAprovado(true), 750 * ANALISES.length + 500));
    return () => timers.forEach(clearTimeout);
  }, [step]);

  const go = (n: number) => {
    setStep(n);
    track("QuizStep", { step: n });
  };

  const foneValido = onlyDigits(fone).length >= 10;

  const enviar = () => {
    track("Lead", { perfil, conta, distribuidora, cidade, uf });
    const msg = [
      `Olá! Quero simular minha economia com a iGreen Energy.`,
      ``,
      `Nome: ${nome}`,
      `WhatsApp: ${fone}`,
      `Perfil: ${perfil}`,
      `Conta de energia: ${conta ? brl(conta) : "não informado"}`,
      `Distribuidora: ${distribuidora}`,
      `Cidade/UF: ${cidade} - ${uf}`,
      `Economia potencial estimada: até ${brl(economiaMes)}/mês`,
      ``,
      `Pode me enviar a análise completa?`,
    ].join("\n");
    track("WhatsAppClick", { origem: "quiz" });
    window.open(`https://wa.me/${CONSULTANT_WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
    onOpenChange(false);
  };

  const OptionButton = ({
    active,
    children,
    onClick,
  }: {
    active?: boolean;
    children: React.ReactNode;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-xl border px-4 py-4 text-left text-sm font-medium transition-all ${
        active
          ? "border-brand bg-brand/12 text-foreground glow-brand"
          : "border-border bg-secondary/40 text-muted-foreground hover:border-brand/50 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] overflow-y-auto border-brand/20 bg-popover p-0 sm:max-w-lg">
        <div className="grid-glow px-5 pt-6 pb-4 sm:px-7">
          <DialogTitle className="text-lg font-semibold">Simulação de economia</DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Leva menos de 1 minuto. Estimativa sem compromisso.
          </DialogDescription>
          <div className="mt-4 flex items-center gap-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <span
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  i < step ? "bg-brand" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-[11px] tracking-wide text-muted-foreground uppercase">
            Etapa {step} de {TOTAL_STEPS}
          </p>
        </div>

        <div className="space-y-4 px-5 pb-7 sm:px-7">
          {step > 1 && step !== 5 && (
            <button
              onClick={() => go(step - 1)}
              className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-brand"
            >
              <ArrowLeft className="size-3.5" /> Voltar
            </button>
          )}

          {step === 1 && (
            <>
              <h3 className="text-xl font-semibold">Sua conta de luz é de:</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {(["Residência", "Empresa"] as Perfil[]).map((p) => (
                  <OptionButton
                    key={p}
                    active={perfil === p}
                    onClick={() => {
                      setPerfil(p);
                      go(2);
                    }}
                  >
                    <span className="flex items-center gap-3">
                      {p === "Residência" ? (
                        <Home className="size-5 text-brand" />
                      ) : (
                        <Building2 className="size-5 text-brand" />
                      )}
                      {p}
                    </span>
                  </OptionButton>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="text-xl font-semibold">Qual o valor médio da sua conta?</h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {FAIXAS.map((f) => (
                  <OptionButton
                    key={f.label}
                    active={conta === f.valor}
                    onClick={() => {
                      setConta(f.valor);
                      setManual("");
                    }}
                  >
                    {f.label}
                  </OptionButton>
                ))}
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Ou informe o valor exato (R$)</label>
                <Input
                  inputMode="numeric"
                  placeholder="Ex.: 480"
                  value={manual}
                  onChange={(e) => {
                    const v = onlyDigits(e.target.value);
                    setManual(v);
                    setConta(v ? Number(v) : null);
                  }}
                  className="mt-1"
                />
              </div>
              {!!conta && (
                <div className="surface-card rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">Economia potencial estimada</p>
                  <p className="text-2xl font-bold text-gradient-brand">
                    até {brl(economiaMes)} / mês
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {brl(economiaMes * 12)} por ano • estimativa de até 20%
                  </p>
                </div>
              )}
              <Button disabled={!conta} onClick={() => go(3)} className="w-full" size="lg">
                Continuar
              </Button>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="text-xl font-semibold">Qual sua distribuidora de energia?</h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {DISTRIBUIDORAS.map((d) => (
                  <OptionButton
                    key={d}
                    active={distribuidora === d}
                    onClick={() => {
                      setDistribuidora(d);
                      go(4);
                    }}
                  >
                    {d}
                  </OptionButton>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h3 className="text-xl font-semibold">Onde fica a instalação?</h3>
              <Input
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
              <div className="grid grid-cols-4 gap-2 sm:grid-cols-7">
                {UFS.map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUf(u)}
                    className={`rounded-lg border py-2 text-xs font-semibold transition-colors ${
                      uf === u
                        ? "border-brand bg-brand/15 text-brand"
                        : "border-border text-muted-foreground hover:border-brand/50"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
              <Button
                disabled={!cidade.trim() || !uf}
                onClick={() => go(5)}
                className="w-full"
                size="lg"
              >
                Verificar elegibilidade
              </Button>
            </>
          )}

          {step === 5 && (
            <div className="py-2">
              {!aprovado ? (
                <>
                  <h3 className="text-xl font-semibold">Analisando sua elegibilidade…</h3>
                  <ul className="mt-5 space-y-3">
                    {ANALISES.map((a, i) => (
                      <li key={a} className="flex items-center gap-3 text-sm">
                        {i < analiseIdx ? (
                          <Check className="size-4 shrink-0 text-brand" />
                        ) : (
                          <Loader2 className="size-4 shrink-0 animate-spin text-muted-foreground" />
                        )}
                        <span className={i < analiseIdx ? "text-foreground" : "text-muted-foreground"}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="text-center">
                  <div className="glow-brand mx-auto grid size-16 place-items-center rounded-full bg-brand/15">
                    <ShieldCheck className="size-8 text-brand" />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Perfil elegível!</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cidade}/{uf} tem usina disponível para o perfil {perfil?.toLowerCase()}.
                  </p>
                  <div className="surface-card mt-4 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground">Economia potencial estimada</p>
                    <p className="text-3xl font-bold text-gradient-brand">
                      até {brl(economiaMes)}/mês
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {brl(economiaMes * 60)} em 5 anos • valores estimados
                    </p>
                  </div>
                  <Button className="mt-4 w-full" size="lg" onClick={() => go(6)}>
                    Receber minha análise
                  </Button>
                </div>
              )}
            </div>
          )}

          {step === 6 && (
            <>
              <h3 className="text-xl font-semibold">Para onde enviamos sua análise?</h3>
              <Input placeholder="Seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)} />
              <Input
                inputMode="tel"
                placeholder="(11) 90000-0000"
                value={fone}
                onChange={(e) => setFone(maskPhone(e.target.value))}
              />
              <label className="flex items-start gap-3 text-xs text-muted-foreground">
                <Checkbox
                  checked={aceite}
                  onCheckedChange={(v) => setAceite(v === true)}
                  className="mt-0.5"
                />
                <span>
                  Autorizo o contato por WhatsApp para receber minha estimativa de economia. Valores
                  são estimativas e não constituem garantia de desconto.
                </span>
              </label>
              <Button
                disabled={!nome.trim() || !foneValido || !aceite}
                onClick={enviar}
                size="lg"
                className="w-full"
              >
                <MessageCircle className="size-4" /> Falar com o consultor
              </Button>
              <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
                <Zap className="size-3 text-brand" /> Sem custo, sem obra e sem compromisso
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

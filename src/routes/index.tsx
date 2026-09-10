import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { QuizModal } from "@/components/QuizModal";
import { Simulator } from "@/components/Simulator";
import { track } from "@/lib/tracking";
import { CONSULTANT, CONSULTANT_WHATSAPP, DEPOIMENTOS, FAQ, NUMEROS } from "@/lib/site-config";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  FileSignature,
  Leaf,
  MapPin,
  Quote,
  Sparkles,
  TrendingDown,
  Wallet,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Economize até 20% na conta de luz | iGreen Energy" },
      {
        name: "description",
        content:
          "Simule sua economia potencial de até 20% na conta de energia com energia limpa por assinatura. Sem placas solares, sem obra e sem investimento inicial.",
      },
      { property: "og:title", content: "Economize até 20% na conta de luz | iGreen Energy" },
      {
        property: "og:description",
        content:
          "Energia sustentável por assinatura. Calcule em 1 minuto sua economia potencial estimada com um consultor licenciado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    track("PageView");
  }, []);

  const abrir = (origem: string) => {
    track("StartQuiz", { origem });
    setOpen(true);
  };

  const whats = () => {
    track("WhatsAppClick", { origem: "consultor" });
    window.open(
      `https://wa.me/${CONSULTANT_WHATSAPP}?text=${encodeURIComponent(
        "Olá! Vi sua página da iGreen Energy e quero entender minha economia na conta de luz.",
      )}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
              <Leaf className="size-5 text-brand" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold tracking-tight">
                iGreen Energy
              </span>
              <span className="block truncate text-[11px] text-muted-foreground">
                Consultor licenciado
              </span>
            </span>
          </div>
          <Button size="sm" className="shrink-0" onClick={() => abrir("header")}>
            <Zap className="size-4" /> Simular economia
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="grid-glow relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs text-brand">
            <Sparkles className="size-3.5" /> Energia limpa por assinatura
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">
            Sua conta de luz pode cair{" "}
            <span className="text-gradient-brand">até 20% já na próxima fatura</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Energia sustentável sem instalar placas, sem obra e sem investimento. Você continua com
            a mesma distribuidora — muda apenas o valor que você paga.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-13 text-base" onClick={() => abrir("hero")}>
              Calcular minha economia <ArrowRight className="size-4" />
            </Button>
            <span className="text-xs text-muted-foreground">
              Leva 1 minuto • sem compromisso • estimativa gratuita
            </span>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Sem placas solares",
              "Sem taxa de adesão",
              "Mesma distribuidora e mesma rede",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-brand" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DOR */}
      <Section
        eyebrow="O problema"
        title="Todo mês a mesma conta — e nada muda"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-destructive/25 bg-destructive/5 p-6">
            <p className="flex items-center gap-2 font-semibold text-destructive">
              <X className="size-5" /> Continuar como está
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Tarifa sobe todo ano e você absorve o aumento",
                "Bandeiras tarifárias pesando na fatura",
                "Dinheiro que sai e nunca mais volta",
                "Nenhum benefício por ser cliente antigo",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <X className="mt-0.5 size-4 shrink-0 text-destructive" /> {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-card rounded-2xl p-6">
            <p className="flex items-center gap-2 font-semibold text-brand">
              <TrendingDown className="size-5" /> Verificar sua economia
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Desconto potencial de até 20% sobre o consumo",
                "Sem investimento, obra ou equipamento",
                "Energia de fonte limpa e rastreável",
                "Análise gratuita em 1 minuto",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" /> {i}
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full" onClick={() => abrir("dor")}>
              Ver minha economia potencial
            </Button>
          </div>
        </div>
      </Section>

      {/* COMO FUNCIONA */}
      <Section eyebrow="Como funciona" title="4 passos e nenhuma obra">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: ClipboardList, t: "Simulação", d: "Você informa a média da conta e a distribuidora." },
            { i: BadgeCheck, t: "Análise", d: "Verificamos a elegibilidade e a usina da sua região." },
            { i: FileSignature, t: "Adesão digital", d: "Contrato 100% online, sem taxa e sem visita." },
            { i: Wallet, t: "Economia", d: "A fatura chega com o desconto aplicado ao consumo." },
          ].map((s, idx) => (
            <div key={s.t} className="surface-card rounded-2xl p-6">
              <span className="text-xs font-bold text-brand">0{idx + 1}</span>
              <s.i className="mt-3 size-6 text-brand" />
              <h3 className="mt-3 text-base font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SIMULADOR */}
      <Section eyebrow="Simulador" title="Arraste e veja quanto pode economizar">
        <Simulator onCta={() => abrir("simulador")} />
      </Section>

      {/* OBJEÇÃO */}
      <Section eyebrow="Sem pegadinha" title="Não precisa instalar placas solares">
        <div className="surface-card rounded-2xl p-6 sm:p-9">
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Nada muda na sua instalação elétrica. Nenhum equipamento entra no seu imóvel, nenhuma
            obra é feita e o fornecimento continua sendo da mesma distribuidora. A energia limpa é
            gerada em usinas próprias e vira crédito abatido na sua fatura.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Zero equipamento", "Zero obra", "Zero investimento"].map((x) => (
              <span
                key={x}
                className="flex items-center gap-2 rounded-xl border border-brand/20 px-4 py-3 text-sm"
              >
                <CheckCircle2 className="size-4 text-brand" /> {x}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* NÚMEROS */}
      <Section eyebrow="Autoridade" title="Uma operação de energia com escala nacional">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NUMEROS.map((n) => (
            <div key={n.label} className="surface-card rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-gradient-brand">{n.valor}</p>
              <p className="mt-1 text-sm text-muted-foreground">{n.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ARGUMENTO FINANCEIRO */}
      <Section eyebrow="Argumento financeiro" title="Dinheiro que não volta">
        <div className="surface-card rounded-2xl p-6 sm:p-9">
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            Cada mês sem desconto é um valor que sai da sua conta e não retorna de nenhuma forma.
            Uma economia potencial de R$ 120 por mês vira R$ 1.440 em um ano e R$ 7.200 em cinco
            anos — o mesmo consumo, só que mais barato.
          </p>
          <Button size="lg" className="mt-6" onClick={() => abrir("financeiro")}>
            Parar de perder dinheiro
          </Button>
        </div>
      </Section>

      {/* CONSULTOR */}
      <Section eyebrow="Seu consultor" title="Atendimento direto, do início ao fim">
        <div className="surface-card grid gap-6 rounded-2xl p-6 sm:p-9 md:grid-cols-[220px_minmax(0,1fr)]">
          <div className="grid aspect-square place-items-center rounded-2xl border border-dashed border-brand/30 bg-background/50 text-center text-xs text-muted-foreground">
            {CONSULTANT.fotoPlaceholder}
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-semibold">{CONSULTANT.nome}</h3>
            <p className="text-sm text-brand">{CONSULTANT.cargo}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" /> {CONSULTANT.cidade} • Licença {CONSULTANT.registro}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{CONSULTANT.bio}</p>
            <Button variant="secondary" className="mt-5" onClick={whats}>
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      {/* DEPOIMENTOS */}
      <Section eyebrow="Prova social" title="Quem já paga menos">
        <div className="grid gap-4 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <figure key={d.nome} className="surface-card rounded-2xl p-6">
              <Quote className="size-5 text-brand" />
              <blockquote className="mt-3 text-sm text-muted-foreground">{d.texto}</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {d.nome}
                <span className="block text-xs font-normal text-muted-foreground">{d.detalhe}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Dúvidas" title="Perguntas frequentes">
        <Accordion type="single" collapsible className="surface-card rounded-2xl px-5 sm:px-7">
          {FAQ.map((f) => (
            <AccordionItem key={f.q} value={f.q}>
              <AccordionTrigger className="text-left text-sm font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* CTA FINAL */}
      <section className="grid-glow border-t border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold sm:text-5xl">
            Descubra em 1 minuto quanto sua conta pode{" "}
            <span className="text-gradient-brand">cair</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            Simulação gratuita, sem compromisso e sem alteração na sua instalação.
          </p>
          <Button size="lg" className="mt-8 h-13 text-base" onClick={() => abrir("cta_final")}>
            <Zap className="size-4" /> Calcular minha economia
          </Button>
        </div>
      </section>

      <footer className="border-t border-border/60 px-4 py-10 text-center text-xs text-muted-foreground sm:px-6">
        <p>
          Consultor licenciado iGreen Energy. Os valores apresentados são estimativas de economia
          potencial de até 20% sobre a parte de consumo da fatura e podem variar conforme
          distribuidora, perfil de consumo e disponibilidade de usina.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </footer>

      {/* CTA STICKY MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand/20 bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <Button className="h-12 w-full text-base" onClick={() => abrir("sticky_mobile")}>
          <Zap className="size-4" /> Calcular minha economia
        </Button>
      </div>
      <div className="h-20 md:hidden" />

      <QuizModal open={open} onOpenChange={setOpen} />
    </div>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-xs tracking-widest text-brand uppercase">{eyebrow}</p>
      <h2 className="mt-2 mb-8 max-w-2xl text-2xl font-bold sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}

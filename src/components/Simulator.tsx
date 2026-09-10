import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { brl } from "@/lib/format";
import { MAX_ECONOMIA } from "@/lib/site-config";
import { track } from "@/lib/tracking";

export function Simulator({ onCta }: { onCta: () => void }) {
  const [valor, setValor] = useState(450);
  const mes = Math.round(valor * MAX_ECONOMIA);

  return (
    <div className="surface-card rounded-2xl p-6 sm:p-9">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
        <div className="min-w-0">
          <p className="text-xs tracking-widest text-brand uppercase">Simulador</p>
          <h3 className="truncate text-xl font-semibold sm:text-2xl">Sua conta de luz hoje</h3>
        </div>
        <p className="shrink-0 text-2xl font-bold sm:text-3xl">
          {brl(valor)}
          {valor >= 3000 && "+"}
        </p>
      </div>

      <Slider
        value={[valor]}
        min={100}
        max={3000}
        step={50}
        onValueChange={(v) => setValor(v[0] ?? 100)}
        onValueCommit={(v) => track("SimulatorInteraction", { valor: v[0] })}
        className="mt-7"
      />
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>R$ 100</span>
        <span>R$ 3.000+</span>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        {[
          { label: "Por mês", v: mes },
          { label: "Por ano", v: mes * 12 },
          { label: "Em 5 anos", v: mes * 60 },
        ].map((i) => (
          <div key={i.label} className="rounded-xl border border-brand/15 bg-background/60 p-4">
            <p className="text-xs text-muted-foreground">{i.label}</p>
            <p className="text-2xl font-bold text-gradient-brand">até {brl(i.v)}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-muted-foreground">
        Economia potencial estimada de até 20% sobre a parte de consumo da fatura. Valores são
        estimativas e variam conforme distribuidora e perfil.
      </p>

      <Button size="lg" className="mt-5 w-full sm:w-auto" onClick={onCta}>
        Quero confirmar minha economia
      </Button>
    </div>
  );
}

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
import { CONSULTANT, CONSULTANT_WHATSAPP, FAQ, LINKS, NUMEROS } from "@/lib/site-config";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileSignature,
  Leaf,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Sun,
  TrendingDown,
  UserPlus,
  Wallet,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Laudemir Lemes | Soluções iGreen Energy" },
      {
        name: "description",
        content:
          "Fale com Laudemir Lemes sobre economia na conta de luz, energia solar, telefonia, seguro veicular e como se tornar licenciado iGreen.",
      },
      { property: "og:title", content: "Laudemir Lemes | Soluções iGreen Energy" },
      {
        property: "og:description",
        content: "Conheça as soluções iGreen com atendimento direto do consultor Laudemir Lemes.",
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

  const whatsHref = `https://wa.me/${CONSULTANT_WHATSAPP}?text=${encodeURIComponent(
    "Olá, Laudemir! Vi seu site e gostaria de conhecer as soluções iGreen para mim.",
  )}`;

  const contactHref = (assunto: string) =>
    `https://wa.me/${CONSULTANT_WHATSAPP}?text=${encodeURIComponent(
      `Olá, Laudemir! Gostaria de saber mais sobre ${assunto}.`,
    )}`;

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
            <span className="text-gradient-brand">até 20% com energia limpa</span>
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
            {["Sem placas solares", "Sem taxa de adesão", "Mesma distribuidora e mesma rede"].map(
              (b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-brand" /> {b}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* DOR */}
      <Section eyebrow="O problema" title="Todo mês a mesma conta — e nada muda">
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
                "Pré-análise inicial em 1 minuto",
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
            {
              i: ClipboardList,
              t: "Simulação",
              d: "Você informa a média da conta e a distribuidora.",
            },
            {
              i: BadgeCheck,
              t: "Análise",
              d: "O Laudemir confirma as condições e a disponibilidade na sua região.",
            },
            {
              i: FileSignature,
              t: "Adesão digital",
              d: "Contrato 100% online, sem taxa e sem visita.",
            },
            {
              i: Wallet,
              t: "Economia",
              d: "Após a ativação, os créditos reduzem a parte de consumo da conta.",
            },
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
            gerada em usinas solares e gera créditos para compensar parte do consumo.
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
        <p className="mt-3 text-xs text-muted-foreground">
          Dados da{" "}
          <a
            href={LINKS.oficial}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand"
          >
            iGreen Energy
          </a>
          .
        </p>
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
      <Section eyebrow="Seu consultor" title="Fale diretamente com o Laudemir">
        <div className="surface-card grid gap-6 rounded-2xl p-6 sm:p-9 md:grid-cols-[220px_minmax(0,1fr)]">
          <img
            src={CONSULTANT.foto}
            alt="Laudemir Lemes, consultor licenciado iGreen Energy"
            width="220"
            height="275"
            loading="lazy"
            className="h-64 w-full rounded-lg object-cover object-[center_30%] md:h-[275px]"
          />
          <div className="min-w-0">
            <h3 className="text-xl font-semibold">{CONSULTANT.nome}</h3>
            <p className="text-sm text-brand">{CONSULTANT.cargo}</p>
            <p className="mt-4 text-sm text-muted-foreground">{CONSULTANT.bio}</p>
            <p className="mt-4 text-sm text-muted-foreground">WhatsApp: {CONSULTANT.telefone}</p>
            <a
              href={`mailto:${CONSULTANT.email}`}
              className="mt-2 inline-flex max-w-full items-start gap-2 text-sm text-muted-foreground hover:text-brand"
            >
              <Mail className="mt-0.5 size-4 shrink-0" />
              <span className="min-w-0 break-all">{CONSULTANT.email}</span>
            </a>
            <div className="mt-5">
              <Button variant="secondary" asChild>
                <a
                  href={whatsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("WhatsAppClick", { origem: "consultor" })}
                >
                  <MessageCircle /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* SOLUÇÕES */}
      <Section eyebrow="Outras soluções" title="A iGreen vai além da conta de luz">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Zap,
              title: "Conexão Green",
              description:
                "Energia por assinatura para residências e comércios, sem instalar placas.",
              action: "Fazer adesão",
              href: LINKS.green,
            },
            {
              icon: Sun,
              title: "Energia solar com placas",
              description: "Projetos de geração própria e modalidades com instalação de painéis.",
              action: "Consultar opções",
              href: contactHref("energia solar com placas"),
            },
            {
              icon: Smartphone,
              title: "iGreen Telecom",
              description: "Planos de telefonia e portabilidade com opção de eSIM.",
              action: "Conhecer telecom",
              href: LINKS.telecom,
            },
            {
              icon: ShieldCheck,
              title: "Seguro veicular",
              description: "Solicite uma cotação e conheça a proteção disponível para seu veículo.",
              action: "Cotar seguro",
              href: LINKS.seguros,
            },
          ].map((service) => (
            <article key={service.title} className="surface-card flex flex-col rounded-2xl p-6">
              <service.icon className="size-6 text-brand" />
              <h3 className="mt-3 text-base font-semibold">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{service.description}</p>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline focus-visible:underline"
                onClick={() =>
                  service.href.includes("wa.me") &&
                  track("WhatsAppClick", { origem: "energia_solar" })
                }
              >
                {service.action} <ExternalLink className="size-4" />
              </a>
            </article>
          ))}
        </div>
        <div className="surface-card mt-4 flex flex-col gap-5 rounded-2xl p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand">
              <UserPlus className="size-5" />{" "}
              <span className="text-xs font-semibold uppercase">Oportunidade iGreen</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold">Quer se tornar um licenciado?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Conheça a proposta de licenciamento e as condições oficiais antes de se cadastrar. O
              Laudemir pode tirar suas dúvidas.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button size="lg" asChild>
              <a href={LINKS.licenciado} target="_blank" rel="noopener noreferrer">
                Quero ser licenciado <ExternalLink />
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a
                href={contactHref("o licenciamento iGreen")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("WhatsAppClick", { origem: "licenciamento" })}
              >
                <MessageCircle /> Tirar dúvidas
              </a>
            </Button>
          </div>
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
          Laudemir Lemes, consultor licenciado iGreen Energy. Os valores apresentados são
          estimativas de economia potencial de até 20% sobre a parte de consumo da fatura e podem
          variar conforme distribuidora, perfil de consumo e disponibilidade de usina.
        </p>
        <p className="mt-3">
          <a href={`mailto:${CONSULTANT.email}`} className="hover:text-brand">
            {CONSULTANT.email}
          </a>
          {" · "}
          <a
            href={LINKS.oficial}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand"
          >
            Site oficial da iGreen
          </a>
        </p>
        <p className="mt-3">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
      </footer>

      <a
        href={whatsHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com ${CONSULTANT.nome} no WhatsApp`}
        title="Falar no WhatsApp"
        onClick={() => track("WhatsAppClick", { origem: "botao_fixo_desktop" })}
        className="glow-brand fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full bg-brand text-primary-foreground transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex"
      >
        <MessageCircle className="size-6" />
      </a>

      {/* CTA STICKY MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-brand/20 bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <a
          href={whatsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com ${CONSULTANT.nome} no WhatsApp`}
          title="Falar no WhatsApp"
          onClick={() => track("WhatsAppClick", { origem: "botao_fixo_mobile" })}
          className="inline-flex size-12 shrink-0 items-center justify-center rounded-md border border-brand/40 bg-brand/10 text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MessageCircle className="size-5" />
        </a>
        <Button className="h-12 min-w-0 flex-1 text-sm" onClick={() => abrir("sticky_mobile")}>
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

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
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { track } from "@/lib/tracking";
import {
  CONSULTANT,
  FAQ,
  LINKS,
  NUMEROS,
  SOLUTIONS,
  WHATSAPP_MESSAGES,
  whatsappHref,
} from "@/lib/site-config";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileSignature,
  Mail,
  Sparkles,
  TrendingDown,
  UserPlus,
  Wallet,
  X,
  Zap,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    track("PageView");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.IntersectionObserver
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-enter");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document.querySelectorAll(".section-band").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const abrir = (origem: string) => {
    track("StartQuiz", { origem });
    setOpen(true);
  };

  const whatsHref = whatsappHref(WHATSAPP_MESSAGES.geral);
  const opportunityHref = whatsappHref(WHATSAPP_MESSAGES.oportunidade);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <img
              src={CONSULTANT.foto}
              alt=""
              width="36"
              height="36"
              className="size-9 shrink-0 rounded-full border border-brand/30 object-cover object-top"
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-bold tracking-tight">
                iGreen Energy
              </span>
              <span className="block truncate text-[11px] text-muted-foreground">
                Com Laudemir Lemes
              </span>
            </span>
          </div>
          <Button size="sm" className="shrink-0" onClick={() => abrir("header")}>
            <Zap className="size-4" /> Simular economia
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-surface relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-8 pb-6 sm:px-6 sm:pt-14 sm:pb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs text-brand">
            <Sparkles className="size-3.5" /> Energia limpa por assinatura
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-bold sm:text-6xl">
            Sua conta de luz pode cair{" "}
            <span className="text-gradient-brand">até 20% com energia limpa</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Conheça a Conexão Green: energia limpa por assinatura, sem instalar placas no imóvel. O
            fornecimento continua pela distribuidora local; a economia depende da elegibilidade.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" className="h-13 text-base" onClick={() => abrir("hero")}>
              Calcular minha economia <ArrowRight className="size-4" />
            </Button>
            <a
              href="#oportunidade"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-brand/40 px-5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-brand"
            >
              Conhecer a oportunidade <ArrowRight className="size-4" />
            </a>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Leva cerca de 1 minuto • simulação sem compromisso
          </p>

          <ul className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-3">
            {[
              "Sem placas solares no imóvel",
              "Sem obra na instalação",
              "Mesma distribuidora e mesma rede",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 shrink-0 text-brand" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOLUÇÕES: acesso antecipado aos quatro caminhos */}
      <Section
        id="solucoes"
        tone="alternate"
        eyebrow="Soluções iGreen"
        title="Encontre a solução certa para você"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((service) => (
            <article
              key={service.id}
              className="product-card flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card"
            >
              <div className="product-image relative flex aspect-[4/3] items-center justify-center border-b border-border bg-surface px-5 text-center">
                {service.imageSrc ? (
                  <img
                    src={service.imageSrc}
                    alt={service.name}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover"
                  />
                ) : (
                  <span className="text-lg font-semibold text-foreground">{service.name}</span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold">{service.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <p className="mt-3 text-xs text-muted-foreground">{service.audience}</p>
                <div className="mt-auto pt-5">
                  <Button className="w-full" asChild>
                    <a
                      href={whatsappHref(service.message)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track("WhatsAppClick", { origem: `produto_${service.id}` })}
                    >
                      <WhatsAppIcon className="size-4" /> {service.contactLabel}
                    </a>
                  </Button>
                  {service.directHref && (
                    <a
                      href={service.directHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-brand hover:underline focus-visible:underline"
                    >
                      {service.directLabel} <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* DOR */}
      <Section eyebrow="Sua conta de luz" title="Todo mês a mesma conta — e nada muda">
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
                "Vale conferir se existe uma alternativa para o seu perfil",
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
              d: "Conheça a proposta e confirme as condições antes de aderir.",
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
      <Section
        id="simulador"
        tone="alternate"
        eyebrow="Simulador"
        title="Arraste e veja quanto pode economizar"
      >
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
      <Section
        tone="alternate"
        eyebrow="iGreen Energy"
        title="Uma operação de energia com escala nacional"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {NUMEROS.map((n) => (
            <div key={n.label} className="surface-card rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-gradient-brand">{n.valor}</p>
              <p className="mt-1 text-sm text-muted-foreground">{n.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Números informados no{" "}
          <a
            href={LINKS.oficial}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-brand"
          >
            iGreen Energy
          </a>
          ; sujeitos a atualização pela empresa.
        </p>
      </Section>

      {/* ARGUMENTO FINANCEIRO */}
      <Section eyebrow="Argumento financeiro" title="Dinheiro que não volta">
        <div className="surface-card rounded-2xl p-6 sm:p-9">
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            O simulador mostra o potencial de economia a partir da sua conta de luz. Os valores
            exibidos são estimativas, não descontos garantidos; o Laudemir pode verificar a
            disponibilidade e as condições para o seu perfil.
          </p>
          <Button size="lg" className="mt-6" onClick={() => abrir("financeiro")}>
            Parar de perder dinheiro
          </Button>
        </div>
      </Section>

      {/* CONSULTOR */}
      <Section tone="alternate" eyebrow="Seu consultor" title="Fale diretamente com o Laudemir">
        <div className="surface-card grid gap-6 rounded-2xl p-6 sm:p-9 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[360px_minmax(0,1fr)]">
          <img
            src={CONSULTANT.foto}
            alt="Laudemir Lemes, consultor licenciado iGreen Energy"
            width="360"
            height="450"
            loading="lazy"
            className="h-[380px] w-full rounded-lg object-cover object-[center_30%] md:h-[420px] lg:h-[450px]"
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
                  <WhatsAppIcon className="size-4" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* OPORTUNIDADE */}
      <Section
        id="oportunidade"
        tone="alternate"
        eyebrow="Oportunidade iGreen"
        title="Quer trabalhar com as soluções iGreen, como o Laudemir?"
      >
        <div className="opportunity-panel flex flex-col gap-5 rounded-lg border border-brand/25 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-brand">
              <UserPlus className="size-5" />{" "}
              <span className="text-xs font-semibold uppercase">Atuação licenciada</span>
            </div>
            <h3 className="mt-2 text-xl font-semibold">Conheça o modelo de licenciamento</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Existe uma oportunidade de atuação como licenciado iGreen. Converse com o Laudemir
              para entender os requisitos, o funcionamento e as condições oficiais antes de se
              cadastrar.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a
                href={opportunityHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("WhatsAppClick", { origem: "licenciamento" })}
              >
                <WhatsAppIcon className="size-4" /> Falar sobre licenciamento
              </a>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <a href={LINKS.licenciado} target="_blank" rel="noopener noreferrer">
                Ver cadastro oficial <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase text-brand">Apresentação iGreen</p>
          <h3 className="mt-2 text-xl font-semibold">Conheça a oportunidade de licenciamento</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Assista à apresentação sobre o modelo de atuação e converse com o Laudemir para tirar
            suas dúvidas. Licenciado é a nomenclatura usada pela iGreen para essa oportunidade.
          </p>
          <video
            controls
            playsInline
            preload="none"
            poster="/images/igreen-licenciamento.jpg"
            aria-label="Vídeo sobre a oportunidade de licenciamento iGreen"
            className="mt-5 aspect-video w-full rounded-lg border border-border bg-black"
          >
            <source src="/videos/igreen-licenciamento.mp4" type="video/mp4" />
            Seu navegador não suporta a reprodução deste vídeo.
          </video>
          <p className="mt-2 text-xs text-muted-foreground">
            Os exemplos de ganhos apresentados no vídeo não garantem resultados. Consulte as
            condições oficiais atualizadas antes de se cadastrar.
          </p>
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
      <section className="hero-surface border-t border-border/60">
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

      <footer className="footer-surface border-t border-border/60 px-4 py-10 text-center text-xs text-muted-foreground sm:px-6">
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
        aria-label={`Falar com ${CONSULTANT.nome} pelo WhatsApp`}
        title="Falar no WhatsApp"
        onClick={() => track("WhatsAppClick", { origem: "botao_fixo_desktop" })}
        className="whatsapp-button fixed right-6 bottom-6 z-40 hidden size-14 items-center justify-center rounded-full text-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:flex"
      >
        <WhatsAppIcon className="size-7" />
      </a>

      {/* CTA STICKY MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-brand/20 bg-background/90 p-3 backdrop-blur-xl md:hidden">
        <a
          href={whatsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Falar com ${CONSULTANT.nome} pelo WhatsApp`}
          title="Falar no WhatsApp"
          onClick={() => track("WhatsAppClick", { origem: "botao_fixo_mobile" })}
          className="whatsapp-button inline-flex size-12 shrink-0 items-center justify-center rounded-md text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <WhatsAppIcon className="size-6" />
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
  id,
  tone = "plain",
  eyebrow,
  title,
  children,
}: {
  id?: string;
  tone?: "plain" | "alternate";
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`section-band scroll-mt-20 border-t border-border/40 ${tone === "alternate" ? "section-band-alternate" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-16">
        <p className="text-xs tracking-widest text-brand uppercase">{eyebrow}</p>
        <h2 className="mt-2 mb-8 max-w-2xl text-2xl font-bold sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Instagram,
  Mail,
  PlayCircle,
  Sparkles,
  Zap,
} from "lucide-react";

import logo from "@/assets/ultraview-logo.jpg";
import heroBanner from "@/assets/banners/banner-hero.jpg";
import { AmbientBackground } from "@/components/uv/ambient-background";
import { SiteHeader } from "@/components/uv/site-header";
import { CatalogRow, StreamingLogo, catalog, liveBanner, streamings } from "@/components/uv/catalog";
import { TestimonialSlider } from "@/components/uv/testimonials";
import { DemoVideo } from "@/components/uv/demo-video";

import {
  CheckoutDialog,
  PendingProofBanner,
  TrialDialog,
  WhatsAppIcon,
} from "@/components/uv/whatsapp";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  benefits,
  compatibility,
  differentials,
  faq,
  plans,
  steps,
  trustItems,
} from "@/lib/uv-data";

const SITE_URL = "https://ultraview.lovable.app";
const TITLE = "Ultra View | Entretenimento premium em qualquer dispositivo";
const DESCRIPTION =
  "Ultra View reúne filmes, séries, animes, doramas e canais ao vivo em uma experiência moderna, compatível com Smart TV, celular, TV Box e computador. Planos a partir de R$ 30.";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Ultra View",
          url: SITE_URL,
          description: DESCRIPTION,
          sameAs: [INSTAGRAM_URL],
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+55 85 99117-3080",
              availableLanguage: ["Portuguese"],
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

/* ---------- primitives ---------- */

function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  from?: "up" | "left" | "right" | "zoom";
  className?: string;
}) {
  const reduced = useReducedMotion();
  const offset =
    from === "left"
      ? { x: -40, y: 0, scale: 1 }
      : from === "right"
        ? { x: 40, y: 0, scale: 1 }
        : from === "zoom"
          ? { x: 0, y: 0, scale: 0.92 }
          : { x: 0, y: 36, scale: 1 };

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance font-display text-3xl font-extrabold leading-tight sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ---------- sections ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const still = isMobile || reduced;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yFar = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [0, 120]);
  const yNear = useTransform(scrollYProgress, [0, 1], still ? [0, 0] : [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], still ? [1, 1] : [1, 0]);

  return (
    <section id="inicio" ref={ref} className="relative pb-28 pt-32 sm:pt-40">

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <motion.div style={{ y: yNear, opacity: fade }} className="min-w-0">
          <Reveal from="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Mais de 50 mil pessoas acompanham a Ultra View
            </span>
          </Reveal>

          <Reveal from="left" delay={0.08}>
            <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-[4.1rem]">
              O entretenimento que{" "}
              <span className="text-gradient-brand">acompanha você</span> em qualquer lugar.
            </h1>
          </Reveal>

          <Reveal from="left" delay={0.16}>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Tudo reunido em uma experiência prática, moderna e compatível com diversos
              dispositivos.
            </p>
          </Reveal>

          <Reveal from="left" delay={0.24}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CheckoutDialog
                planName="Mensal"
                priceLabel="R$ 30/mês"
                checkoutUrl="https://mpago.la/2TjzxQE"
                trigger={
                  <button className="btn-primary-glow ripple text-sm uppercase tracking-wider">
                    Começar Agora <ArrowRight className="h-4 w-4" />
                  </button>
                }
              />
              <a href="#como-funciona" className="btn-ghost-glass text-sm uppercase tracking-wider">
                <PlayCircle className="h-4 w-4" /> Ver Demonstração
              </a>

            </div>
          </Reveal>

          <Reveal from="left" delay={0.32}>
            <p className="mt-6 text-sm text-muted-foreground">
              Planos a partir de <span className="font-bold text-foreground">R$ 30/mês</span> ·
              ativação em minutos
            </p>
          </Reveal>
        </motion.div>

        {/* Mockups */}
        <motion.div style={{ y: yFar }} className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-x-6 top-10 -z-10 h-72 rounded-full bg-primary/30 blur-[110px]" />
          <div className="absolute inset-x-16 bottom-0 -z-10 h-52 rounded-full bg-accent/30 blur-[100px]" />

          <Reveal from="zoom" className="uv-float-slow">
            {/* Smart TV */}
            <div className="glow-ring relative overflow-hidden rounded-2xl border border-border bg-surface p-2 backdrop-blur-xl">
              <img
                src={heroBanner}
                alt="Ultra View em uma Smart TV"
                className="aspect-video w-full rounded-xl object-cover"
                fetchPriority="high"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-2 rounded-xl bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="mx-auto h-4 w-24 rounded-b-xl bg-white/10" />
            <div className="mx-auto h-1.5 w-40 rounded-full bg-white/15" />
          </Reveal>

          {/* Smartphone */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uv-float absolute -bottom-10 -left-2 w-24 sm:-left-8 sm:w-32"
          >
            <div className="glow-ring overflow-hidden rounded-[1.5rem] border-4 border-white/10 bg-surface">
              <img
                src={catalog[0].items[3].img}
                alt="Ultra View no smartphone"
                loading="lazy"
                decoding="async"
                className="aspect-9/19 w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Tablet */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 7 }}
            whileInView={{ opacity: 1, y: 0, rotate: 7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="uv-float absolute -bottom-14 right-0 w-32 sm:w-44"
            style={{ animationDelay: "-2s" }}
          >
            <div className="glow-ring overflow-hidden rounded-2xl border-4 border-white/10 bg-surface">
              <img
                src={catalog[1].items[1].img}
                alt="Ultra View no tablet"
                loading="lazy"
                decoding="async"
                className="aspect-3/4 w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative px-4 pt-24 sm:px-6">
      <Reveal className="mx-auto max-w-7xl">
        <ul className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-3 lg:grid-cols-6">
          {trustItems.map((t) => (
            <li
              key={t.label}
              className="flex flex-col items-center gap-1.5 px-4 py-6 text-center transition-colors hover:bg-white/5"
            >
              <t.icon className="h-5 w-5 text-primary" />
              <span className="font-display text-base font-extrabold leading-none">{t.value}</span>
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {t.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

function Benefits() {
  return (
    <section className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Benefícios"
          title={<>Feito para ser simples, estável e bonito de usar</>}
          subtitle="Cada detalhe da Ultra View foi pensado para que você gaste tempo assistindo, não configurando."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="glass-card group relative h-full overflow-hidden p-7 transition-colors hover:border-primary/45"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/12 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-display text-lg font-bold">{b.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.desc}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Veja funcionando"
          title="Conheça o app antes de assinar"
          subtitle="Uma demonstração real da navegação, do catálogo e da qualidade de reprodução."
        />
        <div className="mt-12">
          <DemoVideo />
        </div>
        <div className="mt-24">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro clique ao play em poucos minutos"
            subtitle="Quatro passos, sem burocracia e com acompanhamento humano em cada etapa."
          />
        </div>
        <ol className="relative mt-16 space-y-8 before:absolute before:left-6 before:top-2 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-primary before:via-accent before:to-transparent sm:before:left-1/2">

          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              from={i % 2 === 0 ? "left" : "right"}
              delay={0.05}
              className="relative"
            >
              <li
                className={`relative flex gap-5 sm:w-1/2 ${
                  i % 2 === 0 ? "sm:pr-12" : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`uv-pulse-glow z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-primary/40 bg-background font-display text-sm font-extrabold text-primary sm:absolute sm:top-4 ${
                    i % 2 === 0 ? "sm:-right-6" : "sm:-left-6"
                  }`}
                >
                  {s.n}
                </span>
                <div className="glass-card w-full p-6">
                  <h3 className="font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Compatibility() {
  return (
    <section id="compatibilidade" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Compatibilidade"
          title="Funciona nos aparelhos que você já tem"
          subtitle="Modelos atuais e antigos. Se tiver dúvida sobre o seu, é só chamar no WhatsApp."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {compatibility.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05} from="zoom">
              <motion.div
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass-card group flex h-full flex-col items-center gap-3 p-6 text-center transition-colors hover:border-primary/50"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-border bg-white/5 text-primary transition-shadow duration-300 group-hover:shadow-[0_0_35px_-8px_var(--glow-violet)]">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-sm font-bold">{c.name}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogSection() {
  return (
    <section id="catalogo" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Catálogo"
          title="Tudo o que você assiste, em um só lugar"
          subtitle="Filmes, séries, animes, doramas e canais ao vivo — com os principais streamings reunidos."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {streamings.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.04} from="zoom">
              <StreamingLogo s={s} />
            </Reveal>
          ))}
        </div>

        <div className="mt-16 space-y-16">
          <Reveal className="group relative overflow-hidden rounded-3xl border border-border">
            <img
              src={liveBanner}
              alt="Canais ao vivo na Ultra View"
              loading="lazy"
              decoding="async"
              className="h-48 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 sm:h-64"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 flex max-w-2xl flex-col justify-center p-6 sm:p-10">
              <span className="mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-primary sm:text-xs">
                <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" /> Ao vivo
              </span>
              <h3 className="font-display text-2xl font-extrabold sm:text-4xl">Canais ao Vivo</h3>
              <p className="mt-1 max-w-md text-sm text-muted-foreground sm:text-base">
                Esportes, notícias, novelas e canais abertos e fechados, transmitindo agora.
              </p>
            </div>
          </Reveal>

          {catalog.map((row) => (
            <CatalogRow
              key={row.key}
              title={row.title}
              subtitle={row.subtitle}
              badge={row.badge}
              banner={row.banner}
              items={row.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section-space">
      <div className="px-4 sm:px-6">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem assina, recomenda"
          subtitle="Histórias reais de clientes que trocaram a complicação por uma experiência simples."
        />
      </div>
      <div className="mt-14">
        <TestimonialSlider />
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="O que coloca a Ultra View à frente"
          subtitle="Não é só o conteúdo: é a forma como você é atendido do começo ao fim."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06} from={i % 2 ? "right" : "left"}>
              <motion.div
                whileHover={{ y: -6 }}
                className="glass-card flex h-full items-start gap-4 p-6 transition-colors hover:border-accent/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/12 text-accent-foreground">
                  <d.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="planos" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Planos"
          title="Escolha o plano ideal para você"
          subtitle="Sem fidelidade e sem letra miúda. Pagamento seguro e acesso liberado em minutos."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {plans.map((p, i) => {
            const Cta = p.checkout ? (
              <CheckoutDialog
                planName={p.name}
                priceLabel={`${p.price}${p.period}`}
                checkoutUrl={p.checkout}
                trigger={
                  <button
                    className={`ripple w-full text-sm ${p.highlight ? "btn-primary-glow" : "btn-ghost-glass"}`}
                  >
                    {p.cta}
                  </button>
                }
              />
            ) : (
              <TrialDialog
                trigger={
                  <button className="btn-whatsapp ripple w-full text-sm">
                    <WhatsAppIcon className="h-4 w-4" /> {p.cta}
                  </button>
                }
              />
            );

            return (
              <Reveal key={p.name} delay={i * 0.06} from="zoom" className="h-full">
                <div
                  className={`glass-card relative flex h-full flex-col p-6 transition-colors hover:border-primary/50 ${
                    p.highlight ? "border-primary/60 shadow-[0_0_70px_-24px_var(--glow-violet)]" : ""
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[image:var(--gradient-brand)] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                      {p.badge}
                    </span>
                  )}
                  <h3 className="mt-2 font-display text-lg font-bold">{p.name}</h3>
                  <p className="mt-3 flex items-baseline gap-1">
                    <span className="font-display text-3xl font-extrabold">{p.price}</span>
                    <span className="text-xs text-muted-foreground">{p.period}</span>
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">{Cta}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Dúvidas antes de assinar? Fale com a gente no WhatsApp{" "}
            <span className="font-semibold text-foreground">{WHATSAPP_DISPLAY}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="section-space px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Perguntas frequentes"
          subtitle="Se ficar qualquer dúvida, nosso atendimento responde rapidinho."
        />
        <div className="mt-12 space-y-3">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="glass-card group px-6 py-5 transition-colors open:border-primary/40 hover:border-primary/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-3 animate-[fade-in_0.35s_ease-out] text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="section-space px-4 sm:px-6">
      <Reveal from="zoom" className="mx-auto max-w-5xl">
        <div className="glass-card relative overflow-hidden px-6 py-16 text-center sm:px-14 sm:py-20">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/40 blur-[120px]" />
          <div className="absolute -bottom-24 right-10 h-56 w-56 rounded-full bg-accent/35 blur-[120px]" />
          <h2 className="relative text-balance font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            Pronto para <span className="text-gradient-brand">elevar sua experiência</span>?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
            Comece hoje e tenha filmes, séries, animes, doramas e canais ao vivo em todos os seus
            aparelhos — com suporte humano em cada passo.
          </p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <CheckoutDialog
              planName="Mensal"
              priceLabel="R$ 30/mês"
              checkoutUrl="https://mpago.la/2TjzxQE"
              trigger={
                <button className="btn-primary-glow ripple uv-pulse-glow px-10 py-4 text-sm uppercase tracking-[0.2em]">
                  <Zap className="h-4 w-4" /> Começar Agora
                </button>
              }
            />
            <TrialDialog
              trigger={
                <button className="btn-ghost-glass px-8 py-4 text-sm uppercase tracking-[0.2em]">
                  <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
                </button>
              }
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer id="suporte" className="border-t border-border px-4 pb-28 pt-16 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="Ultra View"
              loading="lazy"
              className="h-11 w-11 shrink-0 rounded-xl border border-primary/30 object-cover"
            />
            <span className="truncate font-display text-lg font-extrabold">
              Ultra<span className="text-primary"> View</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Entretenimento premium, compatível com todos os seus dispositivos e com atendimento
            humanizado de verdade.
          </p>
        </div>

        <nav aria-label="Links rápidos">
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Links rápidos</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#inicio" className="transition-colors hover:text-primary">
                Início
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="transition-colors hover:text-primary">
                Como Funciona
              </a>
            </li>
            <li>
              <a href="#compatibilidade" className="transition-colors hover:text-primary">
                Compatibilidade
              </a>
            </li>
            <li>
              <a href="#planos" className="transition-colors hover:text-primary">
                Planos
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Institucional</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#faq" className="transition-colors hover:text-primary">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#suporte" className="transition-colors hover:text-primary">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wider">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <TrialDialog
                trigger={
                  <button className="inline-flex items-center gap-2 transition-colors hover:text-primary">
                    <WhatsAppIcon className="h-4 w-4" /> {WHATSAPP_DISPLAY}
                  </button>
                }
              />
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ultra View. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <TrialDialog
        trigger={
          <button
            aria-label="Falar no WhatsApp"
            className="btn-whatsapp uv-pulse-glow h-14 w-14 !p-0 shadow-[0_12px_40px_-12px_oklch(0.72_0.19_150/80%)]"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </button>
        }
      />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <HowItWorks />
        <CatalogSection />
        <Compatibility />
        <Testimonials />
        <Differentials />
        <Plans />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <PendingProofBanner />
    </div>
  );
}

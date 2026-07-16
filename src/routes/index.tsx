import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, Zap, Tv, Smartphone, Laptop, MonitorPlay, Flame, Package, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import logo from "@/assets/ultraview-logo.jpg";

import logoPrimeVideo from "@/assets/streamings/primevideo.png";
import logoGloboplay from "@/assets/streamings/globoplay.png";
import logoStarPlus from "@/assets/streamings/starplus.png";


import bannerHero from "@/assets/banners/banner-hero.jpg";
import bannerFilmes from "@/assets/banners/banner-filmes.jpg";
import bannerSeries from "@/assets/banners/banner-series.jpg";
import bannerAnimes from "@/assets/banners/banner-animes.jpg";
import bannerDoramas from "@/assets/banners/banner-doramas.jpg";
import bannerAoVivo from "@/assets/banners/banner-aovivo.jpg";

import moviePanico from "@/assets/posters/movie-panico.jpg";
import movieComoMagica from "@/assets/posters/movie-como-magica.png";
import movieDevoradores from "@/assets/posters/movie-devoradores.webp";
import movieAvatar from "@/assets/posters/movie-avatar.jpg";
import movieMario from "@/assets/posters/movie-mario.jpeg";
import movieDestruicao from "@/assets/posters/movie-destruicao.jpeg";
import moviePrada from "@/assets/posters/movie-prada.webp";
import movieMaquina from "@/assets/posters/movie-maquina.jpg";
import movieSilentHill from "@/assets/posters/movie-silenthill.jpeg";
import movieZootopia from "@/assets/posters/movie-zootopia.jpg";

import serieGreys from "@/assets/posters/serie-greys.jpeg";
import serieLaCasa from "@/assets/posters/serie-lacasa.jpeg";
import serieGot from "@/assets/posters/serie-got.jpeg";
import serieTwd from "@/assets/posters/serie-twd.jpg";
import serieOrigem from "@/assets/posters/serie-origem.jpg";
import serieSupernatural from "@/assets/posters/serie-supernatural.jpg";
import serieDemolidor from "@/assets/posters/serie-demolidor.jpeg";
import serieTheBoys from "@/assets/posters/serie-theboys.png";
import serieImpuros from "@/assets/posters/serie-impuros.jpeg";

import animeSoloLeveling from "@/assets/posters/anime-sololeveling.webp";
import animeDragonBall from "@/assets/posters/anime-dragonball.jpg";
import animeNaruto from "@/assets/posters/anime-naruto.jpg";
import animeNanatsu from "@/assets/posters/anime-nanatsu.jpg";
import animeOnePunch from "@/assets/posters/anime-onepunch.jpg";
import animeJujutsu from "@/assets/posters/anime-jujutsu.jpg";
import animeOnePiece from "@/assets/posters/anime-onepiece.jpeg";

import doramaClasse from "@/assets/posters/dorama-classe.jpeg";
import doramaAmor from "@/assets/posters/dorama-amor.webp";
import doramaTirano from "@/assets/posters/dorama-tirano.jpeg";
import doramaBeijo from "@/assets/posters/dorama-beijo.jpeg";
import doramaSorriso from "@/assets/posters/dorama-sorriso.jpeg";
import doramaMafia from "@/assets/posters/dorama-mafia.jpg";
import doramaSangue from "@/assets/posters/dorama-sangue.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ultra View — Seu Lazer Favorito" },
      { name: "description", content: "Filmes, séries, animes, doramas, esportes e TV ao vivo em um único aplicativo. Sem antena, sem instalação." },
    ],
  }),
});

type Attendant = { label: string; number: string; display: string };
const attendants: Attendant[] = [
  { label: "Atendimento 1", number: "5585991173080", display: "(85) 99117-3080" },
  { label: "Atendimento 2", number: "5585988340993", display: "(85) 98834-0993" },
];
const pickAttendant = (): Attendant => attendants[Math.floor(Math.random() * attendants.length)];
const waLink = (number: string, msg: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

// Streaming logos. `img` overrides the simple-icons CDN slug.
type Streaming = { name: string; slug?: string; color: string; img?: string; wordmark?: string };
const streamings: Streaming[] = [
  { name: "Netflix", slug: "netflix", color: "E50914" },
  { name: "Disney+", color: "0E47BA", wordmark: "Disney+" },
  { name: "Prime Video", color: "00A8E1", img: logoPrimeVideo },
  { name: "Globoplay", color: "FF3333", img: logoGloboplay },
  { name: "Paramount+", slug: "paramountplus", color: "0064FF" },
  { name: "HBO Max", slug: "max", color: "B026FF" },
  { name: "Apple TV+", slug: "appletv", color: "FFFFFF" },
  { name: "Star+", color: "FFD400", img: logoStarPlus },
];


const devices = [
  { name: "Smart TV", desc: "Samsung, LG, Android TV", icon: Tv },
  { name: "TV Box", desc: "Qualquer TV Box Android", icon: Package },
  { name: "Fire Stick", desc: "Amazon Fire TV Stick", icon: Flame },
  { name: "Mi Stick", desc: "Xiaomi Mi TV Stick", icon: MonitorPlay },
  { name: "Notebook", desc: "Windows, Mac e Linux", icon: Laptop },
  { name: "Celular", desc: "Android e iOS", icon: Smartphone },
];

// Device options shown in the trial selector (modern + legacy models)
const trialDevices = [
  { name: "Smart TV (modelo atual)", icon: Tv },
  { name: "Smart TV antiga (até 2018)", icon: Tv },
  { name: "TV Box Android", icon: Package },
  { name: "Amazon Fire Stick", icon: Flame },
  { name: "Xiaomi Mi Stick / Mi Box", icon: MonitorPlay },
  { name: "Notebook / PC", icon: Laptop },
  { name: "Celular Android", icon: Smartphone },
  { name: "iPhone / iPad", icon: Smartphone },
  { name: "Outro / não sei", icon: Tv },
];

type Plan = { name: string; price: string; period: string; badge: string | null; highlight: boolean; features: string[]; cta: string; checkout?: string };
const plans: Plan[] = [
  { name: "Teste Grátis", price: "Grátis", period: "", badge: "Experimente sem pagar", highlight: false, features: ["Teste antes de assinar", "Escolha seu dispositivo", "Atendimento humanizado"], cta: "Teste Grátis Agora" },
  { name: "Mensal", price: "R$ 30", period: "/mês", badge: null, highlight: false, features: ["Todo o catálogo", "Multiplataforma", "Suporte humanizado"], cta: "Assinar Mensal", checkout: "https://mpago.la/2TjzxQE" },
  { name: "Trimestral", price: "R$ 80", period: "/3 meses", badge: null, highlight: false, features: ["Economia garantida", "Sem reajuste", "Suporte humanizado"], cta: "Assinar Trimestral", checkout: "https://mpago.la/2KCSm28" },
  { name: "Semestral", price: "R$ 160", period: "/6 meses", badge: null, highlight: false, features: ["Preço reduzido", "Sem reajuste", "Suporte humanizado"], cta: "Assinar Semestral", checkout: "https://mpago.la/14ByT2Z" },
  { name: "Anual", price: "R$ 290", period: "/ano", badge: "Ganhe 3 meses grátis", highlight: true, features: ["3 meses extras grátis", "Melhor custo-benefício", "Suporte humanizado"], cta: "Assinar Anual", checkout: "https://mpago.la/1VgvDyS" },
];

type Poster = { title: string; img: string };

const posters: Record<string, Poster[]> = {
  filmes: [
    { title: "Pânico 7", img: moviePanico },
    { title: "Como Mágica", img: movieComoMagica },
    { title: "Devoradores de Estrelas", img: movieDevoradores },
    { title: "Avatar: Fire and Ash", img: movieAvatar },
    { title: "Super Mario Galaxy", img: movieMario },
    { title: "Destruição Final 2", img: movieDestruicao },
    { title: "O Diabo Veste Prada 2", img: moviePrada },
    { title: "Máquina de Guerra", img: movieMaquina },
    { title: "Terror em Silent Hill", img: movieSilentHill },
    { title: "Zootopia 2", img: movieZootopia },
  ],
  series: [
    { title: "Grey's Anatomy", img: serieGreys },
    { title: "La Casa de Papel", img: serieLaCasa },
    { title: "Game of Thrones", img: serieGot },
    { title: "The Walking Dead", img: serieTwd },
    { title: "Origem", img: serieOrigem },
    { title: "Supernatural", img: serieSupernatural },
    { title: "Demolidor", img: serieDemolidor },
    { title: "The Boys", img: serieTheBoys },
    { title: "Impuros", img: serieImpuros },
  ],
  animes: [
    { title: "Solo Leveling", img: animeSoloLeveling },
    { title: "Dragon Ball Super", img: animeDragonBall },
    { title: "Naruto Shippuden", img: animeNaruto },
    { title: "Nanatsu no Taizai", img: animeNanatsu },
    { title: "One Punch Man", img: animeOnePunch },
    { title: "Jujutsu Kaisen", img: animeJujutsu },
    { title: "One Piece", img: animeOnePiece },
  ],
  doramas: [
    { title: "Classe dos Heróis Fracos", img: doramaClasse },
    { title: "Amor de Mentirinha", img: doramaAmor },
    { title: "O Chef do Tirano", img: doramaTirano },
    { title: "Beijo Explosivo", img: doramaBeijo },
    { title: "Sorriso Real", img: doramaSorriso },
    { title: "O Rei da Máfia", img: doramaMafia },
    { title: "Sangue Fresco e Amor Antigo", img: doramaSangue },
  ],
};

function PosterCard({ item }: { item: Poster }) {
  return (
    <div className="relative shrink-0 w-32 sm:w-40 aspect-[2/3] rounded-lg overflow-hidden border border-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.3)] group hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] transition-all">
      <img src={item.img} alt={item.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-end p-3">
        <h4 className="text-white font-bold text-sm leading-tight drop-shadow-lg">{item.title}</h4>
      </div>
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse" />
    </div>
  );
}

function CategoryBanner({ title, subtitle, badge, banner }: { title: string; subtitle: string; badge: string; banner: string }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-purple-400/30 shadow-[0_0_40px_rgba(168,85,247,0.25)] group">
      <img src={banner} alt={title} loading="lazy" className="w-full h-40 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0118]/95 via-[#1e1b4b]/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-8 max-w-2xl">
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-fuchsia-300 mb-2">{badge}</span>
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white drop-shadow-lg">{title}</h3>
        <p className="text-purple-100/90 text-sm sm:text-base mt-1 max-w-md">{subtitle}</p>
      </div>
    </div>
  );
}

function PosterRow({ title, subtitle, badge, banner, items }: { title: string; subtitle: string; badge: string; banner: string; items: Poster[] }) {
  return (
    <div className="space-y-4">
      <CategoryBanner title={title} subtitle={subtitle} badge={badge} banner={banner} />
      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-1 pb-4 scrollbar-thin scrollbar-thumb-purple-500/50">
        {[...items, ...items].map((t, i) => <PosterCard key={i} item={t} />)}
      </div>
    </div>
  );
}

function StreamingLogo({ s }: { s: Streaming }) {
  const src = s.img ?? (s.slug ? `https://cdn.simpleicons.org/${s.slug}/ffffff` : null);
  return (
    <div className="group relative aspect-video flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-800/40 to-indigo-900/60 border border-purple-400/20 backdrop-blur-sm hover:border-fuchsia-400/60 hover:scale-105 transition-all overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ background: `radial-gradient(circle at center, #${s.color}33 0%, transparent 70%)` }} />
      {src ? (
        <img
          src={src}
          alt={s.name}
          loading="lazy"
          className="relative h-8 sm:h-10 w-auto max-w-[70%] object-contain opacity-95 group-hover:opacity-100 drop-shadow-[0_0_8px_rgba(217,70,239,0.6)]"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      ) : (
        <span className="relative text-white font-extrabold text-xl sm:text-2xl tracking-tight italic drop-shadow-[0_0_10px_rgba(217,70,239,0.7)]">
          {s.wordmark ?? s.name}
        </span>
      )}
      <span className="absolute bottom-2 text-[10px] uppercase tracking-wider text-purple-100/70 font-bold">{s.name}</span>
    </div>
  );
}


function DeviceCard({ d }: { d: { name: string; desc: string; icon: React.ComponentType<{ className?: string }> } }) {
  const Icon = d.icon;
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-950/60 border border-purple-400/20 text-center backdrop-blur-sm hover:border-fuchsia-400/60 hover:-translate-y-1 transition-all group">
      <div className="relative w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600/20 to-purple-700/20 border border-fuchsia-400/30 shadow-[0_0_20px_rgba(217,70,239,0.3)] group-hover:shadow-[0_0_30px_rgba(217,70,239,0.6)]">
        <Icon className="w-8 h-8 text-fuchsia-200" />
      </div>
      <h3 className="font-bold text-lg mb-1 text-white">{d.name}</h3>
      <p className="text-sm text-purple-200/80">{d.desc}</p>
    </div>
  );
}

function AttendantList({ message, onPick }: { message: string; onPick?: () => void }) {
  return (
    <div className="space-y-2 mt-2">
      {attendants.map((a) => (
        <a
          key={a.number}
          href={waLink(a.number, message)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onPick}
          className="flex items-center gap-3 p-4 rounded-xl border border-emerald-400/30 bg-emerald-900/20 hover:bg-emerald-900/40 hover:border-emerald-300/60 hover:scale-[1.02] transition-all"
        >
          <span className="relative flex w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full w-3 h-3 bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
          </span>
          <span className="flex-1 text-left">
            <span className="block font-bold text-white">{a.label}</span>
            <span className="block text-xs text-emerald-200/80">{a.display}</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold">Disponível</span>
        </a>
      ))}
    </div>
  );
}

function TrialDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<string | null>(null);
  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) setDevice(null); }}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-[#1a0b2e] to-[#0a0118] border-fuchsia-400/30 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
            {device ? "Escolha um atendente disponível" : "Em qual aparelho você quer assistir?"}
          </DialogTitle>
          <DialogDescription className="text-purple-200/80">
            {device
              ? `Um atendente vai te ajudar com o seu ${device} pelo WhatsApp.`
              : "Escolha seu dispositivo para conversar com um atendente pelo WhatsApp."}
          </DialogDescription>
        </DialogHeader>
        {!device ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
            {trialDevices.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setDevice(d.name)}
                  className="flex flex-col items-center justify-center text-center gap-2 p-4 rounded-xl border border-purple-400/20 bg-purple-900/30 hover:bg-fuchsia-900/40 hover:border-fuchsia-400/60 hover:scale-[1.03] transition-all"
                >
                  <Icon className="w-7 h-7 text-fuchsia-300" />
                  <span className="text-xs font-semibold text-purple-100 leading-tight">{d.name}</span>
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <AttendantList
              message={`Olá, gostaria de assinar a Ultra View. Vou assistir no meu ${device}.`}
              onPick={() => setOpen(false)}
            />
            <button
              type="button"
              onClick={() => setDevice(null)}
              className="text-xs text-purple-200/70 underline underline-offset-4 hover:text-fuchsia-300 mt-2 text-center"
            >
              ← Trocar de aparelho
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

const PENDING_KEY = "ultraview_pending_payment";

function CheckoutDialog({ trigger, planName, priceLabel, checkoutUrl }: { trigger: React.ReactNode; planName: string; priceLabel: string; checkoutUrl: string }) {
  const [open, setOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const [showAttendants, setShowAttendants] = useState(false);
  const proofMsg = `Olá! Acabei de realizar o pagamento do plano ${planName} (${priceLabel}) da Ultra View. Segue em anexo o comprovante para liberação do acesso.`;
  const goToCheckout = () => {
    try {
      localStorage.setItem(PENDING_KEY, JSON.stringify({ planName, priceLabel, ts: Date.now() }));
      window.dispatchEvent(new Event("ultraview-pending"));
    } catch {}
    setPaid(true);
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <Dialog open={open} onOpenChange={(o) => { setOpen(o); if (!o) { setPaid(false); setShowAttendants(false); } }}>

      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-[#1a0b2e] to-[#0a0118] border-fuchsia-400/30 text-white max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
            Plano {planName} • {priceLabel}
          </DialogTitle>
          <DialogDescription className="text-purple-200/80">
            {paid
              ? "Depois de pagar, toque no botão verde para nos enviar o comprovante 👇"
              : "Siga os 2 passos abaixo para liberar seu acesso rapidinho 🚀"}
          </DialogDescription>
        </DialogHeader>
        <ol className="space-y-3 mt-2 text-sm text-purple-100">
          <li className={`flex gap-3 p-3 rounded-xl border ${paid ? "border-purple-400/10 bg-purple-900/10 opacity-60" : "border-purple-400/20 bg-purple-900/30"}`}>
            <span className="shrink-0 w-7 h-7 rounded-full bg-fuchsia-600 flex items-center justify-center font-bold">{paid ? <Check className="w-4 h-4" /> : "1"}</span>
            <span>Clique em <b>“Ir para o checkout”</b> e finalize o pagamento com segurança pelo Mercado Pago.</span>
          </li>
          <li className={`flex gap-3 p-3 rounded-xl border ${paid ? "border-emerald-400/60 bg-emerald-900/40 shadow-[0_0_25px_rgba(16,185,129,0.5)] animate-pulse" : "border-emerald-400/20 bg-emerald-900/20"}`}>
            <span className="shrink-0 w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold">2</span>
            <span>Após pagar, clique em <b>“Enviar comprovante no WhatsApp”</b> e anexe o print. Liberamos seu acesso em poucos minutos.</span>
          </li>
        </ol>
        <div className="flex flex-col gap-2 mt-4">
          {!paid && (
            <button
              onClick={goToCheckout}
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-bold text-white bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 shadow-lg shadow-fuchsia-900/40 transition-all hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4" /> Ir para o checkout
            </button>
          )}
          {!showAttendants ? (
            <button
              type="button"
              onClick={() => setShowAttendants(true)}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-lg shadow-emerald-900/40 transition-all hover:scale-[1.02] ${paid ? "ring-2 ring-emerald-300/70 animate-pulse" : ""}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              {paid ? "Já paguei — Enviar comprovante agora" : "Já paguei — Enviar comprovante"}
            </button>
          ) : (
            <div className="rounded-xl border border-emerald-400/30 bg-emerald-950/30 p-3">
              <p className="text-sm text-emerald-200 font-bold text-center mb-1">Escolha um atendente disponível</p>
              <AttendantList
                message={proofMsg}
                onPick={() => { try { localStorage.removeItem(PENDING_KEY); window.dispatchEvent(new Event("ultraview-pending")); } catch {} setOpen(false); }}
              />
            </div>
          )}
          {paid && (
            <button
              type="button"
              onClick={goToCheckout}
              className="text-xs text-purple-200/70 underline underline-offset-4 hover:text-fuchsia-300"
            >
              Reabrir página de pagamento
            </button>
          )}
        </div>
        <p className="text-xs text-purple-200/60 text-center mt-2">Atendimento humanizado • Liberação rápida</p>
      </DialogContent>
    </Dialog>
  );
}

type PendingPayment = { planName: string; priceLabel: string; ts: number };

function PendingProofBanner() {
  const [pending, setPending] = useState<PendingPayment | null>(null);
  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem(PENDING_KEY);
        setPending(raw ? (JSON.parse(raw) as PendingPayment) : null);
      } catch { setPending(null); }
    };
    read();
    const onFocus = () => read();
    window.addEventListener("focus", onFocus);
    window.addEventListener("ultraview-pending", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("ultraview-pending", read);
      window.removeEventListener("storage", read);
    };
  }, []);
  if (!pending) return null;
  const proofMsg = `Olá! Acabei de realizar o pagamento do plano ${pending.planName} (${pending.priceLabel}) da Ultra View. Segue em anexo o comprovante para liberação do acesso.`;
  const dismiss = () => {
    try { localStorage.removeItem(PENDING_KEY); } catch {}
    setPending(null);
  };
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4 bg-gradient-to-t from-[#0a0118] via-[#0a0118f0] to-transparent pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-2xl rounded-2xl border border-emerald-400/50 bg-gradient-to-br from-emerald-900/80 to-[#0a0118]/90 backdrop-blur-md p-4 shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-3">
        <div className="flex-1 text-left">
          <div className="text-xs uppercase tracking-wider text-emerald-300 font-bold">Pagamento iniciado</div>
          <div className="text-sm text-white font-semibold">
            Já pagou o plano {pending.planName}? Envie o comprovante para liberarmos o acesso.
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="shrink-0 inline-flex items-center gap-2 py-2.5 px-4 rounded-full font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-lg transition-all hover:scale-[1.04]"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Enviar comprovante
            </button>
          </DialogTrigger>
          <DialogContent className="bg-gradient-to-br from-[#1a0b2e] to-[#0a0118] border-emerald-400/30 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">Escolha um atendente disponível</DialogTitle>
              <DialogDescription className="text-purple-200/80">Envie seu comprovante para liberarmos o acesso.</DialogDescription>
            </DialogHeader>
            <AttendantList message={proofMsg} onPick={dismiss} />
          </DialogContent>
        </Dialog>
        <button onClick={dismiss} aria-label="Fechar" className="shrink-0 text-purple-200/70 hover:text-white p-1">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}


function Index() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at top, #4c1d95 0%, #1e1b4b 35%, #0a0118 70%, #000000 100%)",
    }}>
      {/* Animated 3D Galaxy Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Star layers */}
        <div className="galaxy-stars galaxy-stars-1" />
        <div className="galaxy-stars galaxy-stars-2" />
        <div className="galaxy-stars galaxy-stars-3" />
        {/* Nebula blobs - rotating + pulsing */}
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full blur-[120px] bg-fuchsia-600/40 animate-nebula-1" />
        <div className="absolute bottom-1/3 -right-32 w-[32rem] h-[32rem] rounded-full blur-[140px] bg-purple-600/40 animate-nebula-2" />
        <div className="absolute top-2/3 left-1/3 w-80 h-80 rounded-full blur-[100px] bg-violet-500/30 animate-nebula-3" />
        <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full blur-[100px] bg-pink-500/20 animate-nebula-1" style={{ animationDelay: '-8s' }} />
        {/* Shooting stars */}
        <div className="shooting-star shooting-star-1" />
        <div className="shooting-star shooting-star-2" />
        <div className="shooting-star shooting-star-3" />
        {/* Galaxy ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmin] h-[140vmin] rounded-full border border-fuchsia-500/5 animate-galaxy-rotate" style={{
          background: 'conic-gradient(from 0deg, transparent 0%, rgba(217,70,239,0.06) 25%, transparent 50%, rgba(168,85,247,0.06) 75%, transparent 100%)'
        }} />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center overflow-hidden">
          {/* Hero ambient banner */}
          <div className="absolute inset-0 opacity-25">
            <img src={bannerHero} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0118]/70 via-transparent to-[#0a0118]" />
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-fuchsia-500/40 blur-3xl rounded-full animate-pulse" />
            <img src={logo} alt="Ultra View" className="relative w-56 sm:w-72 md:w-80 rounded-2xl shadow-[0_0_60px_rgba(217,70,239,0.6)] border-2 border-purple-400/30" />
          </div>
          <span className="relative text-xs sm:text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-4">Seu Lazer Favorito</span>
          <h1 className="relative text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-3xl bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent leading-tight">
            Tudo o que você ama assistir em um único aplicativo.
          </h1>
          <p className="relative mt-6 text-purple-100/90 max-w-2xl text-base sm:text-lg">
            Filmes, séries, animes, doramas, esportes e mais de <span className="text-fuchsia-300 font-bold">1500 canais ao vivo</span>. Sem antena, sem instalação. Assine agora a partir de <span className="text-fuchsia-300 font-bold">R$ 8,99/dia</span>.
          </p>
          <div className="relative mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <CheckoutDialog
              planName="Mensal"
              priceLabel="R$ 30/mês"
              checkoutUrl="https://mpago.la/2TjzxQE"
              trigger={
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 transition-all shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-105">
                  <Zap className="w-5 h-5" /> Assinar Agora
                </button>
              }
            />
            <a href="#planos" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-purple-900/40 border border-fuchsia-400/40 hover:bg-purple-900/60 transition-all hover:scale-105">
              Ver Planos <Zap className="w-5 h-5" />
            </a>
          </div>
          <div className="relative mt-16 text-xs uppercase tracking-[0.4em] text-purple-300/70">+50.000 títulos disponíveis</div>
        </section>

        {/* STREAMINGS */}
        <section className="py-20 px-4 border-y border-purple-500/20 bg-purple-950/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Catálogo premium</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">TODOS OS STREAMINGS EM UM SÓ LUGAR</h2>
            <p className="text-purple-200/80 mb-12 max-w-2xl mx-auto">Pare de pagar várias mensalidades. Aqui você assiste o melhor de cada plataforma por um preço justo.</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {streamings.map((s) => <StreamingLogo key={s.name} s={s} />)}
            </div>
          </div>
        </section>

        {/* CONTENT WITH SMART BANNERS */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Em destaque</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">CONTEÚDO PARA TODA A FAMÍLIA</h2>
            </div>
            <div className="space-y-16">
              <PosterRow
                title="FILMES"
                subtitle="Mais de 30 mil filmes em alta qualidade — dos clássicos aos lançamentos."
                badge="+30.000 títulos"
                banner={bannerFilmes}
                items={posters.filmes}
              />
              <PosterRow
                title="SÉRIES"
                subtitle="Maratone mais de 15 mil séries completas, todas as temporadas em 4K."
                badge="+15.000 séries"
                banner={bannerSeries}
                items={posters.series}
              />
              <PosterRow
                title="ANIMES"
                subtitle="Mais de 2 mil animes legendados e dublados — dos shounen aos clássicos."
                badge="+2.000 animes"
                banner={bannerAnimes}
                items={posters.animes}
              />
              <PosterRow
                title="DORAMAS"
                subtitle="Mergulhe em mais de 3 mil doramas asiáticos imperdíveis."
                badge="+3.000 doramas"
                banner={bannerDoramas}
                items={posters.doramas}
              />
              <CategoryBanner
                title="TV AO VIVO + ESPORTES"
                subtitle="Mais de 1500 canais ao vivo 24h, todos os campeonatos e PPVs sem travar."
                badge="+1.500 canais 24h"
                banner={bannerAoVivo}
              />
            </div>
          </div>
        </section>

        {/* DEVICES / HOW IT WORKS */}
        <section className="py-20 px-4 border-y border-purple-500/20 bg-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Sem complicação</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">FUNCIONA EM TODOS OS APARELHOS</h2>
              <p className="text-purple-200/80 max-w-2xl mx-auto">Não precisa de antena ou instalação. Basta ter internet e aproveitar em qualquer tela.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {devices.map((d) => <DeviceCard key={d.name} d={d} />)}
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section id="planos" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Escolha seu plano</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">PLANOS QUE CABEM NO BOLSO</h2>
              <p className="text-purple-200/80">Acesso completo a todo o conteúdo. Cancele quando quiser. Suporte 100% humanizado pelo WhatsApp.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {plans.map((p) => {
                const isCheckout = !!p.checkout;
                const isTrial = !isCheckout;
                const ctaInner = (
                  <>
                    {isCheckout ? (
                      <Zap className="w-4 h-4" />
                    ) : (
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    )}
                    {p.cta}
                  </>
                );
                const ctaClass = `w-full inline-flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all hover:scale-[1.03] shadow-lg text-white ${isCheckout ? "bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 shadow-fuchsia-900/40" : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 shadow-emerald-900/40"}`;
                return (
                  <div key={p.name} className={`relative p-6 rounded-2xl border backdrop-blur-sm flex flex-col ${p.highlight ? "border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-900/50 to-purple-900/50 shadow-[0_0_30px_rgba(217,70,239,0.3)] scale-[1.02]" : "border-purple-400/20 bg-gradient-to-br from-purple-900/40 to-indigo-950/40"}`}>
                    {p.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 whitespace-nowrap shadow-lg">
                        {p.badge}
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                    <div className="mb-6">
                      <span className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-300 to-purple-200 bg-clip-text text-transparent">{p.price}</span>
                      <span className="text-purple-200/70">{p.period}</span>
                    </div>
                    <ul className="space-y-2 mb-6 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-purple-100">
                          <Check className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    {isTrial ? (
                      <TrialDialog trigger={<button className={ctaClass}>{ctaInner}</button>} />
                    ) : isCheckout ? (
                      <CheckoutDialog
                        planName={p.name}
                        priceLabel={`${p.price}${p.period}`}
                        checkoutUrl={p.checkout!}
                        trigger={<button className={ctaClass}>{ctaInner}</button>}
                      />
                    ) : (
                      <TrialDialog trigger={<button className={ctaClass}>{ctaInner}</button>} />
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-center text-purple-200/60 text-sm mt-8">
              💬 Atendimento humanizado pelo WhatsApp — <span className="text-fuchsia-300 font-bold">2 atendentes disponíveis</span>
            </p>
          </div>
        </section>

        {/* PENDING PAYMENT PROOF BANNER */}
        <PendingProofBanner />

        {/* FLOATING WHATSAPP BUTTON */}
        <TrialDialog
          trigger={
            <button
              type="button"
              aria-label="Fale conosco no WhatsApp"
              className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 transition-transform animate-pulse"
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </button>
          }
        />

        {/* FOOTER */}
        <footer className="py-12 px-4 border-t border-purple-500/20 text-center">
          <img src={logo} alt="Ultra View" className="w-20 mx-auto mb-4 rounded-lg" />
          <p className="text-purple-200/60 text-sm">© {new Date().getFullYear()} Ultra View. Seu Lazer Favorito.</p>
        </footer>
      </div>
    </div>
  );
}

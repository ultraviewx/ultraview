import { createFileRoute } from "@tanstack/react-router";
import { Film, Tv, Radio, Sparkles, Heart, Trophy, Check, Smartphone, Laptop, Monitor, Tv2, Cast, Zap } from "lucide-react";
import logo from "@/assets/ultraview-logo.jpg";

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
      { title: "Ultra View — Sua TV Completa" },
      { name: "description", content: "Filmes, séries, animes, doramas, esportes e TV ao vivo em um único aplicativo. Sem antena, sem instalação." },
    ],
  }),
});

const categories = [
  { icon: Film, title: "FILMES", desc: "Mais de 30 mil filmes em alta qualidade" },
  { icon: Tv, title: "SÉRIES", desc: "Mais de 15 mil séries completas" },
  { icon: Radio, title: "TV AO VIVO", desc: "Mais de 1500 canais ao vivo, 24h por dia" },
  { icon: Sparkles, title: "ANIMES", desc: "Mais de 2000 animes legendados e dublados" },
  { icon: Heart, title: "DORAMAS", desc: "Mais de 3000 doramas asiáticos imperdíveis" },
  { icon: Trophy, title: "ESPORTES", desc: "Todos os campeonatos disponíveis" },
];

const streamings = ["Netflix", "Disney+", "Prime Video", "Globoplay", "Paramount+", "HBO Max", "Apple TV+", "Star+"];

const devices = [
  { icon: Tv2, name: "Smart TV", desc: "Compatível com Samsung, LG e Android TV" },
  { icon: Monitor, name: "TV Box", desc: "Funciona em qualquer TV Box Android" },
  { icon: Zap, name: "Fire Stick", desc: "Amazon Fire TV Stick compatível" },
  { icon: Cast, name: "Mi Stick", desc: "Xiaomi Mi TV Stick compatível" },
  { icon: Laptop, name: "Notebook", desc: "Use no seu notebook em qualquer lugar" },
  { icon: Smartphone, name: "Celular", desc: "Android e iOS — leve no bolso" },
];

const plans = [
  { name: "Teste Grátis", price: "R$ 0", period: "", badge: null, features: ["Acesso completo", "Sem cartão", "Sem compromisso", "Suporte 100% humanizado"], cta: "Começar Teste" },
  { name: "Mensal", price: "R$ 35", period: "/mês", badge: null, features: ["Todo o catálogo", "Multiplataforma", "Suporte 100% humanizado"], cta: "Assinar Agora" },
  { name: "Trimestral", price: "R$ 95", period: "/3 meses", badge: "Ganhe 1 mês grátis", features: ["1 mês extra grátis", "Economia garantida", "Suporte 100% humanizado"], cta: "Assinar Agora" },
  { name: "Semestral", price: "R$ 180", period: "/6 meses", badge: null, features: ["Preço reduzido", "Sem reajuste", "Suporte 100% humanizado"], cta: "Assinar Agora" },
  { name: "Anual", price: "R$ 350", period: "/ano", badge: "Ganhe 3 meses grátis", features: ["3 meses extras grátis", "Melhor custo-benefício", "Suporte 100% humanizado"], cta: "Assinar Agora" },
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

function PosterRow({ title, items }: { title: string; items: Poster[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-white px-4">{title}</h3>
      <div className="flex gap-3 sm:gap-4 overflow-x-auto px-4 pb-4 scrollbar-thin scrollbar-thumb-purple-500/50">
        {[...items, ...items].map((t, i) => <PosterCard key={i} item={t} />)}
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{
      background: "radial-gradient(ellipse at top, #4c1d95 0%, #1e1b4b 35%, #0a0118 70%, #000000 100%)",
    }}>
      {/* Galaxy stars background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                            radial-gradient(1px 1px at 60% 70%, white, transparent),
                            radial-gradient(1.5px 1.5px at 80% 10%, #e9d5ff, transparent),
                            radial-gradient(1px 1px at 33% 80%, white, transparent),
                            radial-gradient(2px 2px at 90% 50%, #f0abfc, transparent),
                            radial-gradient(1px 1px at 10% 60%, white, transparent),
                            radial-gradient(1.5px 1.5px at 50% 15%, white, transparent),
                            radial-gradient(1px 1px at 75% 85%, #c084fc, transparent),
                            radial-gradient(1px 1px at 5% 40%, white, transparent),
                            radial-gradient(2px 2px at 45% 55%, white, transparent)`,
          backgroundSize: "100% 100%",
        }} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-fuchsia-600/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 left-1/2 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-fuchsia-500/30 blur-3xl rounded-full" />
            <img src={logo} alt="Ultra View" className="relative w-56 sm:w-72 md:w-80 rounded-2xl shadow-[0_0_60px_rgba(217,70,239,0.5)] border-2 border-purple-400/30" />
          </div>
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-4">Sua TV Completa</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold max-w-3xl bg-gradient-to-b from-white to-purple-200 bg-clip-text text-transparent leading-tight">
            Tenha acesso ilimitado a filmes, séries e TV ao vivo em um único aplicativo.
          </h1>
          <a href="#planos" className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 transition-all shadow-[0_0_30px_rgba(217,70,239,0.6)] hover:scale-105">
            Começar Agora <Zap className="w-5 h-5" />
          </a>
          <div className="mt-16 text-xs uppercase tracking-[0.4em] text-purple-300/70">Conteúdo Ilimitado</div>
        </section>

        {/* CATEGORIES */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">O QUE VOCÊ VAI ENCONTRAR</h2>
            <p className="text-center text-purple-200/70 mb-12">Tudo em um só lugar</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((c) => (
                <div key={c.title} className="group relative p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-950/40 border border-purple-400/20 backdrop-blur-sm hover:border-fuchsia-400/50 transition-all hover:-translate-y-1">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/0 to-purple-500/0 group-hover:from-fuchsia-500/10 group-hover:to-purple-500/10 transition-all" />
                  <c.icon className="w-10 h-10 text-fuchsia-400 mb-4 relative" />
                  <h3 className="text-xl font-bold mb-2 relative">{c.title}</h3>
                  <p className="text-purple-200/80 relative">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STREAMINGS */}
        <section className="py-20 px-4 border-y border-purple-500/20 bg-purple-950/20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Catálogo premium</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-12 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">TODOS OS STREAMINGS EM UM SÓ APLICATIVO</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {streamings.map((s) => (
                <div key={s} className="aspect-video flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-800/40 to-indigo-900/40 border border-purple-400/20 backdrop-blur-sm hover:border-fuchsia-400/50 transition-all">
                  <span className="font-bold text-purple-100">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTENT ROWS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 px-4">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Em destaque</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">CONTEÚDOS EM DESTAQUE</h2>
            </div>
            <div className="space-y-12">
              <PosterRow title="Filmes Lançamentos" items={posters.filmes} />
              <PosterRow title="Séries do Momento" items={posters.series} />
              <PosterRow title="Animes em Destaque" items={posters.animes} />
              <PosterRow title="Doramas Mais Badalados" items={posters.doramas} />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 px-4 border-y border-purple-500/20 bg-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Sem complicação</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">COMO FUNCIONA NOSSO SISTEMA</h2>
              <p className="text-purple-200/80 max-w-2xl mx-auto">Não precisa de antena ou instalação. Basta ter internet e aproveitar todo o conteúdo no seu dispositivo.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {devices.map((d) => (
                <div key={d.name} className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-indigo-950/40 border border-purple-400/20 text-center backdrop-blur-sm hover:border-fuchsia-400/50 transition-all">
                  <d.icon className="w-10 h-10 mx-auto text-fuchsia-400 mb-4" />
                  <h3 className="font-bold text-lg mb-2">{d.name}</h3>
                  <p className="text-sm text-purple-200/80">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS */}
        <section id="planos" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300 mb-3">Escolha seu plano</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-fuchsia-300 to-purple-300 bg-clip-text text-transparent">PLANOS</h2>
              <p className="text-purple-200/80">Acesso completo a todo o conteúdo. Cancele quando quiser.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {plans.map((p, i) => (
                <div key={p.name} className={`relative p-6 rounded-2xl border backdrop-blur-sm flex flex-col ${i === 2 || i === 4 ? "border-fuchsia-400/60 bg-gradient-to-br from-fuchsia-900/50 to-purple-900/50 shadow-[0_0_30px_rgba(217,70,239,0.3)]" : "border-purple-400/20 bg-gradient-to-br from-purple-900/40 to-indigo-950/40"}`}>
                  {p.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-fuchsia-500 to-purple-600 whitespace-nowrap">
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
                  <button className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-500 hover:to-purple-600 transition-all hover:scale-[1.02] shadow-lg shadow-fuchsia-900/40">
                    {p.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-4 border-t border-purple-500/20 text-center">
          <img src={logo} alt="Ultra View" className="w-20 mx-auto mb-4 rounded-lg" />
          <p className="text-purple-200/60 text-sm">© {new Date().getFullYear()} Ultra View. Sua TV Completa.</p>
        </footer>
      </div>
    </div>
  );
}

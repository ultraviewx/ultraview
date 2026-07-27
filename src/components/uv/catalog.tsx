import { motion } from "motion/react";

import logoPrimeVideo from "@/assets/streamings/primevideo.png";
import logoGloboplay from "@/assets/streamings/globoplay.png";
import logoStarPlus from "@/assets/streamings/starplus.png";

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

export type Streaming = { name: string; slug?: string; img?: string; wordmark?: string };

export const streamings: Streaming[] = [
  { name: "Netflix", slug: "netflix" },
  { name: "Disney+", wordmark: "Disney+" },
  { name: "Prime Video", img: logoPrimeVideo },
  { name: "Globoplay", img: logoGloboplay },
  { name: "Paramount+", slug: "paramountplus" },
  { name: "HBO Max", slug: "max" },
  { name: "Apple TV+", slug: "appletv" },
  { name: "Star+", img: logoStarPlus },
];

export type Poster = { title: string; img: string };

export const catalog: { key: string; title: string; badge: string; subtitle: string; banner: string; items: Poster[] }[] = [
  {
    key: "filmes",
    title: "Filmes",
    badge: "+30.000 títulos",
    subtitle: "Dos grandes clássicos aos lançamentos, em alta qualidade.",
    banner: bannerFilmes,
    items: [
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
  },
  {
    key: "series",
    title: "Séries",
    badge: "+15.000 séries",
    subtitle: "Temporadas completas para maratonar sem interrupção.",
    banner: bannerSeries,
    items: [
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
  },
  {
    key: "animes",
    title: "Animes",
    badge: "+2.000 animes",
    subtitle: "Legendados e dublados, dos shounen aos clássicos.",
    banner: bannerAnimes,
    items: [
      { title: "Solo Leveling", img: animeSoloLeveling },
      { title: "Dragon Ball Super", img: animeDragonBall },
      { title: "Naruto Shippuden", img: animeNaruto },
      { title: "Nanatsu no Taizai", img: animeNanatsu },
      { title: "One Punch Man", img: animeOnePunch },
      { title: "Jujutsu Kaisen", img: animeJujutsu },
      { title: "One Piece", img: animeOnePiece },
    ],
  },
  {
    key: "doramas",
    title: "Doramas",
    badge: "+3.000 doramas",
    subtitle: "O melhor da produção asiática, sempre atualizado.",
    banner: bannerDoramas,
    items: [
      { title: "Classe dos Heróis Fracos", img: doramaClasse },
      { title: "Amor de Mentirinha", img: doramaAmor },
      { title: "O Chef do Tirano", img: doramaTirano },
      { title: "Beijo Explosivo", img: doramaBeijo },
      { title: "Sorriso Real", img: doramaSorriso },
      { title: "O Rei da Máfia", img: doramaMafia },
      { title: "Sangue Fresco e Amor Antigo", img: doramaSangue },
    ],
  },
];

export const liveBanner = bannerAoVivo;

export function StreamingLogo({ s }: { s: Streaming }) {
  const src = s.img ?? (s.slug ? `https://cdn.simpleicons.org/${s.slug}/ffffff` : null);
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass-card group relative flex aspect-video items-center justify-center overflow-hidden transition-colors hover:border-primary/50"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow-violet),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-40" />
      {src ? (
        <img
          src={src}
          alt={s.name}
          loading="lazy"
          decoding="async"
          className="relative h-7 w-auto max-w-[65%] object-contain opacity-90 transition-opacity group-hover:opacity-100 sm:h-9"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <span className="relative font-display text-xl font-extrabold italic tracking-tight sm:text-2xl">
          {s.wordmark ?? s.name}
        </span>
      )}
      <span className="absolute bottom-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {s.name}
      </span>
    </motion.div>
  );
}

function PosterCard({ item }: { item: Poster }) {
  return (
    <div className="group relative aspect-2/3 w-28 shrink-0 overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_0_40px_-12px_var(--glow-violet)] sm:w-36">
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
      <h4 className="absolute inset-x-0 bottom-0 p-3 text-xs font-bold leading-tight sm:text-sm">
        {item.title}
      </h4>
    </div>
  );
}

export function CatalogRow({
  title,
  subtitle,
  badge,
  banner,
  items,
}: {
  title: string;
  subtitle: string;
  badge: string;
  banner: string;
  items: Poster[];
}) {
  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="group relative overflow-hidden rounded-3xl border border-border"
      >
        <img
          src={banner}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-36 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 sm:h-48"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 flex max-w-2xl flex-col justify-center p-6 sm:p-9">
          <span className="mb-2 text-[10px] uppercase tracking-[0.35em] text-primary sm:text-xs">
            {badge}
          </span>
          <h3 className="font-display text-2xl font-extrabold sm:text-4xl">{title}</h3>
          <p className="mt-1 max-w-md text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        </div>
      </motion.div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 sm:gap-4">
        {items.map((t) => (
          <PosterCard key={t.title} item={t} />
        ))}
      </div>
    </div>
  );
}

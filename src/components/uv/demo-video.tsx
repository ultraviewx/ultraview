import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const DEMO_VIDEO_SRC = "/demo.mp4";

export function DemoVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // autoplay policy: force muted playback as fallback
          v.muted = true;
          setMuted(true);
          void v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        });
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative mx-auto max-w-4xl"
    >
      <div className="absolute inset-x-10 -top-6 -z-10 h-40 rounded-full bg-primary/30 blur-[110px]" />
      <div className="glass-panel group relative overflow-hidden rounded-3xl border border-primary/25 p-2 shadow-[0_40px_120px_-50px_var(--glow-violet)]">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <video
            ref={ref}
            className="aspect-video h-auto w-full object-cover"
            playsInline
            loop
            muted={muted}
            preload="metadata"

            onClick={toggle}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={DEMO_VIDEO_SRC} type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={toggle}
              aria-label="Reproduzir demonstração"
              className="absolute inset-0 grid place-items-center bg-gradient-to-t from-background/80 via-background/20 to-transparent transition-colors"
            >
              <span className="uv-pulse-glow grid h-20 w-20 place-items-center rounded-full border border-primary/50 bg-primary/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                <Play className="h-8 w-8 translate-x-0.5 fill-current text-foreground" />
              </span>
            </button>
          )}

          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pausar" : "Reproduzir"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 backdrop-blur-md transition-colors hover:border-primary/60"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMuted((m) => !m)}
              aria-label={muted ? "Ativar som" : "Desativar som"}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 backdrop-blur-md transition-colors hover:border-primary/60"
            >
              {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

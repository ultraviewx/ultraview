import { motion } from "motion/react";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/uv-data";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
  return (
    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/15 font-display text-sm font-bold text-primary">
      {initials}
    </div>
  );
}

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="glass-card w-[19rem] shrink-0 p-6 sm:w-[23rem]">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar name={t.name} />
        <div className="min-w-0">
          <figcaption className="truncate font-semibold">{t.name}</figcaption>
          <p className="truncate text-xs text-muted-foreground">{t.city}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
        “{t.text}”
      </blockquote>
    </figure>
  );
}

export function TestimonialSlider() {
  const loop = [...testimonials, ...testimonials];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />
      <div className="uv-marquee flex w-max gap-5">
        {loop.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </motion.div>
  );
}

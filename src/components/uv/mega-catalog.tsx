import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { megaCatalog } from "@/lib/mega-catalog";

const IMG_BASE = "https://image.tmdb.org/t/p/w342";

export function MegaCatalog({ cta }: { cta?: React.ReactNode }) {
  const [active, setActive] = useState(megaCatalog[0].key);
  const section = megaCatalog.find((s) => s.key === active) ?? megaCatalog[0];

  return (
    <div className="mt-12">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {megaCatalog.map((s) => {
          const isActive = s.key === active;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => setActive(s.key)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-bold transition-all sm:text-sm ${
                isActive
                  ? "border-primary/70 bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[0_0_30px_-8px_var(--glow-violet)]"
                  : "border-border bg-white/[0.03] text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              <span aria-hidden="true" className="mr-1.5">
                {s.icon}
              </span>
              {s.label}
            </button>
          );
        })}
      </div>

      <motion.div
        key={section.key}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8"
      >
        {section.items.map((item) => (
          <article
            key={`${section.key}-${item.p}`}
            className="group relative overflow-hidden rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:shadow-[0_0_40px_-12px_var(--glow-violet)]"
          >
            <img
              src={`${IMG_BASE}${item.p}`}
              alt={`${item.t} (${item.y}) — ${section.label} na Ultra View`}
              loading="lazy"
              decoding="async"
              className="aspect-2/3 w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {item.r && (
              <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-bold backdrop-blur">
                <Star className="h-3 w-3 fill-primary text-primary" />
                {item.r}
              </span>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-2 pt-8">
              <h4 className="line-clamp-2 text-[11px] font-bold leading-tight sm:text-xs">
                {item.t}
              </h4>
              <span className="text-[10px] text-muted-foreground">{item.y}</span>
            </div>
          </article>
        ))}
      </motion.div>

      {cta && <div className="mt-10 flex justify-center">{cta}</div>}
    </div>
  );
}

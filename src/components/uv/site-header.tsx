import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X, Zap } from "lucide-react";
import logo from "@/assets/ultraview-logo.jpg";
import { navLinks } from "@/lib/uv-data";
import { CheckoutDialog } from "@/components/uv/whatsapp";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel border-b shadow-[0_10px_40px_-24px_var(--glow-violet)]" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#inicio" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Ultra View"
            className="h-10 w-10 shrink-0 rounded-xl border border-primary/30 object-cover shadow-[0_0_24px_-8px_var(--glow-violet)]"
          />
          <span className="truncate font-display text-lg font-extrabold tracking-tight">
            Ultra<span className="text-primary"> View</span>
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-2">
          <CheckoutDialog
            planName="Mensal"
            priceLabel="R$ 30/mês"
            checkoutUrl="https://mpago.la/2TjzxQE"
            trigger={
              <button className="btn-primary-glow ripple hidden px-5 py-2.5 text-xs uppercase tracking-wider sm:inline-flex">
                <Zap className="h-4 w-4" /> Começar Agora
              </button>
            }
          />
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
            className="glass-card grid h-10 w-10 shrink-0 place-items-center rounded-xl lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="glass-panel overflow-hidden border-t lg:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CheckoutDialog
                planName="Mensal"
                priceLabel="R$ 30/mês"
                checkoutUrl="https://mpago.la/2TjzxQE"
                trigger={
                  <button className="btn-primary-glow w-full text-xs uppercase tracking-wider">
                    <Zap className="h-4 w-4" /> Começar Agora
                  </button>
                }
              />
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}

import { useEffect, useState } from "react";
import { Check, Zap, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PENDING_KEY, trialDevices, waLink } from "@/lib/uv-data";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const dialogClass =
  "border-primary/25 bg-[oklch(0.13_0.05_285)]/85 backdrop-blur-2xl text-foreground shadow-[0_0_80px_-20px_var(--glow-violet)]";

export function TrialDialog({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<string | null>(null);
  const message = device
    ? `Olá, gostaria de conhecer a Ultra View. Vou assistir no meu ${device}.`
    : "";

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setDevice(null);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`${dialogClass} max-w-2xl`}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient-brand">
            {device ? "Falar no WhatsApp" : "Em qual aparelho você quer assistir?"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {device
              ? "Você será direcionado para o nosso atendimento no WhatsApp."
              : "Escolha seu dispositivo para conversar com um atendente agora mesmo."}
          </DialogDescription>
        </DialogHeader>
        {!device ? (
          <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {trialDevices.map((d) => {
              const Icon = d.icon;
              return (
                <button
                  key={d.name}
                  type="button"
                  onClick={() => setDevice(d.name)}
                  className="glass-card flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_0_30px_-8px_var(--glow-violet)]"
                >
                  <Icon className="h-7 w-7 text-primary" />
                  <span className="text-xs font-semibold leading-tight text-foreground/90">
                    {d.name}
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-whatsapp mt-2"
            >
              <WhatsAppIcon /> Falar no WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setDevice(null)}
              className="mt-2 text-center text-xs text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              ← Trocar de aparelho
            </button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function CheckoutDialog({
  trigger,
  planName,
  priceLabel,
  checkoutUrl,
}: {
  trigger: React.ReactNode;
  planName: string;
  priceLabel: string;
  checkoutUrl: string;
}) {
  const [open, setOpen] = useState(false);
  const [paid, setPaid] = useState(false);
  const proofMsg = `Olá! Acabei de realizar o pagamento do plano ${planName} (${priceLabel}) da Ultra View. Segue em anexo o comprovante para liberação do acesso.`;

  const goToCheckout = () => {
    try {
      localStorage.setItem(PENDING_KEY, JSON.stringify({ planName, priceLabel, ts: Date.now() }));
      window.dispatchEvent(new Event("ultraview-pending"));
    } catch {
      /* storage indisponível */
    }
    setPaid(true);
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
  };

  const sendProof = () => {
    try {
      localStorage.removeItem(PENDING_KEY);
      window.dispatchEvent(new Event("ultraview-pending"));
    } catch {
      /* storage indisponível */
    }
    window.open(waLink(proofMsg), "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) setPaid(false);
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`${dialogClass} max-w-lg`}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient-brand">
            Plano {planName} • {priceLabel}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {paid
              ? "Depois de pagar, toque no botão verde para nos enviar o comprovante."
              : "Siga os 2 passos abaixo para liberar seu acesso rapidamente."}
          </DialogDescription>
        </DialogHeader>
        <ol className="mt-2 space-y-3 text-sm text-foreground/90">
          <li
            className={`flex gap-3 rounded-2xl border p-3 ${paid ? "border-border/40 bg-white/[0.02] opacity-60" : "border-primary/25 bg-primary/10"}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
              {paid ? <Check className="h-4 w-4" /> : "1"}
            </span>
            <span>
              Clique em <b>“Ir para o checkout”</b> e finalize o pagamento com segurança.
            </span>
          </li>
          <li
            className={`flex gap-3 rounded-2xl border p-3 ${paid ? "border-emerald-400/60 bg-emerald-500/15 shadow-[0_0_30px_-8px_rgba(16,185,129,0.8)]" : "border-emerald-400/20 bg-emerald-500/5"}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
              2
            </span>
            <span>
              Após pagar, clique em <b>“Enviar comprovante”</b> e anexe o print. Liberamos seu
              acesso em poucos minutos.
            </span>
          </li>
        </ol>
        <div className="mt-4 flex flex-col gap-2">
          {!paid && (
            <button onClick={goToCheckout} className="btn-primary-glow w-full">
              <Zap className="h-4 w-4" /> Ir para o checkout
            </button>
          )}
          <button
            type="button"
            onClick={sendProof}
            className={`btn-whatsapp w-full ${paid ? "ring-2 ring-emerald-300/70" : ""}`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            {paid ? "Já paguei — Enviar comprovante agora" : "Já paguei — Enviar comprovante"}
          </button>
          {paid && (
            <button
              type="button"
              onClick={goToCheckout}
              className="text-xs text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              Reabrir página de pagamento
            </button>
          )}
        </div>
        <p className="mt-2 text-center text-xs text-muted-foreground">
          Atendimento humanizado • Liberação rápida
        </p>
      </DialogContent>
    </Dialog>
  );
}

type PendingPayment = { planName: string; priceLabel: string; ts: number };

export function PendingProofBanner() {
  const [pending, setPending] = useState<PendingPayment | null>(null);

  useEffect(() => {
    const read = () => {
      try {
        const raw = localStorage.getItem(PENDING_KEY);
        setPending(raw ? (JSON.parse(raw) as PendingPayment) : null);
      } catch {
        setPending(null);
      }
    };
    read();
    window.addEventListener("focus", read);
    window.addEventListener("ultraview-pending", read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener("focus", read);
      window.removeEventListener("ultraview-pending", read);
      window.removeEventListener("storage", read);
    };
  }, []);

  if (!pending) return null;

  const proofMsg = `Olá! Acabei de realizar o pagamento do plano ${pending.planName} (${pending.priceLabel}) da Ultra View. Segue em anexo o comprovante para liberação do acesso.`;

  const dismiss = () => {
    try {
      localStorage.removeItem(PENDING_KEY);
    } catch {
      /* noop */
    }
    setPending(null);
  };

  const sendProof = () => {
    window.open(waLink(proofMsg), "_blank", "noopener,noreferrer");
    dismiss();
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-60 p-3 sm:p-4">
      <div className="pointer-events-auto mx-auto flex max-w-2xl items-center gap-3 rounded-2xl border border-emerald-400/50 bg-[oklch(0.13_0.05_285)]/90 p-4 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(16,185,129,0.9)]">
        <div className="min-w-0 flex-1 text-left">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
            Pagamento iniciado
          </div>
          <div className="text-sm font-semibold text-foreground">
            Já pagou o plano {pending.planName}? Envie o comprovante para liberarmos o acesso.
          </div>
        </div>
        <button type="button" onClick={sendProof} className="btn-whatsapp shrink-0 px-4 py-2.5">
          <WhatsAppIcon className="h-4 w-4" />
          <span className="hidden sm:inline">Enviar comprovante</span>
        </button>
        <button
          onClick={dismiss}
          aria-label="Fechar"
          className="shrink-0 p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

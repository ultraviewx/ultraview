import { useEffect, useState } from "react";
import { ArrowRight, Check, Copy, Zap, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PENDING_KEY,
  ourMonthly,
  rivalServices,
  rivalTotal,
  savingsLabel,
  trialDevices,
  waLink,
} from "@/lib/uv-data";
import { PIX_KEY, PIX_KEY_TYPE, buildPixPayload } from "@/lib/pix";


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

export function PlanComparison({ compact = false }: { compact?: boolean }) {
  return (
    <div className="glass-card border-primary/25 p-5 sm:p-6">
      <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
        Compare e economize
      </div>
      <div className={`mt-5 grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-4"}`}>
        {rivalServices.map((r) => (
          <div key={r.name} className="rounded-2xl border border-border bg-white/[0.03] p-3 text-center">
            <div className="mx-auto grid h-8 w-8 place-items-center rounded-lg border border-border text-xs font-extrabold text-muted-foreground">
              {r.initials}
            </div>
            <div className="mt-2 text-xs font-semibold">{r.name}</div>
            <div className="mt-1 font-display text-sm font-extrabold text-foreground/80 line-through decoration-destructive/70">
              {r.price}
            </div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">por mês</div>
          </div>
        ))}
      </div>
      <div className="mt-4 grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-center">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Total dos 4 serviços
          </div>
          <div className="font-display text-2xl font-extrabold line-through decoration-destructive/70">
            {rivalTotal}
          </div>
          <div className="text-[10px] text-muted-foreground">por mês</div>
        </div>
        <div className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
          vs
        </div>
        <div className="rounded-2xl border border-primary/50 bg-primary/12 p-4 text-center shadow-[0_0_50px_-18px_var(--glow-violet)]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-primary">
            ⭐ Ultra View
          </div>
          <div className="font-display text-2xl font-extrabold text-gradient-brand">{ourMonthly}</div>
          <div className="text-[10px] text-muted-foreground">/mês</div>
        </div>
      </div>
      <p className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-3 text-center text-xs leading-relaxed text-foreground/90">
        💰 Você economiza mais de <b>{savingsLabel}</b> por mês com o mesmo conteúdo — e ainda leva
        canais ao vivo.
      </p>
    </div>
  );
}

const STEPS = ["Plano", "Dados", "Pagamento", "Acesso"];

export function CheckoutDialog({
  trigger,
  planName,
  priceLabel,
  amount,
  features = [],
}: {
  trigger: React.ReactNode;
  planName: string;
  priceLabel: string;
  amount: number;
  features?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tab, setTab] = useState<"qr" | "key">("qr");
  const [copied, setCopied] = useState<string | null>(null);

  const payload = buildPixPayload(amount, `ULTRAVIEW ${planName}`);

  const reset = () => {
    setStep(0);
    setTab("qr");
    setCopied(null);
  };

  const copy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied(null), 2200);
    } catch {
      /* clipboard indisponível */
    }
  };

  const goToPayment = () => {
    try {
      localStorage.setItem(PENDING_KEY, JSON.stringify({ planName, priceLabel, ts: Date.now() }));
      window.dispatchEvent(new Event("ultraview-pending"));
    } catch {
      /* storage indisponível */
    }
    setStep(2);
  };

  const proofMsg = `Olá! Sou ${name || "cliente"} (${phone || "WhatsApp"}). Acabei de pagar o plano ${planName} (${priceLabel}) da Ultra View via PIX. Segue o comprovante para liberar meu acesso.`;

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
        if (!o) reset();
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={`${dialogClass} max-h-[90vh] max-w-lg overflow-y-auto`}>
        <DialogHeader>
          <DialogTitle className="text-2xl text-gradient-brand">Assinar plano {planName}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Plano {planName} — {priceLabel}. Siga as 4 etapas para liberar seu acesso.
          </DialogDescription>
        </DialogHeader>

        <ol className="mt-1 grid grid-cols-4 gap-1.5">
          {STEPS.map((s, i) => (
            <li key={s} className="text-center">
              <div
                className={`h-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`}
              />
              <span
                className={`mt-1.5 block text-[9px] font-bold uppercase tracking-wider ${i <= step ? "text-primary" : "text-muted-foreground"}`}
              >
                {s}
              </span>
            </li>
          ))}
        </ol>

        {step === 0 && (
          <div className="mt-3 space-y-4">
            <div className="glass-card border-primary/40 p-5">
              <h3 className="font-display text-lg font-bold">Plano {planName}</h3>
              <p className="mt-1 font-display text-3xl font-extrabold text-gradient-brand">
                {priceLabel}
              </p>
              <ul className="mt-4 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <PlanComparison compact />
            <button onClick={() => setStep(1)} className="btn-primary-glow w-full">
              Continuar <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Ambiente seguro • Cancele quando quiser
            </p>
          </div>
        )}

        {step === 1 && (
          <div className="mt-3 space-y-4">
            <label className="block text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Seu nome
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar?"
                className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
              />
            </label>
            <label className="block text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Seu WhatsApp (com DDD)
              </span>
              <input
                value={phone}
                inputMode="tel"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(85) 99999-9999"
                className="mt-1.5 w-full rounded-xl border border-border bg-white/[0.04] px-4 py-3 text-sm outline-none transition-colors focus:border-primary/70"
              />
            </label>
            <p className="text-xs text-muted-foreground">
              Vamos liberar seu acesso por este número após o pagamento.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">100% seguro</span>
              <span className="rounded-full border border-border px-3 py-1">PIX na hora</span>
              <span className="rounded-full border border-border px-3 py-1">Suporte 7 dias</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setStep(0)} className="btn-ghost-glass flex-1 text-sm">
                Voltar
              </button>
              <button onClick={goToPayment} className="btn-primary-glow flex-[2] text-sm">
                <Zap className="h-4 w-4" /> Gerar PIX
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="mt-3 space-y-4">
            <div className="text-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Pague com PIX
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold">{priceLabel}</div>
            </div>
            <div className="grid grid-cols-2 gap-1 rounded-xl border border-border p-1">
              {(["qr", "key"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`rounded-lg py-2 text-xs font-bold transition-colors ${
                    tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  {t === "qr" ? "QR Code" : "Chave PIX"}
                </button>
              ))}
            </div>

            {tab === "qr" ? (
              <div className="flex flex-col items-center gap-3">
                <div className="rounded-2xl bg-white p-3">
                  <QRCodeSVG value={payload} size={190} level="M" />
                </div>
                <button
                  onClick={() => copy(payload, "code")}
                  className="btn-ghost-glass w-full text-xs"
                >
                  <Copy className="h-4 w-4" />
                  {copied === "code" ? "Código PIX copiado!" : "Copiar código PIX (copia e cola)"}
                </button>
              </div>
            ) : (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Chave PIX ({PIX_KEY_TYPE})
                </div>
                <div className="mt-1 break-all font-display text-base font-extrabold">{PIX_KEY}</div>
                <button
                  onClick={() => copy(PIX_KEY, "key")}
                  className="btn-primary-glow mt-3 w-full text-xs"
                >
                  <Copy className="h-4 w-4" />
                  {copied === "key" ? "Chave copiada!" : "Copiar chave PIX"}
                </button>
              </div>
            )}

            <div className="rounded-2xl border border-border bg-white/[0.03] p-4 text-left">
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Como pagar:
              </div>
              <ol className="mt-2 list-decimal space-y-1 pl-4 text-xs leading-relaxed text-muted-foreground">
                {tab === "qr" ? (
                  <>
                    <li>Abra o app do seu banco e escolha PIX &gt; Ler QR Code.</li>
                    <li>Confirme o valor de {priceLabel.split("/")[0]}.</li>
                  </>
                ) : (
                  <>
                    <li>Abra o app do seu banco e escolha PIX &gt; Pagar com chave.</li>
                    <li>Selecione o tipo {PIX_KEY_TYPE} e cole a chave acima.</li>
                    <li>Digite o valor de {priceLabel.split("/")[0]} e confirme.</li>
                  </>
                )}
                <li>Depois de pagar, toque em “Já paguei” abaixo.</li>
              </ol>
            </div>

            <div className="flex gap-2">
              <button onClick={() => setStep(1)} className="btn-ghost-glass flex-1 text-sm">
                Voltar
              </button>
              <button onClick={() => setStep(3)} className="btn-primary-glow flex-[2] text-sm">
                <Check className="h-4 w-4" /> Já paguei
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="mt-3 space-y-4 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-emerald-400/40 bg-emerald-500/15 text-emerald-300">
              <Check className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-bold">Pagamento realizado?</h3>
            <p className="text-sm text-muted-foreground">
              Toque abaixo para enviar o comprovante no WhatsApp e liberar seu acesso em minutos.
            </p>
            <button onClick={sendProof} className="btn-whatsapp w-full">
              <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
            </button>
            <p className="text-xs text-muted-foreground">
              Envie o comprovante e nossa equipe libera seu acesso imediatamente.
            </p>
          </div>
        )}
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

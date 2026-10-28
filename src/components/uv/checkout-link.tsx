import { Button } from "@/components/ui/button";
import type { Plan } from "@/lib/uv-data";

export function CheckoutLink({ plan, children, className }: {
  plan: Plan;
  children: React.ReactNode;
  className?: string;
}) {
  if (!plan.checkoutUrl) return null;
  return (
    <Button asChild variant="ghost" className={`h-auto ${className ?? ""}`}>
      <a href={plan.checkoutUrl}>{children}</a>
    </Button>
  );
}
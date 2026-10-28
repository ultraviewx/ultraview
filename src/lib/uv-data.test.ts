import { describe, expect, test } from "bun:test";
import { monthlyPlan, mostExpensivePlan, paidPlans, plans, WHATSAPP_NUMBER } from "./uv-data";

describe("planos e encaminhamentos", () => {
  test("Mensal custa 29,99 e usa o checkout informado", () => {
    expect(monthlyPlan.amount).toBe(29.99);
    expect(monthlyPlan.checkoutUrl).toBe("https://pay.kiwify.com.br/rCHmvXF");
  });
  test("Trimestral custa 80 e usa o checkout informado", () => {
    const plan = paidPlans.find(p => p.name === "Trimestral");
    expect(plan?.amount).toBe(80);
    expect(plan?.checkoutUrl).toBe("https://pay.kiwify.com.br/62flL8k");
  });
  test("Semestral custa 160 e usa o checkout informado", () => {
    const plan = paidPlans.find(p => p.name === "Semestral");
    expect(plan?.amount).toBe(160);
    expect(plan?.checkoutUrl).toBe("https://pay.kiwify.com.br/1EJFGP2");
  });
  test("Começar agora usa o plano mais caro", () => {
    expect(mostExpensivePlan.name).toBe("Semestral");
    expect(mostExpensivePlan.checkoutUrl).toBe("https://pay.kiwify.com.br/1EJFGP2");
  });
  test("teste gratuito mantém WhatsApp sem checkout pago", () => {
    const trial = plans.find(p => p.name === "Teste Grátis");
    expect(trial).toBeDefined();
    expect(trial?.amount).toBeUndefined();
    expect(trial?.checkoutUrl).toBeUndefined();
    expect(WHATSAPP_NUMBER).toBe("5585991173080");
  });
  test("somente os três planos pagos solicitados ficam disponíveis", () => {
    expect(paidPlans.map(p => p.name)).toEqual(["Mensal", "Trimestral", "Semestral"]);
    expect(plans.length).toBe(4);
  });
});
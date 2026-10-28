import { describe, test } from "node:test";
import { strict as assert } from "node:assert";
import { monthlyPlan, mostExpensivePlan, paidPlans, plans, WHATSAPP_NUMBER } from "./uv-data";

describe("planos e encaminhamentos", () => {
  test("Mensal custa 29,99 e usa o checkout informado", () => {
    assert.equal(monthlyPlan.amount, 29.99);
    assert.equal(monthlyPlan.checkoutUrl, "https://pay.kiwify.com.br/rCHmvXF");
  });
  test("Trimestral custa 80 e usa o checkout informado", () => {
    const plan = paidPlans.find(p => p.name === "Trimestral");
    assert.equal(plan?.amount, 80);
    assert.equal(plan?.checkoutUrl, "https://pay.kiwify.com.br/62flL8k");
  });
  test("Semestral custa 160 e usa o checkout informado", () => {
    const plan = paidPlans.find(p => p.name === "Semestral");
    assert.equal(plan?.amount, 160);
    assert.equal(plan?.checkoutUrl, "https://pay.kiwify.com.br/1EJFGP2");
  });
  test("Começar agora usa o plano mais caro", () => {
    assert.equal(mostExpensivePlan.name, "Semestral");
    assert.equal(mostExpensivePlan.checkoutUrl, "https://pay.kiwify.com.br/1EJFGP2");
  });
  test("teste gratuito mantém WhatsApp sem checkout pago", () => {
    const trial = plans.find(p => p.name === "Teste Grátis");
    assert.ok(trial);
    assert.equal(trial.amount, undefined);
    assert.equal(trial.checkoutUrl, undefined);
    assert.equal(WHATSAPP_NUMBER, "5585991173080");
  });
  test("somente os três planos pagos solicitados ficam disponíveis", () => {
    assert.deepEqual(paidPlans.map(p => p.name), ["Mensal", "Trimestral", "Semestral"]);
    assert.equal(plans.length, 4);
  });
});
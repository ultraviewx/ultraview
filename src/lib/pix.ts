export const PIX_KEY = "85991173080";
export const PIX_KEY_TYPE = "Telefone";

/** QR Codes oficiais (Mercado Pago) por valor do plano. */
export const PIX_QR_BY_AMOUNT: Record<string, string> = {
  "5.00":
    "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/341b7514-396b-4150-92d1-c29148f05a015204000053039865802BR592560.445.800 VITORIA STEPHA6009SAO PAULO62070503***6304B1C1",
  "8.99":
    "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/75f167e6-8f0d-40a6-b6e1-e4252cef9bf45204000053039865802BR592560.445.800 VITORIA STEPHA6009SAO PAULO62070503***6304F020",
  "29.99":
    "00020101021226940014BR.GOV.BCB.PIX2572pix-qr.mercadopago.com/instore/o/v2/9797a840-f9fe-4442-9f5c-8b19650e93975204000053039865802BR592560.445.800 VITORIA STEPHA6009SAO PAULO62070503***6304C4EF",
};
export const PIX_MERCHANT = "ULTRA VIEW";
export const PIX_CITY = "FORTALEZA";

function tag(id: string, value: string) {
  return `${id}${String(value.length).padStart(2, "0")}${value}`;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function sanitize(value: string, max: number) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9 ]/g, "")
    .toUpperCase()
    .slice(0, max);
}

/** Gera o código PIX "copia e cola" (BR Code) para um valor em reais. */
export function buildPixPayload(amount: number, reference = "ULTRAVIEW") {
  const official = PIX_QR_BY_AMOUNT[amount.toFixed(2)];
  if (official) return official;
  const merchantAccount = tag("00", "BR.GOV.BCB.PIX") + tag("01", PIX_KEY);
  const payload =
    tag("00", "01") +
    tag("26", merchantAccount) +
    tag("52", "0000") +
    tag("53", "986") +
    (amount > 0 ? tag("54", amount.toFixed(2)) : "") +
    tag("58", "BR") +
    tag("59", sanitize(PIX_MERCHANT, 25)) +
    tag("60", sanitize(PIX_CITY, 15)) +
    tag("62", tag("05", sanitize(reference, 25) || "***"));
  const withCrcId = `${payload}6304`;
  return `${withCrcId}${crc16(withCrcId)}`;
}

export function formatBRL(amount: number) {
  return amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

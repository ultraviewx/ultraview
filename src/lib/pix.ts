export const PIX_KEY = "pdrvieira01@gmail.com";
export const PIX_KEY_TYPE = "E-mail";
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

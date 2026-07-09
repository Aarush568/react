export function parsePrice(price) {
  return Number(String(price).replace(/[^0-9.]/g, '')) || 0;
}

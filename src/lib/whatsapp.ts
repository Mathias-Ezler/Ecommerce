export const WA_NUMBER: string =
  import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? "595981000000";

export const formatPrice = (n: number) => `$${n.toFixed(2)}`;

/**
 * Plantilla del mensaje. "{size}" se reemplaza por "Talle: M. " al elegir talle
 * (lo hace el script de Layout.astro en el navegador).
 */
export function messageTemplate(name: string, price: number) {
  return `Hola GLAM! Me interesa: ${name} (${formatPrice(price)}). {size}¿Está disponible?`;
}

export function buildWaLink(template: string, size = "") {
  const text = template.replace("{size}", size ? `Talle: ${size}. ` : "");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}
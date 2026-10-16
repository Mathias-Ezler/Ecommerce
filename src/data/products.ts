export type Category = "Chaquetas" | "Remeras" | "Pantalones" | "Accesorios";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
  color: string;
  sizes: string[];
}

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;
const CLOTHES = ["S", "M", "L", "XL"];

export const categories: Category[] = ["Chaquetas", "Remeras", "Pantalones", "Accesorios"];

export const products: Product[] = [
  { slug: "chaqueta-overcoat-minimalista", name: "Chaqueta Overcoat Minimalista", category: "Chaquetas", price: 180, image: img("photo-1544441893-675973e31985"), description: "Chaqueta de lana de corte holgado en tono negro profundo. Diseñada para mantener siluetas estructuradas con máximo confort.", color: "Negro", sizes: CLOTHES },
  { slug: "remera-heavyweight-monocroma", name: "Remera Heavyweight Monocroma", category: "Remeras", price: 45, image: img("photo-1521572267360-ee0c2909d518"), description: "Remera de algodón peinado de 240g con cuello cerrado y mangas de caída recta sin costuras visibles.", color: "Blanco", sizes: CLOTHES },
  { slug: "pantalon-tailored-wide-leg", name: "Pantalón Tailored Wide Leg", category: "Pantalones", price: 95, image: img("photo-1509631179647-0177331693ae"), description: "Pantalón de vestir tiro alto con pinzas frontales profundas y caída fluida. Ideal para looks formales o relajados.", color: "Gris Oscuro", sizes: CLOTHES },
  { slug: "gafas-de-sol-estructura-recta", name: "Gafas de Sol Estructura Recta", category: "Accesorios", price: 60, image: img("photo-1511499767150-a48a237f0083"), description: "Gafas de acetato pulido en acabado mate con lentes de máxima protección UV400.", color: "Negro", sizes: ["Único"] },
  { slug: "tapado-estructura-larga", name: "Tapado de Estructura Larga", category: "Chaquetas", price: 220, image: img("photo-1539533018447-63fcce2678e3"), description: "Tapado atemporal en paño gris carbón. Botones ocultos y solapa delgada.", color: "Gris", sizes: CLOTHES },
  { slug: "remera-sisa-relaxed-fit", name: "Remera Sisa Relaxed Fit", category: "Remeras", price: 40, image: img("photo-1583743814966-8936f5b7be1a"), description: "Remera con sisa holgada, textura ultrasuave y estética urbana contemporánea.", color: "Negro", sizes: CLOTHES },
  { slug: "pantalon-cargo-minimal", name: "Pantalón Cargo Minimal", category: "Pantalones", price: 110, image: img("photo-1624378439575-d8705ad7ae80"), description: "Pantalón cargo de corte sobrio con bolsillos laterales planos en gabardina pesada.", color: "Negro", sizes: CLOTHES },
  { slug: "bolso-tote-estructurado", name: "Bolso Tote Estructurado GLAM", category: "Accesorios", price: 85, image: img("photo-1548036328-c9fa89d128fa"), description: "Bolso tote rígido de cuero sintético mate con compartimento interno para laptop.", color: "Negro", sizes: ["Único"] },
];
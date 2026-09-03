import type { Metadata } from "next";
import "./globals.css";

/** Endereço-base usado para transformar a imagem social em uma URL absoluta. */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/** Informações exibidas na aba do navegador e nos resultados de busca. */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nelson Souza | Desenvolvedor de Software",
  description: "Links oficiais, portfólio, projetos, contatos e conteúdos gratuitos de Nelson Souza.",
  openGraph: {
    title: "Nelson Souza | Desenvolvedor de Software",
    description: "Projetos, portfólio e contatos profissionais.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Área de links de Nelson Souza" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

/** Estrutura raiz compartilhada por todas as páginas. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

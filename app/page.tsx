import Image from "next/image";
import type { IconType } from "react-icons";
import { FaBookOpen, FaBriefcase, FaCode, FaEnvelope, FaGithub, FaGraduationCap, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";

/** Formato compartilhado por todos os cartões. Copie-o para adicionar um link. */
type LinkItem = { title: string; description: string; href: string; icon: IconType; external?: boolean; status?: string; disabled?: boolean };

/** Endereços oficiais reunidos em um só lugar para facilitar a manutenção. */
const CONTACT_LINKS = {
  email: "mailto:nelsonsouza0328@gmail.com",
  github: "https://github.com/nelsonlsouza",
  instagram: "https://instagram.com/nelsonn.dev",
  linkedin: "https://linkedin.com/in/nelsonlsouza/",
  portfolio: "https://nelson-souza-portfolio.vercel.app",
  whatsapp: "https://wa.me/5592984588149",
} as const;

/** Conteúdo principal, dividido entre carreira e projetos independentes. */
const FEATURED_LINKS: LinkItem[] = [
  { title: "Projetos para carreira", description: "Cases corporativos para vagas, estágios e oportunidades em tecnologia.", href: CONTACT_LINKS.github, icon: FaBriefcase, status: "Em breve", disabled: true },
  { title: "Portfólio de desenvolvimento", description: "Quem sou, minha stack e os projetos que representam meu trabalho.", href: CONTACT_LINKS.portfolio, icon: FaCode, external: true },
  { title: "Projetos profissionais e acadêmicos", description: "Soluções de gestão, estudos e trabalhos desenvolvidos por fora.", href: "/portfolio", icon: FaGraduationCap },
  { title: "Conteúdos gratuitos", description: "Dicas, cursos, livros e materiais livres para continuar aprendendo.", href: "#conteudos", icon: FaBookOpen, status: "Em breve" },
];

/** Canais disponíveis para recrutadores, clientes e parceiros. */
const CONTACTS: LinkItem[] = [
  { title: "LinkedIn", description: "Carreira, experiências e conexões profissionais.", href: CONTACT_LINKS.linkedin, icon: FaLinkedinIn, external: true },
  { title: "WhatsApp", description: "Converse comigo diretamente.", href: CONTACT_LINKS.whatsapp, icon: FaWhatsapp, external: true },
  { title: "E-mail", description: "Envie propostas, convites e oportunidades.", href: CONTACT_LINKS.email, icon: FaEnvelope },
];

/** Cabeçalho de apresentação e navegação rápida. */
function ProfileHeader() {
  return <header className="profile-header">
    <nav className="top-navigation" aria-label="Navegação da página">
      <a className="brand-link" href="#inicio" aria-label="Voltar ao início"><Image className="brand-logo" src="/logo-nelson.png" width={1254} height={1254} alt="Símbolo da marca Nelson Souza Dev" priority /></a>
      <a className="contact-shortcut" href="#contato">Contato</a>
    </nav>
    <div className="profile-picture" aria-hidden="true"><Image src="/logo-nelson.png" width={1254} height={1254} alt="" priority /></div>
    <p className="eyebrow">DESENVOLVEDOR DE SOFTWARE</p>
    <h1>Nelson Souza</h1>
    <p className="username">@nelsonn.dev</p>
    <p className="intro">Transformo ideias em soluções digitais simples, úteis e bem construídas.</p>
    <div className="social-list" aria-label="Redes sociais">
      <a href={CONTACT_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram aria-hidden="true" /></a>
      <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn aria-hidden="true" /></a>
      <a href={CONTACT_LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub aria-hidden="true" /></a>
      <a href={CONTACT_LINKS.email} aria-label="E-mail"><FaEnvelope aria-hidden="true" /></a>
    </div>
  </header>;
}

/** Título reutilizável para manter as seções simples e padronizadas. */
function SectionTitle({ id, title }: { id: string; title: string }) {
  return <div className="section-title"><h2 id={id}>{title}</h2></div>;
}

/** Cartão acessível para links internos ou externos. */
function LinkCard({ title, description, href, icon: Icon, external, status, disabled }: LinkItem) {
  const content = <>
    <span className="card-icon"><Icon aria-hidden="true" /></span>
    <span className="card-copy"><strong>{title}</strong><small>{description}</small></span>
    <span className={status ? "card-status" : "card-arrow"} aria-hidden="true">{status ?? "↗"}</span>
  </>;

  if (disabled) {
    return <div className="link-card is-disabled" aria-disabled="true">{content}</div>;
  }

  return <a className="link-card" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{content}</a>;
}

/** Página estática: não envia JavaScript interativo desnecessário ao navegador. */
export default function Home() {
  return <main id="inicio">
    <ProfileHeader />
    <section className="link-section" aria-labelledby="areas-title"><SectionTitle id="areas-title" title="Escolha uma área" /><div className="card-list">{FEATURED_LINKS.map((link) => <LinkCard key={link.title} {...link} />)}</div></section>
    <section className="link-section" id="contato" aria-labelledby="contact-title"><SectionTitle id="contact-title" title="Vamos conversar" /><div className="card-list">{CONTACTS.map((link) => <LinkCard key={link.title} {...link} />)}</div></section>
    <footer><p>© {new Date().getFullYear()} Nelson Souza</p><span>Feito com React e TypeScript.</span></footer>
  </main>;
}

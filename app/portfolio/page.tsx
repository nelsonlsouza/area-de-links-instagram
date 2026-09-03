import Link from "next/link";
import { FaArrowLeft, FaBriefcase, FaGraduationCap } from "react-icons/fa6";

/** Página reservada aos futuros projetos independentes e acadêmicos. */
export default function PortfolioPage() {
  return <main className="portfolio-page">
    <Link className="back-link" href="/"><FaArrowLeft aria-hidden="true" /> Voltar para o início</Link>
    <header className="portfolio-header"><p className="eyebrow">PORTFÓLIO COMPLEMENTAR</p><h1>Projetos profissionais e acadêmicos</h1></header>
    <section className="project-placeholder" aria-label="Categorias de projetos">
      <article><FaBriefcase aria-hidden="true" /><h2>Projetos de gestão</h2><p>Soluções e processos desenvolvidos em experiências profissionais independentes.</p><span>Em preparação</span></article>
      <article><FaGraduationCap aria-hidden="true" /><h2>Projetos acadêmicos</h2><p>Pesquisas, estudos de caso e entregas construídas durante a formação.</p><span>Em preparação</span></article>
    </section>
  </main>;
}

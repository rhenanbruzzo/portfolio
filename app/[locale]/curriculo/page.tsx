import { useTranslations } from "next-intl"
import type { Metadata } from "next"
import ResumeDownloadButtons from "@/components/resume/ResumeDownloadButtons"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Currículo — Rhenan Bruzzo",
  }
}

export default function ResumePage() {
  const t = useTranslations("resume")

  return (
    <div className="min-h-screen bg-(--color-surface)">
      {/* Barra de download */}
      <div className="no-print sticky top-0 z-10 bg-(--color-surface) py-4">
        <div className="max-w-[860px] mx-auto px-6 md:px-16 flex items-center gap-4">
        <span className="font-body text-sm text-(--color-text-primary) font-medium">
          {t("downloadLabel")}
        </span>
        <ResumeDownloadButtons />
      </div>
      </div>

      {/* Conteúdo do currículo */}
      <main className="max-w-[860px] mx-auto px-6 md:px-16 pt-4 pb-16">

        {/* Cabeçalho */}
        <header className="mb-10 pb-8 border-b border-(--color-border)">
          <h1 className="font-display font-semibold text-2xl md:text-3xl text-(--color-text-primary)">
            Rhenan Bruzzo de Oliveira
          </h1>

          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 font-body text-sm text-(--color-text-secondary)">
  <span>Brasileiro, casado, 35 anos</span>
  <span>rhenanbruzzo@gmail.com</span>
  <span>Guarulhos — SP</span>
</div>

<div className="flex flex-wrap gap-x-6 gap-y-1 mt-2 font-body text-sm">
  <a href="https://www.linkedin.com/in/rhenanbruzzo/" target="_blank" rel="noopener noreferrer" className="text-(--color-accent) hover:underline">linkedin.com/in/rhenanbruzzo</a>
  <a href="https://github.com/rhenanbruzzo" target="_blank" rel="noopener noreferrer" className="text-(--color-accent) hover:underline">github.com/rhenanbruzzo</a>
  <a href="https://dribbble.com/rhenanbruzzo91" target="_blank" rel="noopener noreferrer" className="text-(--color-accent) hover:underline">dribbble.com/rhenanbruzzo91</a>
</div>
        </header>

        {/* Resumo */}
        <section className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-(--color-text-tertiary) mb-4">
            {t("sections.summary")}
          </h2>
          <div className="font-body text-sm leading-relaxed text-(--color-text-secondary) space-y-3">
            <p>Product Designer apaixonado e criativo, com 6 anos de experiência na criação de experiências e interfaces digitais voltadas para o ecossistema de e-commerce, atuando em contextos B2B e B2C, incluindo apps, admins e sites.</p>
            <p>Com mais de 10 anos de atuação em diversas áreas do design, agora dedico-me exclusivamente ao design de produtos digitais. Busco o aprimoramento profissional contínuo e mantenho-me atualizado sobre as últimas tendências e melhores práticas em experiências que atendam às necessidades dos usuários.</p>
            <p>Busco constante evolução profissional, acompanhando tendências, metodologias e boas práticas que gerem impacto real no negócio e na experiência do usuário. Atualmente, estou focado em me aprimorar como Product Designer com especialização em Design Systems, explorando também o uso de inteligência artificial para otimizar processos de criação, documentação e evolução de sistemas de design, aumentando a eficiência e a qualidade das entregas.</p>
          </div>
        </section>

        {/* Experiência */}
        <section className="mb-10">
          <h2 className="font-mono text-xs uppercase tracking-wider text-(--color-text-tertiary) mb-6">
            {t("sections.experience")}
          </h2>

          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-display font-medium text-base text-(--color-text-primary)">
                    {t(`experience.${i}.role`)}
                  </h3>
                  <p className="font-body text-sm text-(--color-accent) mt-0.5">
                    {t(`experience.${i}.company`)}
                  </p>
                  <p className="font-body text-sm text-(--color-text-secondary) mt-2 leading-relaxed">
                    {t(`experience.${i}.description`)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs text-(--color-text-primary) font-medium whitespace-nowrap">
                    {t(`experience.${i}.period`)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Formação */}
        <section>
          <h2 className="font-mono text-xs uppercase tracking-wider text-(--color-text-tertiary) mb-6">
            {t("sections.education")}
          </h2>

          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <h3 className="font-display font-medium text-base text-(--color-text-primary)">
                    {t(`education.${i}.degree`)}
                  </h3>
                  <p className="font-body text-sm text-(--color-text-secondary)">
                    {t(`education.${i}.school`)}
                  </p>
                </div>
                <span className="font-mono text-xs text-(--color-text-primary) font-medium whitespace-nowrap">
                  {t(`education.${i}.period`)}
                </span>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}
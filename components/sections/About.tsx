import { useTranslations } from "next-intl"

const tagIds = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]

const photoPlaceholder = "/rhenan.png"

export default function About() {
  const t = useTranslations("about")

  return (
    <section
      id="about"
      className="px-6 md:px-24 py-10 md:py-16 max-w-[1440px] mx-auto"
    >
      <div className="flex items-end justify-between border-b border-(--color-border) pb-4 mb-8">
        <h2 className="font-mono text-sm uppercase tracking-wider text-(--color-text-secondary)">
          {t("heading")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-8 md:gap-10 items-stretch">
        {/* Coluna esquerda: bio + chips */}
        <div className="flex flex-col min-w-0">
          <p className="font-body text-base md:text-lg leading-relaxed text-(--color-text-secondary)">
            {t("bio")}
          </p>

          <div className="mt-10 md:mt-auto md:pt-10 overflow-hidden">
            <ul className="marquee-track flex gap-2">
              {[...tagIds, ...tagIds].map((id, i) => (
                <li
                  key={`${id}-${i}`}
                  className="flex-shrink-0 font-body text-sm px-3 py-1.5 rounded-full border border-(--color-border-strong) text-(--color-text-secondary) whitespace-nowrap"
                  aria-hidden={i >= tagIds.length}
                >
                  {t(`tags.${id}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Coluna direita: foto */}
        <div className="order-first md:order-last">
          <div
            className="aspect-[4/5] w-full rounded-lg bg-cover bg-center"
            style={{ backgroundImage: `url(${photoPlaceholder})` }}
          />
        </div>
      </div>
    </section>
  )
}
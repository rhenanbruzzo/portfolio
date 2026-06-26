"use client"

import { useTranslations } from "next-intl"

const cases = [
  {
    id: "case1",
    number: "01",
    slug: "case-1",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
  },
  {
    id: "case2",
    number: "02",
    slug: "case-2",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
  },
  {
    id: "case3",
    number: "03",
    slug: "case-3",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
  },
  {
    id: "case4",
    number: "04",
    slug: "case-4",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&q=80",
  },
]

export default function Cases() {
  const t = useTranslations("cases")

  return (
    <section
      id="work"
      className="px-6 md:px-24 py-10 md:py-16 max-w-[1440px] mx-auto"
    >
      <div className="flex items-end justify-between border-b border-(--color-border) pb-4 mb-8">
        <h2 className="font-mono text-sm uppercase tracking-wider text-(--color-text-secondary)">
          {t("heading")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cases.map((item) => (
          <a
          key={item.id}
          href={`/cases/${item.slug}`}
          className="group relative aspect-[608/440] overflow-hidden rounded-lg block transition-transform duration-300 ease-out hover:-translate-y-1"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
          <div className="relative h-full p-8 md:p-10 flex flex-col justify-end text-white">
            <div>
              <h3 className="font-display font-medium text-2xl md:text-3xl leading-tight text-white">
                {t(`items.${item.id}.title`)}
              </h3>
              <p className="font-body text-sm md:text-base leading-relaxed text-white/90 max-w-md mt-3">
                {t(`items.${item.id}.description`)}
              </p>
            </div>
          </div>
        </a>
        ))}
      </div>
    </section>
  )
}
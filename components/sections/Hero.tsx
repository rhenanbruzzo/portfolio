import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section
  id="top"
  className="px-6 md:px-24 pt-10 md:pt-16 pb-10 md:pb-16 max-w-[1440px] mx-auto"
>
      <h1 className="font-display font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-(--color-text-primary) max-w-[1100px]">
        {t.rich("tagline", {
          accent: (chunks) => (
            <span className="text-(--color-accent)">{chunks}</span>
          ),
        })}
      </h1>
    </section>
  )
}
"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { IconArrowRight } from "@tabler/icons-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons"

const socialLinks = [
  { id: "linkedin", href: "https://www.linkedin.com/in/rhenanbruzzo/" },
  { id: "github", href: "https://github.com/rhenanbruzzo" },
  { id: "dribbble", href: "https://dribbble.com/rhenanbruzzo91" },
] as const

export default function Contact() {
  const t = useTranslations("contact")
  const [copied, setCopied] = useState(false)
  const email = t("email")

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Erro ao copiar:", err)
    }
  }

  return (
    <section
      id="contact"
      className="px-6 md:px-24 pt-10 md:pt-16 pb-0 max-w-[1440px] mx-auto"
    >
      <div className="flex items-end justify-between border-b border-(--color-border) pb-4 mb-8">
        <h2 className="font-mono text-sm uppercase tracking-wider text-(--color-text-secondary)">
          {t("heading")}
        </h2>
      </div>

      <div className="py-8 md:py-0">
        <h3 className="font-display font-medium text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-(--color-text-primary)">
          {t("title")}
          <br />
          {t("subtitle")}
        </h3>

        <div className="mt-12 md:mt-16">
          <button
            onClick={handleCopy}
            className="group inline-flex items-center gap-3 font-display text-2xl md:text-3xl text-(--color-text-primary) hover:text-(--color-accent) transition-colors duration-200 cursor-pointer"
          >
            {email}
            <span className="inline-flex items-center gap-2">
              <IconArrowRight size={16} stroke={1.5} className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
              {copied && (
                <span className="font-body text-sm text-(--color-text-secondary) animate-fade-in">
                  {t("copied")}
                </span>
              )}
            </span>
          </button>
        </div>

        {/* Redes sociais */}
<ul className="flex items-center gap-6 flex-wrap mt-10 md:mt-12 pb-10 md:pb-16">
  {socialLinks.map(({ id, href }) => (
    <li key={id}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 font-body text-base text-(--color-text-secondary) transition-colors duration-200"
      >
        {id === "linkedin" && <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
        {id === "github" && <FontAwesomeIcon icon={faGithub} className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
        {id === "dribbble" && <FontAwesomeIcon icon={faDribbble} className="w-5 h-5 flex-shrink-0" aria-hidden="true" />}
        <span className="group-hover:underline underline-offset-4">
          {t(`social.${id}`)}
        </span>
      </a>
    </li>
  ))}
</ul>
      </div>
    </section>
  )
}
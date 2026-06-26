import { useTranslations } from "next-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons"

const socialLinks = [
  { id: "linkedin", href: "https://www.linkedin.com/in/rhenanbruzzo/", icon: faLinkedin },
  { id: "github", href: "https://github.com/rhenanbruzzo", icon: faGithub },
  { id: "dribbble", href: "https://dribbble.com/rhenanbruzzo91", icon: faDribbble },
] as const

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-(--color-border) mt-10 md:mt-16">
      <div className="px-6 md:px-24 py-8 md:py-10 max-w-[1440px] mx-auto">
        <ul className="flex items-center gap-1 md:gap-2 flex-wrap">
          {socialLinks.map(({ id, href, icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-base px-3 py-2 rounded text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface-raised) transition-all duration-200"
              >
                <FontAwesomeIcon icon={icon} className="w-6 h-6" aria-hidden="true" />
                {t(`social.${id}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
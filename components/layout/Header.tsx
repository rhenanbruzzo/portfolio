"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { IconSun, IconMoon, IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react"
import { useActiveSection } from "@/hooks/useActiveSection"

export default function Header() {
  const t = useTranslations("nav")
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const activeSection = useActiveSection()
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle("dark", saved === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    localStorage.setItem("theme", next)
    document.documentElement.classList.toggle("dark", next === "dark")
  }

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
  
    const isEn = pathname.startsWith("/en")
    const homeUrl = isEn ? "/en" : "/"
  
    if (href === "/curriculo") {
      router.push(isEn ? "/en/curriculo" : "/curriculo")
      return
    }
  
    if (href === "#top") {
      const isHome = pathname === "/" || pathname === "/en"
      if (!isHome) {
        router.push(homeUrl)
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300)
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" })
        window.history.replaceState(null, "", window.location.pathname)
      }
      return
    }
  
    const anchor = href.replace("#", "")
    const isHome = pathname === "/" || pathname === "/en"
  
    if (!isHome) {
      router.push(`${homeUrl}#${anchor}`)
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }, 300)
    } else {
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLinks = [
    { label: t("home"), href: "#top" },
    { label: t("work"), href: "#work" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
    { label: t("resume"), href: "/curriculo" },
  ]

  const isActive = (href: string) => {
    if (href === "/curriculo") return pathname.includes("/curriculo")
    if (href === "#top") return activeSection === "top" && !pathname.includes("/curriculo")
    return href === `#${activeSection}` && !pathname.includes("/curriculo")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-(--color-surface) border-b border-(--color-border)">
      <div className="max-w-[1440px] mx-auto px-6 md:px-24 h-16 md:h-20 flex items-center justify-between">
        <Link
          href="/"
          onClick={(e) => handleLinkClick(e, "#top")}
          className="font-display font-medium text-base md:text-lg text-(--color-text-primary) hover:text-(--color-accent) transition-colors duration-200"
        >
          Rhenan Bruzzo
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium px-3 py-2 rounded transition-all duration-200 ${
                isActive(link.href)
                  ? "text-(--color-accent) bg-(--color-surface-raised)"
                  : "text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface-raised)"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-2 ml-3 pl-3 border-l border-(--color-border)">
            <LangToggle />
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 flex items-center justify-center rounded-full text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface-raised) transition-all duration-200"
            >
              {theme === "light" ? <IconSun size={18} stroke={1.5} /> : <IconMoon size={18} stroke={1.5} />}
            </button>
          </div>
        </nav>

        <div className="flex md:hidden items-center gap-3">
          <LangToggle />
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center text-(--color-text-secondary)"
          >
            {theme === "light" ? <IconSun size={18} stroke={1.5} /> : <IconMoon size={18} stroke={1.5} />}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-9 h-9 flex items-center justify-center text-(--color-text-primary)"
          >
            <IconMenu2 size={22} stroke={1.5} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-(--color-surface) flex flex-col">
          <div className="px-6 h-16 flex items-center justify-between border-b border-(--color-border)">
            <Link
              href="/"
              className="font-display font-medium text-base text-(--color-text-primary)"
              onClick={(e) => handleLinkClick(e, "#top")}
            >
              Rhenan Bruzzo
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="w-9 h-9 flex items-center justify-center text-(--color-text-primary)"
            >
              <IconX size={22} stroke={1.5} />
            </button>
          </div>

          <nav className="flex flex-col px-6 pt-8 gap-0">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between py-5 border-b border-(--color-border) text-2xl font-display font-medium text-(--color-text-primary) hover:text-(--color-accent) transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

function LangToggle() {
  const pathname = usePathname()

  const getLocalePath = (locale: string) => {
    // Remove o prefixo de locale atual do pathname
    const withoutLocale = pathname.replace(/^\/(en)/, "") || "/"
    if (locale === "en") return `/en${withoutLocale === "/" ? "" : withoutLocale}`
    return withoutLocale || "/"
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      <a
        href={getLocalePath("pt")}
        className="px-2 py-1 rounded text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors duration-200"
      >
        PT
      </a>
      <span className="text-(--color-border-strong)">/</span>
      <a
        href={getLocalePath("en")}
        className="px-2 py-1 rounded text-(--color-text-secondary) hover:text-(--color-text-primary) transition-colors duration-200"
      >
        EN
      </a>
    </div>
  )
}
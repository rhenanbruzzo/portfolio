"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [active, setActive] = useState("top")

  useEffect(() => {
    const sections = ["top", "work", "about", "contact"]

    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Se chegou no final da página, ativa contato
      if (scrollY + windowHeight >= docHeight - 10) {
        setActive("contact")
        return
      }

      // Verifica qual section está visível
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - 120
        if (scrollY >= top) {
          setActive(id)
          return
        }
      }

      setActive("top")
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return active
}
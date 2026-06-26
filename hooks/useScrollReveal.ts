"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Checa se já está visível na carga inicial
    const checkVisibility = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("revealed")
        return true
      }
      return false
    }

    // Se já está visível, revela imediatamente
    if (checkVisibility()) return

    // Senão, observa o scroll
    const onScroll = () => {
      if (checkVisibility()) {
        window.removeEventListener("scroll", onScroll)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return ref
}
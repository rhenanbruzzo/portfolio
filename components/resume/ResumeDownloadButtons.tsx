"use client"

import { useTranslations } from "next-intl"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileWord, faFilePdf } from "@fortawesome/free-solid-svg-icons"

export default function ResumeDownloadButtons() {
  const t = useTranslations("resume")

  return (
    <div className="flex items-center gap-3">
      <a
        href="/rhenan-bruzzo-curriculo.docx"
        download
        className="inline-flex items-center gap-2 font-body text-sm px-4 py-2 rounded border border-(--color-border-strong) text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-surface-raised) transition-all duration-200"
      >
        <FontAwesomeIcon icon={faFileWord} className="w-4 h-4 text-blue-600" />
        {t("downloadWord")}
      </a>
      <a
        href="/rhenan-bruzzo-curriculo.pdf"
        download
        className="inline-flex items-center gap-2 font-body text-sm px-4 py-2 rounded bg-(--color-accent) text-white hover:opacity-90 transition-opacity duration-200"
      >
        <FontAwesomeIcon icon={faFilePdf} className="w-4 h-4" />
        {t("downloadPdf")}
      </a>
    </div>
  )
}
"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

  return (
    <footer className="bg-[#FF7748] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FORM-2025</h3>
            <div className="space-y-2">
              <p className="text-white font-bold text-lg leading-tight">{t.ministry}</p>
              <p className="text-white text-sm">{t.university}</p>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-8">
            <Link href="#" className="hover:text-white/80 transition-colors">
              {t.home}
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              {t.about}
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              {t.schedule}
            </Link>
            <Link href="#" className="hover:text-white/80 transition-colors">
              {t.contact}
            </Link>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}


"use client"

import { useState } from "react"
import { useLanguage } from "../context/language-context"
import SubmitModal from "./submit-modal"
import { translations } from "@/translation"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <>
      <section
        className="relative pt-16"
        style={{
          backgroundImage: `url('https://taqu.uz/front/assets/img/taqu1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="container mx-auto px-4 py-32 text-center">
            <p className="text-white mb-4 text-lg md:text-xl">{t.conferenceDate}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{t.days}</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">{t.title}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.format}</h2>
            <p className="text-2xl md:text-3xl text-white mb-8">{t.venue}</p>
            <p className="text-2xl md:text-3xl text-white mb-12">(FORM-2025)</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FF7748] text-white hover:bg-[#FF7748]/90 px-8 py-4 text-xl rounded-md transition duration-300 transform hover:scale-105"
            >
              {t.submitPaper}
            </button>
          </div>
        </div>
      </section>

      <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}


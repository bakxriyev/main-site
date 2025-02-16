"use client"

import { Mic, FileText, Video } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Publication() {
  const { language } = useLanguage()
  const t = translations[language].publication

  const publications = [
    {
      icon: <FileText className="w-8 h-8 text-[#FF7748]" />,
      title: t.plenaryLectures,
    },
    {
      icon: <Mic className="w-8 h-8 text-[#FF7748]" />,
      title: t.posterSession,
    },
    {
      icon: <Video className="w-8 h-8 text-[#FF7748]" />,
      title: t.onlineParticipation,
    },
  ]

  return (
    <section id="publication" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {publications.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex flex-col items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold text-center text-gray-800">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


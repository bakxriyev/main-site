"use client"

import { Clock } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Schedule() {
  const { language } = useLanguage()
  const t = translations[language].schedule

  const scheduleData = t.scheduleData

  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>
        <div className="space-y-6 max-w-3xl mx-auto">
          {scheduleData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <Clock className="w-6 h-6 text-[#FF7748]" />
                  <h3 className="text-lg font-semibold text-gray-800">{item.time}</h3>
                </div>
                <span className="text-gray-600">{item.day}</span>
              </div>
              <p className="text-gray-600">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


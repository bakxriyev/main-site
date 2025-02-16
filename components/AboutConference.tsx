"use client"

import { CheckCircle, Zap } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function AboutConference() {
  const { language } = useLanguage()
  console.log(language)
  const t = translations[language].aboutConference

  const objectives = t.objectives
  const topics = t.topics

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in">{t.title}</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-[#FF7748] mb-4">{t.objectivesTitle}</h3>
            <p className="text-gray-600 mb-6">{t.objectivesDescription1}</p>
            <p className="text-gray-600">{t.objectivesDescription2}</p>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-semibold text-[#FF7748] mb-4">{t.focusTitle}</h3>
            <p className="text-gray-600 mb-6">{t.focusDescription}</p>
            <h4 className="text-xl font-semibold text-gray-800 mb-4">{t.keyObjectives}</h4>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start animate-fade-in-up">
                  <CheckCircle className="w-6 h-6 text-[#FF7748] mr-2 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-2xl font-semibold text-[#FF7748] mb-6 text-center">{t.topicsTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <Zap className="w-8 h-8 text-[#FF7748] mb-4" />
                <p className="text-gray-800 font-medium">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


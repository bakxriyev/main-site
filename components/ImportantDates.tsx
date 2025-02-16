"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function ImportantDates() {
  const { language } = useLanguage()
  const t = translations[language].importantDates

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const deadline = new Date("April 25, 2025 23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = deadline - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const dates = t.dates

  return (
    <section id="dates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">{t.countdownTitle}</h3>
          <div className="flex justify-center space-x-4 md:space-x-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#FF7748]">{value}</div>
                <div className="text-sm md:text-base text-gray-600 capitalize">{t[unit]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {dates.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-[#FF7748]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">{item.date}</h3>
              </div>
              <p className="text-gray-600">{item.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


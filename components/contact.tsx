"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Contact() {
  const { language } = useLanguage()
  const t = translations[language].contact

  return (
    <section id="contacts" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">{t.contactInfo}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FF7748] flex-shrink-0 mt-1" />
                <p className="text-gray-600">{t.address}</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-[#FF7748] flex-shrink-0" />
                <div>
                  <p className="text-gray-600">{t.email1}</p>
                  <p className="text-gray-600">{t.email2}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#FF7748] flex-shrink-0" />
                <div>
                  <p className="text-gray-600">{t.phone1}</p>
                  <p className="text-gray-600">{t.phone2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


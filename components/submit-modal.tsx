"use client"

import type React from "react"
import { API } from "@/hook/getENV"
import { useState, useRef, useEffect } from "react"
import { X, Download } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

interface SubmitModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SubmitModal({ isOpen, onClose }: SubmitModalProps) {
  const { language } = useLanguage()
  const t = translations[language].submitModal

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle modal scroll positioning
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      // Reset scroll position when modal opens
      if (modalRef.current) {
        modalRef.current.scrollTop = 0
      }
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) return null

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!formRef.current || !selectedFile || !agreeToTerms) return

    const formData = new FormData(formRef.current)

    try {
      setIsLoading(true)
      setError("")

      const response = await fetch(`${API}/auth/register`, {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setSuccess(true)
        formRef.current?.reset()
        setSelectedFile(null)
        setAgreeToTerms(false)
        setTimeout(() => {
          onClose()
          setSuccess(false)
        }, 2000)
      } else {
        setError(result.error || t.genericError)
      }
    } catch (err) {
      setError(t.submitError)
    } finally {
      setIsLoading(false)
    }
  }

  const conditions = t.conditions

  const sampleFiles = [
    { name: "uzb.doc", language: "O'zbek tili" },
    { name: "rus.doc", language: "Русский язык" },
    { name: "eng.doc", language: "English" },
  ]

  return (
    <div 
      className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      ref={modalRef}
    >
      <div className="bg-white rounded-lg max-w-xl w-full p-6 sm:p-8 relative my-8 max-h-[90vh] overflow-y-auto">
        {/* Close button - visible at all screen sizes, positioned absolutely */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Mobile close button - fixed at bottom of screen on small devices */}
        <button
          onClick={onClose}
          className="sm:hidden fixed bottom-4 right-4 bg-white rounded-full p-2 shadow-lg border border-gray-200 z-20"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#FF7748] pr-8">{t.title}</h2>

        <div className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2 text-gray-700">{t.conditionsTitle}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {conditions.map((condition, index) => (
              <li key={index} className="text-sm text-gray-600">
                {condition}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-700">{t.yoriqnoma}</h3>
          <div className="space-y-2">
            {sampleFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                <span className="text-sm text-gray-600">{file.language}</span>
                <a
                  href={`/${file.name}`}
                  download
                  className="flex items-center text-[#FF7748] hover:text-[#FF7748]/80 transition-colors"
                >
                  <Download className="h-4 w-4 mr-1" />
                  <span className="text-sm">Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {success ? (
          <div className="text-green-600 text-center py-8 text-xl">{t.successMessage}</div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.firstName}</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{t.lastName}</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.phoneNumber}</label>
              <input
                type="tel"
                name="phone_number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.passwordKey}</label>
              <input
                type="password"
                name="password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">{t.uploadPaper}</label>
              <input
                type="file"
                name="maqola"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.txt"
                required
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF7748] focus:border-transparent transition"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
                className="h-4 w-4 text-[#FF7748] focus:ring-[#FF7748] border-gray-300 rounded"
              />
              <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
                {t.agreeTerms}
              </label>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={isLoading || !agreeToTerms}
              className="w-full bg-[#FF7748] text-white py-3 px-4 rounded-md hover:bg-[#FF7748]/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-semibold"
            >
              {isLoading ? t.submitting : t.submit}
            </button>
          </form>
        )}
        
        {/* Add extra padding at bottom for mobile to ensure visibility with fixed close button */}
        <div className="h-12 sm:h-0"></div>
      </div>
    </div>
  )
}
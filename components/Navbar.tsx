"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const menuItems = [
    { href: "#dates", label: translations[language].navItems.dates },
    { href: "#schedule", label: translations[language].navItems.schedule },
    { href: "#publication", label: translations[language].navItems.publication },
    { href: "#committee", label: translations[language].navItems.committee },
    { href: "#contacts", label: translations[language].navItems.contacts },
    { href: "#seminar", label: translations[language].navItems.seminar },
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "uz", name: "O'zbek" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FF7748]">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-auto py-4">
          <div className="flex items-center max-w-3xl">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Conference Logo" width={200} height={200} className="mr-3" />
              <div className="flex flex-col ml-4">
                <span className="text-white text-sm mt-1">
                  TASHKENT UNIVERSITY OF ARCHITECTURE AND CIVIL ENGINEERING
                </span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-white hover:text-white/80">
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <button className="text-white hover:text-white/80 flex items-center" onClick={() => setIsOpen(!isOpen)}>
                {language.toUpperCase()}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      onClick={() => {
                        setLanguage(lang.code as "en" | "ru" | "uz")
                        setIsOpen(false)
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-white hover:text-white/80"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <p className="text-white font-semibold mb-2">Select Language:</p>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="block w-full text-left py-2 text-white hover:text-white/80"
                  onClick={() => {
                    setLanguage(lang.code as "en" | "ru" | "uz")
                    setIsOpen(false)
                  }}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}


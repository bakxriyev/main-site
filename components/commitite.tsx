"use client"

import Image from "next/image"
import { useLanguage } from "@/context/language-context"
import { translations } from "@/translation"

export default function Committee() {
  const { language } = useLanguage()
  const t = translations[language].committee

  const committeeMembers = t.members

  return (
    <section id="committee" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FF7748] mb-8">{t.title}</h2>

        <div className="flex flex-col items-center">
          {/* First teacher */}
          <div className="mb-8 w-full max-w-sm">
            <MemberCard member={committeeMembers[0]} />
          </div>

          <hr className="w-full border-t border-gray-300 mb-8" />

          {/* Second and third teachers */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-8">
            <MemberCard member={committeeMembers[1]} />
            <MemberCard member={committeeMembers[2]} />
          </div>

          <hr className="w-full border-t border-gray-300 mb-8" />

          <h2 className="text-4xl font-bold text-center text-[#FF7748] mb-8">{t.kordinator}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <MemberCard member={committeeMembers[3]} />
            <MemberCard member={committeeMembers[4]} />
            <MemberCard member={committeeMembers[5]} />
          </div>
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 relative">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{member.name}</h3>
      <p className="text-gray-600 text-sm mb-3 flex-grow">{member.title}</p>
      <a
        href={`mailto:${member.email}`}
        className="text-[#FF7748] hover:text-[#FF7748]/80 transition-colors font-medium"
      >
        {member.email}
      </a>
    </div>
  )
}


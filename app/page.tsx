
import AboutConference from "@/components/AboutConference"
import Committee from "@/components/commitite"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import ImportantDates from "@/components/ImportantDates"
import Navbar from "@/components/Navbar"
import Publication from "@/components/Publications"
import Schedule from "@/components/Schedule"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ImportantDates />
      <AboutConference/>
      <Schedule />
      <Publication />
      <Committee />
      <Contact />
      <Footer />
    </div>
  )
}


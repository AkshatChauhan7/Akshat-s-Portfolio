import { Navigation } from '@/components/navigation/Navigation'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { ParticleBackground } from '@/components/ui/ParticleBackground'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { LeetCode } from '@/components/sections/LeetCode'
import { Automation } from '@/components/sections/Automation'
import { CertificatesSection } from '@/components/sections/CertificatesSection'
import { BeyondCode } from '@/components/sections/BeyondCode'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <ScrollProgress />
      <main className="relative">
        <Hero />
        <div className="section-divider max-w-4xl mx-auto" />
        <About />
        <div className="section-divider max-w-4xl mx-auto" />
        <Skills />
        <div className="section-divider max-w-4xl mx-auto" />
        <Projects />
        <div className="section-divider max-w-4xl mx-auto" />
        <LeetCode />
        <div className="section-divider max-w-4xl mx-auto" />
        <Automation />
        <div className="section-divider max-w-4xl mx-auto" />
        <CertificatesSection />
        <div className="section-divider max-w-4xl mx-auto" />
        <BeyondCode />
        <div className="section-divider max-w-4xl mx-auto" />
        <Experience />
        <div className="section-divider max-w-4xl mx-auto" />
        <Contact />
      </main>
    </div>
  )
}
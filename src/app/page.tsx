import { Navigation } from '@/components/navigation/Navigation'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { LeetCode } from '@/components/sections/LeetCode'
import { Automation } from '@/components/sections/Automation'
import { BeyondCode } from '@/components/sections/BeyondCode'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LeetCode />
        <Automation />
        <BeyondCode />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
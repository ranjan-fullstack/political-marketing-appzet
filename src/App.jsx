import { useCallback, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MenuPanel from './components/MenuPanel'
import QuickNav from './components/QuickNav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { navLinks } from './data/content'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const navigateTo = useCallback((href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <>
      <Navbar onOpenMenu={() => setMenuOpen(true)} activeSection={activeSection} />
      <QuickNav activeSection={activeSection} onNavigate={navigateTo} />
      <MenuPanel
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={navigateTo}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <OurWork />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

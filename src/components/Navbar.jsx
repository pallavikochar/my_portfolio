import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.slice(1)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-charcoal/90 backdrop-blur-md border-rule-dark'
            : 'bg-paper/90 backdrop-blur-md border-rule'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={e => { e.preventDefault(); handleNavClick('#hero') }}
          className={`flex items-center justify-center w-9 h-9 ${darkMode ? 'bg-accent-light' : 'bg-accent'}`}
        >
          <span className={`font-serif text-sm font-bold leading-none ${darkMode ? 'text-charcoal' : 'text-paper'}`}>PK</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.slice(1)
            const active = activeSection === id
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? darkMode ? 'text-accent-light' : 'text-accent'
                      : darkMode ? 'text-bone-soft hover:text-bone' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 ${darkMode ? 'bg-accent-light' : 'bg-accent'}`}
                    />
                  )}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={`p-2 transition-colors ${
              darkMode ? 'text-bone-soft hover:text-bone' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
            className={`hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold border transition-colors ${
              darkMode
                ? 'bg-accent-light text-charcoal border-accent-light hover:bg-bone'
                : 'bg-accent text-paper border-accent hover:bg-ink'
            }`}
          >
            Get in touch
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${
              darkMode ? 'bg-charcoal border-rule-dark' : 'bg-paper border-rule'
            }`}
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNavClick(href)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                      darkMode ? 'text-bone-soft hover:text-bone' : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className={`w-full mt-2 px-4 py-3 text-sm font-semibold text-center ${
                    darkMode ? 'bg-accent-light text-charcoal' : 'bg-accent text-paper'
                  }`}
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

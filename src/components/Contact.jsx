import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { Mail, ArrowRight, Copy, Check } from 'lucide-react'

function IconGithub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'pallavikochar8@gmail.com',
    href: 'mailto:pallavikochar8@gmail.com',
    copyable: true,
  },

  {
    icon: IconLinkedin,
    label: 'LinkedIn',
    value: 'pallavikochar7',
    href: 'https://linkedin.com/in/pallavikochar7',
    copyable: false,
  },
  {
    icon: IconGithub,
    label: 'GitHub',
    value: 'pallavikochar',
    href: 'https://github.com/pallavikochar',
    copyable: false,
  },
]

function ContactItem({ item, darkMode }) {
  const [copied, setCopied] = useState(false)
  const Icon = item.icon

  const handleCopy = async () => {
    if (!item.copyable) return
    await navigator.clipboard.writeText(item.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl border transition-colors group ${
        darkMode
          ? 'border-blue-500/10 bg-navy-900 hover:border-blue-500/25'
          : 'border-slate-200 bg-white hover:border-blue-300 shadow-sm'
      } ${item.placeholder ? 'opacity-60' : ''}`}
    >
      <div className={`p-2.5 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600`}>
        <Icon size={16} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          {item.label}
        </div>
        <a
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`text-sm font-medium truncate transition-colors ${
            darkMode ? 'text-slate-200 hover:text-accent' : 'text-slate-700 hover:text-accent'
          } ${item.placeholder ? 'italic' : ''}`}
        >
          {item.value}
        </a>
      </div>
      {item.copyable && (
        <button
          onClick={handleCopy}
          aria-label={`Copy ${item.label}`}
          className={`p-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100 ${
            darkMode ? 'hover:bg-navy-800 text-slate-400' : 'hover:bg-slate-100 text-slate-400'
          }`}
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      )}
    </div>
  )
}

export default function Contact({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <SectionWrapper id="contact" className={darkMode ? 'bg-[#080e20]' : 'bg-slate-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect"
          darkMode={darkMode}
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: CTA copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className={`text-base leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I graduated in May 2026 and am actively exploring roles in{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                quantitative research
              </span>,{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                data engineering
              </span>, and{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                AI-driven fintech
              </span>.
              If you're working on interesting problems at the intersection of markets and technology,
              I'd love to talk.
            </p>

            <div className="space-y-3 mb-10">
              {['Open to full-time roles', 'US work authorized (OPT eligible)', 'Open to NYC, Chicago, or remote'].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:pallavikochar8@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
            >
              Send me an email
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Right: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            {CONTACT_ITEMS.map(item => (
              <ContactItem key={item.label} item={item} darkMode={darkMode} />
            ))}

            {/* Availability badge */}
            <div className={`mt-6 flex items-center gap-3 p-4 rounded-xl border ${
              darkMode ? 'border-emerald-500/20 bg-emerald-500/5' : 'border-emerald-300 bg-emerald-50'
            }`}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className={`text-sm ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Available for full-time opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

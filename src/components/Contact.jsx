import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { Mail, Copy, Check } from 'lucide-react'

function IconLinkedin({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function IconGithub({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const QUICK_LINKS = [
  { icon: Mail, label: 'Email', value: 'pallavikochar8@gmail.com', href: 'mailto:pallavikochar8@gmail.com', copyable: true },
  { icon: IconLinkedin, label: 'LinkedIn', value: 'pallavikochar7', href: 'https://linkedin.com/in/pallavikochar7', copyable: false },
  { icon: IconGithub, label: 'GitHub', value: 'pallavikochar', href: 'https://github.com/pallavikochar', copyable: false },
]

function QuickLink({ item, darkMode }) {
  const [copied, setCopied] = useState(false)
  const Icon = item.icon

  const handleCopy = async () => {
    if (!item.copyable) return
    await navigator.clipboard.writeText(item.value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`flex items-center gap-3 py-3.5 border-b group ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
      <Icon size={17} className={darkMode ? 'text-bone-soft' : 'text-ink-soft'} />
      <div className="flex-1 min-w-0">
        <div className={`text-xs font-mono mb-0.5 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>{item.label}</div>
        <a
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`text-sm font-medium truncate block transition-colors ${
            darkMode ? 'text-bone hover:text-accent-light' : 'text-ink hover:text-accent'
          }`}
        >
          {item.value}
        </a>
      </div>
      {item.copyable && (
        <button
          onClick={handleCopy}
          aria-label="Copy email"
          className={`p-1.5 transition-colors ${darkMode ? 'text-bone-soft hover:text-bone' : 'text-ink-soft hover:text-ink'}`}
        >
          {copied ? <Check size={14} className={darkMode ? 'text-pos-light' : 'text-pos'} /> : <Copy size={14} />}
        </button>
      )}
    </div>
  )
}

function InputField({ label, error, darkMode, ...props }) {
  return (
    <div>
      <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
        {label} {props.required && '(required)'}
      </label>
      <input
        {...props}
        className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-colors ${
          darkMode
            ? 'border-rule-dark text-bone placeholder-bone-soft/60 focus:border-accent-light'
            : 'border-rule text-ink placeholder-ink-soft/60 focus:border-accent'
        } ${error ? (darkMode ? 'border-neg-light' : 'border-neg') : ''}`}
      />
      {error && <p className={`mt-1 text-xs ${darkMode ? 'text-neg-light' : 'text-neg'}`}>{error}</p>}
    </div>
  )
}

export default function Contact({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScBMF-1qGJge0JKK8WUCpER2VS6gJIm8jDz0tFbD4SWLk0cDw/formResponse'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('loading')

    const params = new URLSearchParams()
    params.append('entry.2005620554', form.name)
    params.append('entry.1045781291', form.email)
    params.append('entry.839337160', form.company)
    params.append('entry.53023953', form.message)

    try {
      await fetch(FORM_URL, { method: 'POST', mode: 'no-cors', body: params })
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Contact" title="Let's connect" darkMode={darkMode} />

        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${darkMode ? 'bg-pos-light' : 'bg-pos'}`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${darkMode ? 'bg-pos-light' : 'bg-pos'}`} />
              </span>
              <span className={`text-sm font-mono ${darkMode ? 'text-pos-light' : 'text-pos'}`}>
                Actively looking for opportunities
              </span>
            </div>

            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
              I'm looking for roles in{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>quantitative research</span>,{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>data engineering</span>, and{' '}
              <span className={`font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>AI-driven fintech</span>.
              If you're working on something interesting, I'd love to talk.
            </p>

            <div className={`border-t ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
              {QUICK_LINKS.map(item => (
                <QuickLink key={item.label} item={item} darkMode={darkMode} />
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className={`border p-7 ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
              <h3 className={`font-serif text-lg font-semibold mb-5 ${darkMode ? 'text-bone' : 'text-ink'}`}>
                Send a message
              </h3>

              {status === 'success' ? (
                <div className={`flex flex-col items-center justify-center py-12 text-center ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
                  <Check size={28} className={`mb-4 ${darkMode ? 'text-pos-light' : 'text-pos'}`} />
                  <p className={`text-base font-semibold mb-1 ${darkMode ? 'text-bone' : 'text-ink'}`}>Message received</p>
                  <p className="text-sm">I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className={`mt-6 text-sm border-b ${darkMode ? 'text-accent-light border-accent-light' : 'text-accent border-accent'}`}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Name" type="text" placeholder="Jane Smith" required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      error={errors.name} darkMode={darkMode}
                    />
                    <InputField
                      label="Email" type="email" placeholder="jane@firm.com" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      error={errors.email} darkMode={darkMode}
                    />
                  </div>

                  <InputField
                    label="Company / Organization" type="text" placeholder="Optional"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    darkMode={darkMode}
                  />

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
                      Message (required)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Feel free to say hi, share an idea, or explore something together."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className={`w-full py-2 text-sm bg-transparent border-b outline-none transition-colors resize-none ${
                        darkMode
                          ? 'border-rule-dark text-bone placeholder-bone-soft/60 focus:border-accent-light'
                          : 'border-rule text-ink placeholder-ink-soft/60 focus:border-accent'
                      } ${errors.message ? (darkMode ? 'border-neg-light' : 'border-neg') : ''}`}
                    />
                    {errors.message && <p className={`mt-1 text-xs ${darkMode ? 'text-neg-light' : 'text-neg'}`}>{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className={`text-xs ${darkMode ? 'text-neg-light' : 'text-neg'}`}>Something went wrong. Please email me directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full py-3 px-6 text-sm font-semibold border transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                      darkMode
                        ? 'bg-accent-light text-charcoal border-accent-light hover:bg-bone'
                        : 'bg-accent text-paper border-accent hover:bg-ink'
                    }`}
                  >
                    {status === 'loading' ? 'Sending' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

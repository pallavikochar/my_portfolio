import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { Mail, ArrowRight, Copy, Check, Send, User, Building2, MessageSquare } from 'lucide-react'

function IconLinkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function IconGithub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const QUICK_LINKS = [
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
    <div className={`flex items-center gap-3 p-3.5 rounded-xl border group transition-colors ${
      darkMode
        ? 'border-blue-500/10 bg-navy-900 hover:border-blue-500/20'
        : 'border-slate-200 bg-white hover:border-blue-300 shadow-sm'
    }`}>
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex-shrink-0">
        <Icon size={14} className="text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className={`text-xs font-medium uppercase tracking-wide mb-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          {item.label}
        </div>
        <a
          href={item.href}
          target={item.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className={`text-sm font-medium truncate block transition-colors ${
            darkMode ? 'text-slate-200 hover:text-accent' : 'text-slate-700 hover:text-accent'
          }`}
        >
          {item.value}
        </a>
      </div>
      {item.copyable && (
        <button
          onClick={handleCopy}
          className={`p-1.5 rounded-lg transition-colors opacity-0 group-hover:opacity-100 ${
            darkMode ? 'hover:bg-navy-800 text-slate-400' : 'hover:bg-slate-100 text-slate-400'
          }`}
        >
          {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
        </button>
      )}
    </div>
  )
}

function InputField({ label, icon: Icon, error, darkMode, ...props }) {
  return (
    <div>
      <label className={`block text-xs font-medium uppercase tracking-wide mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
        {label} {props.required && <span className="text-accent">*</span>}
      </label>
      <div className="relative">
        <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <Icon size={15} />
        </div>
        <input
          {...props}
          className={`w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors ${
            darkMode
              ? 'bg-navy-800 border-blue-500/15 text-slate-200 placeholder-slate-600 focus:border-accent focus:bg-navy-800'
              : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-accent'
          } ${error ? 'border-red-500/60' : ''}`}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setStatus('loading')
    const body = new FormData()
    body.append('entry.2005620554', form.name)
    body.append('entry.1045781291', form.email)
    body.append('entry.839337160', form.company)
    body.append('entry.53023953', form.message)
    try {
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLScBMF-1qGJge0JKK8WUCpER2VS6gJIm8jDz0tFbD4SWLk0cDw/formResponse',
        { method: 'POST', mode: 'no-cors', body }
      )
      setStatus('success')
      setForm({ name: '', email: '', company: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact" className={darkMode ? 'bg-[#080e20]' : 'bg-slate-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect"
          darkMode={darkMode}
        />

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {/* Availability badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8 ${
              darkMode ? 'border-emerald-500/25 bg-emerald-500/5' : 'border-emerald-300 bg-emerald-50'
            }`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className={`text-xs font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                Actively looking for opportunities
              </span>
            </div>

            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              I'm looking for roles in{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>quantitative research</span>,{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>data engineering</span>, and{' '}
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>AI-driven fintech</span>.
              If you're working on something interesting, I'd love to talk.
            </p>

            <div className="space-y-2.5">
              {QUICK_LINKS.map(item => (
                <QuickLink key={item.label} item={item} darkMode={darkMode} />
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className={`rounded-2xl border p-7 ${
              darkMode ? 'border-blue-500/10 bg-navy-900' : 'border-slate-200 bg-white shadow-sm'
            }`}>
              <h3 className={`text-base font-semibold mb-5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Send a message
              </h3>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex flex-col items-center justify-center py-12 text-center ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center mb-4">
                    <Check size={24} className="text-emerald-400" />
                  </div>
                  <p className={`text-base font-semibold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Message received!
                  </p>
                  <p className="text-sm">I'll get back to you soon.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-xs text-accent hover:underline"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Name"
                      icon={User}
                      type="text"
                      placeholder="Jane Smith"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      error={errors.name}
                      darkMode={darkMode}
                    />
                    <InputField
                      label="Email"
                      icon={Mail}
                      type="email"
                      placeholder="jane@firm.com"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      error={errors.email}
                      darkMode={darkMode}
                    />
                  </div>

                  <InputField
                    label="Company / Organization"
                    icon={Building2}
                    type="text"
                    placeholder="Optional"
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    darkMode={darkMode}
                  />

                  <div>
                    <label className={`block text-xs font-medium uppercase tracking-wide mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      Message <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <div className={`absolute left-3 top-3 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        <MessageSquare size={15} />
                      </div>
                      <textarea
                        rows={4}
                        placeholder="Feel free to say hi, share an idea, or explore something together..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        className={`w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors resize-none ${
                          darkMode
                            ? 'bg-navy-800 border-blue-500/15 text-slate-200 placeholder-slate-600 focus:border-accent'
                            : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-accent'
                        } ${errors.message ? 'border-red-500/60' : ''}`}
                      />
                    </div>
                    {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">Something went wrong. Please email me directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
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

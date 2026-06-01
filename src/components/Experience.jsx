import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { MapPin, Calendar, ChevronDown } from 'lucide-react'

const EXPERIENCES = [
  {
    company: 'FAlpha.ai',
    role: 'Data Product Engineer Intern',
    period: 'Apr 2026 – May 2026',
    location: 'New York, NY',
    type: 'Internship',
    color: 'from-blue-500 to-indigo-600',
    bullet_color: 'bg-blue-400',
    bullets: [
      'Built an explainable AI layer over prediction models, enabling transparent, auditable investment signals for portfolio managers.',
      'Benchmarked SHAP vs. Integrated Gradients for production deployment, evaluating fidelity, computational cost, and interpretability trade-offs.',
      'Designed evaluation framework to validate explainability outputs against ground-truth model behavior at scale.',
    ],
    tags: ['Python', 'SHAP', 'Explainable AI', 'ML'],
  },
  {
    company: 'Kotak Securities',
    role: 'Backend Engineer',
    period: 'Jun 2022 – Jul 2024',
    location: 'Mumbai, India',
    type: 'Full-time',
    color: 'from-emerald-500 to-teal-600',
    bullet_color: 'bg-emerald-400',
    bullets: [
      'Architected and delivered an automated SIP auto-debit system processing 10,000+ monthly transactions at 99.9% accuracy using C#, SSIS, and SQL Server. Eliminated manual reconciliation entirely.',
      'Built AWS data pipelines integrating Salesforce CRM data, improving data engineering efficiency by 30% and enabling real-time client analytics.',
      'Saved 200 IT hours/month by automating reporting workflows and operational processes across the trading platform.',
      'Optimized portfolio-tracker microservices for latency and throughput, saving 50+ developer-hours per week through architectural refactoring and query optimization.',
    ],
    tags: ['C#', 'SQL Server', 'SSIS', 'AWS', 'Salesforce', 'Microservices'],
  },
  {
    company: 'Metvy',
    role: 'Entrepreneurship Trainee',
    period: 'Jun 2021 – Jul 2021',
    location: 'Mumbai, India',
    type: 'Trainee',
    color: 'from-rose-500 to-pink-600',
    bullet_color: 'bg-rose-400',
    bullets: [
      'Attended 15+ expert sessions across 8 aspects of entrepreneurship to understand the venture creation process.',
      'Developed a startup concept, conducted cost analysis, devised revenue strategies, and pitched to a panel of 10+ judges.',
    ],
    tags: ['Entrepreneurship', 'Business Strategy', 'Pitching', 'Cost Analysis'],
  },
  {
    company: 'FlexiEle',
    role: 'AI / ML Intern',
    period: 'May 2021 – Jul 2021',
    location: 'Gurgaon, India',
    type: 'Internship',
    color: 'from-purple-500 to-violet-600',
    bullet_color: 'bg-purple-400',
    bullets: [
      'Designed an AI chatbot using NLP techniques to conduct initial screenings, reducing manual recruiter workload by 60%.',
      'Trained ML algorithms to assess responses, improving prediction accuracy by 25% compared to rule-based methods.',
    ],
    tags: ['Python', 'NLP', 'Chatbot', 'ML'],
  },
  {
    company: 'Reliance Jio',
    role: 'Product Management Intern',
    period: 'Nov 2020 – Jan 2021',
    location: 'Mumbai, India',
    type: 'Internship',
    color: 'from-sky-500 to-cyan-600',
    bullet_color: 'bg-sky-400',
    bullets: [
      'Customized features for the JioPhone Next in partnership with Google, targeting 300M+ users in India\'s mass market.',
      'Recommended strategic product enhancements that contributed to an estimated 15% higher adoption in Tier-2 cities.',
    ],
    tags: ['Product Management', 'Google Partnership', 'Market Research'],
  },
  {
    company: 'Microsoft',
    role: 'Engage Mentorship Program Apprentice',
    period: 'May 2020 – Jul 2020',
    location: 'Mumbai, India',
    type: 'Apprenticeship',
    color: 'from-green-500 to-emerald-600',
    bullet_color: 'bg-green-400',
    bullets: [
      'Developed a web application to visualize and analyze shortest-path algorithms, integrating A*, Dijkstra, Best-First, and Breadth-First search for efficient distance calculation.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Data Structures'],
  },
]

function ExperienceCard({ exp, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className={`absolute left-0 top-2 bottom-0 w-px ${darkMode ? 'bg-blue-500/15' : 'bg-blue-200'}`} />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent bg-gradient-to-br ${exp.color}`} />

      <div
        className={`rounded-2xl border overflow-hidden ${
          darkMode
            ? 'border-blue-500/10 bg-navy-900'
            : 'border-slate-200 bg-white shadow-sm'
        }`}
      >
        {/* Clickable Header */}
        <button
          onClick={() => setOpen(o => !o)}
          className="w-full p-6 flex flex-wrap items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {exp.role}
              </h3>
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                exp.type === 'Full-time'
                  ? darkMode ? 'bg-emerald-500/15 text-emerald-400' : 'bg-emerald-100 text-emerald-700'
                  : darkMode ? 'bg-blue-500/15 text-blue-400' : 'bg-blue-100 text-blue-700'
              }`}>
                {exp.type}
              </span>
            </div>
            <div className="text-base font-semibold text-gradient">{exp.company}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className={`flex items-center gap-1.5 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                <Calendar size={13} />
                {exp.period}
              </div>
              <div className={`flex items-center gap-1.5 text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                <MapPin size={11} />
                {exp.location}
              </div>
            </div>
            <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={16} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
            </motion.div>
          </div>
        </button>

        {/* Collapsible body */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className={`px-6 pb-6 border-t ${darkMode ? 'border-blue-500/10' : 'border-slate-100'}`}>
                {/* Bullets */}
                <ul className="space-y-2 mt-4 mb-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.bullet_color}`} />
                      <span className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map(t => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 text-xs font-mono rounded-md ${
                        darkMode
                          ? 'bg-navy-800 text-slate-400 border border-slate-700'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function Experience({ darkMode }) {
  return (
    <SectionWrapper
      id="experience"
      className={darkMode ? 'bg-[#080e20]' : 'bg-slate-50'}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've Worked"
          subtitle="Three years of production engineering, quant research internships, and AI/ML development."
          darkMode={darkMode}
        />

        <div className="max-w-3xl">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

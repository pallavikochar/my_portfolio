import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'

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
      'Benchmarked SHAP vs. LIME vs. Integrated Gradients for production deployment, evaluating fidelity, computational cost, and interpretability trade-offs.',
      'Designed evaluation framework to validate explainability outputs against ground-truth model behavior at scale.',
    ],
    tags: ['Python', 'SHAP', 'LIME', 'Explainable AI', 'ML'],
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
    company: 'FlexiEle',
    role: 'AI / ML Intern',
    period: '2021',
    location: 'Remote',
    type: 'Internship',
    color: 'from-purple-500 to-violet-600',
    bullet_color: 'bg-purple-400',
    bullets: [
      'Developed an NLP-powered screening chatbot that automated candidate pre-qualification, cutting recruiter workload by 60%.',
      'Applied text classification and intent detection to rank and shortlist applicants against job description criteria.',
    ],
    tags: ['Python', 'NLP', 'Chatbot', 'Text Classification'],
  },
]

function ExperienceCard({ exp, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

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
        className={`rounded-2xl border p-6 card-hover ${
          darkMode
            ? 'border-blue-500/10 bg-navy-900'
            : 'border-slate-200 bg-white shadow-sm'
        }`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
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
            <div className={`text-base font-semibold text-gradient`}>{exp.company}</div>
          </div>
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
        </div>

        {/* Bullets */}
        <ul className="space-y-2 mb-4">
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

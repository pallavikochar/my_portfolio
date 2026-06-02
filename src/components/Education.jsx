import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { MapPin, CalendarDays, BookOpen, Star } from 'lucide-react'

const EDUCATION = [
  {
    school: 'University of Illinois Urbana-Champaign',
    short: 'UIUC',
    degree: 'Master of Science in Finance',
    concentrations: ['Quantitative Finance', 'Data Analytics'],
    concLabel: 'Concentrations',
    period: 'Aug 2024 – May 2026',
    location: 'Champaign, IL',
    logoImg: `${import.meta.env.BASE_URL}uiuc.png`,
    color: 'from-orange-500 to-amber-600',
    accentDark: 'border-orange-500/20',
    courses: [
      'Advanced Financial Derivatives',
      'Quantamental Investment',
      'Big Data Analytics',
      'Applied Portfolio Management',
      'Machine Learning',
      'Financial Risk Management',
      'Mergers & Acquisitions',
    ],
    highlights: [
      'Derivative pricing, VaR modeling, Portfolio theory and Multi-agent trading systems',
      'Course Grader, FIN501-Economics',
      'MS in Finance Program Ambassador',
    ],
  },
  {
    school: 'Indian Institute of Technology Bombay',
    short: 'IIT Bombay',
    degree: 'Bachelor of Technology in Chemical Engineering',
    concentrations: ['Industrial Engineering & Operations Research'],
    concLabel: 'Minor',
    period: 'Jul 2018 – May 2022',
    location: 'Mumbai, India',
    logoImg: `${import.meta.env.BASE_URL}iitb.png`,
    color: 'from-blue-600 to-indigo-700',
    accentDark: 'border-blue-500/20',
    courses: [
      'Process Systems Engineering',
      'Numerical Methods & Computation',
      'Probability & Statistics',
      'Linear Algebra & Optimization',
      'Operations Research',
      'Economics',
      'Advanced Data Analysis',
    ],
    highlights: [
      'Quantitative foundation in optimization and numerical methods',
      'Research-oriented curriculum emphasizing analytical rigor',
      'Senior Convener, InSync Dance Club',
    ],
  },
]

function EducationCard({ edu, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`rounded-2xl border overflow-hidden ${
        darkMode ? 'border-blue-500/10 bg-navy-900' : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0 border border-slate-200 flex items-center justify-center">
            <img src={edu.logoImg} alt={edu.short} className="w-full h-full object-contain p-1" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className={`text-base font-bold leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {edu.school}
            </h3>
            <p className="text-sm font-medium text-gradient mt-0.5">{edu.degree}</p>
          </div>
        </div>

        {/* Meta row */}
        <div className={`flex flex-wrap gap-4 text-xs mb-4 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={11} />
            {edu.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={11} />
            {edu.location}
          </span>
        </div>

        {/* Concentrations */}
        <div className="flex flex-wrap items-center gap-1.5 mb-5">
          <span className={`text-xs font-semibold uppercase tracking-wider mr-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            {edu.concLabel}:
          </span>
          {edu.concentrations.map(c => (
            <span key={c} className={`px-2.5 py-0.5 text-xs rounded-full font-medium border ${
              darkMode ? 'bg-white/5 text-slate-300 border-white/10' : 'bg-slate-50 text-slate-600 border-slate-200'
            }`}>
              {c}
            </span>
          ))}
        </div>

        <div className={`border-t mb-5 ${darkMode ? 'border-white/5' : 'border-slate-100'}`} />

        {/* Highlights */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2.5">
            <Star size={11} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Highlights
            </span>
          </div>
          <ul className="space-y-1.5">
            {edu.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className={`mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-gradient-to-br ${edu.color}`} />
                <span className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Coursework */}
        <div>
          <div className="flex items-center gap-2 mb-2.5">
            <BookOpen size={11} className={darkMode ? 'text-slate-500' : 'text-slate-400'} />
            <span className={`text-xs font-semibold uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              Key Coursework
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {edu.courses.map(c => (
              <span key={c} className={`px-2 py-0.5 text-xs rounded-md border ${
                darkMode ? 'bg-navy-800 text-slate-400 border-slate-700' : 'bg-slate-50 text-slate-600 border-slate-200'
              }`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Education({ darkMode }) {
  return (
    <SectionWrapper id="education" className={darkMode ? 'bg-navy-950' : 'bg-white'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title="Academic Foundation"
          subtitle="Rigorous training from two of the world's most selective institutions."
          darkMode={darkMode}
        />

        <div className="grid lg:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.school} edu={edu} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

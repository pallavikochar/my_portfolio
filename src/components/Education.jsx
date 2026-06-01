import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { BookOpen, Award } from 'lucide-react'

const EDUCATION = [
  {
    school: 'University of Illinois Urbana-Champaign',
    short: 'UIUC',
    degree: 'Master of Science in Finance',
    concentrations: ['Asset Management', 'Quantitative Finance', 'Data Analytics'],
    period: 'Aug 2024 – May 2026',
    location: 'Champaign, IL',
    logo: '🔶',
    color: 'from-orange-500 to-amber-600',
    courses: [
      'Fixed Income Securities & Derivatives',
      'Equity & Derivative Trading',
      'Machine Learning in Finance',
      'Portfolio Management',
      'Quantitative Methods',
      'Financial Data Engineering',
      'Alternative Investments',
      'Risk Management',
    ],
    highlights: [
      'Gies College of Business, consistently ranked top-5 Finance programs',
      'Quantitative Finance concentration: derivative pricing, stochastic calculus, time series',
      'Asset Management concentration: portfolio theory, factor models, institutional investing',
    ],
  },
  {
    school: 'Indian Institute of Technology Bombay',
    short: 'IIT Bombay',
    degree: 'Bachelor of Technology in Chemical Engineering',
    concentrations: [],
    period: 'Jul 2018 – May 2022',
    location: 'Mumbai, India',
    logo: '🔵',
    color: 'from-blue-600 to-indigo-700',
    courses: [
      'Process Systems Engineering',
      'Numerical Methods & Computation',
      'Probability & Statistics',
      'Linear Algebra & Optimization',
      'Data Analysis for Engineers',
      'Fluid Mechanics',
    ],
    highlights: [
      'IIT Bombay, India\'s #1 engineering institution with an acceptance rate under 1%',
      'Strong quantitative foundation: optimization, numerical methods, stochastic modeling',
      'Research-oriented curriculum emphasizing analytical rigor and first-principles reasoning',
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
      {/* Gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${edu.color}`} />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br ${edu.color} flex-shrink-0`}>
            {edu.logo}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {edu.school}
            </h3>
            <p className={`text-sm font-semibold mt-0.5 text-gradient`}>{edu.degree}</p>
            <div className={`flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <span>{edu.period}</span>
              <span>{edu.location}</span>
            </div>
            {edu.concentrations.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {edu.concentrations.map(c => (
                  <span
                    key={c}
                    className={`px-2 py-0.5 text-xs rounded-full ${
                      darkMode
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Two columns: highlights + courses */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Highlights */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={13} className={darkMode ? 'text-accent' : 'text-accent-dark'} />
              <span className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Highlights
              </span>
            </div>
            <ul className="space-y-2">
              {edu.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  <span className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Courses */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={13} className={darkMode ? 'text-accent' : 'text-accent-dark'} />
              <span className={`text-xs font-semibold uppercase tracking-wide ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Coursework
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {edu.courses.map(c => (
                <span
                  key={c}
                  className={`px-2 py-0.5 text-xs rounded-md ${
                    darkMode
                      ? 'bg-navy-800 text-slate-400 border border-slate-700'
                      : 'bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
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

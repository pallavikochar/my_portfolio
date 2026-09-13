import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const EDUCATION = [
  {
    school: 'University of Illinois Urbana-Champaign',
    short: 'UIUC',
    degree: 'Master of Science in Finance',
    concentrations: ['Quantitative Finance', 'Data Analytics'],
    concLabel: 'Concentrations',
    period: 'Jan 2025 to May 2026',
    location: 'Champaign, IL',
    gpa: '3.9/4.0',
    logoImg: `${import.meta.env.BASE_URL}uiuc.png`,
    courses: [
      'Financial Risk Management', 'Advanced Financial Derivatives', 'Quantitative Finance',
      'Machine Learning', 'Quantamental Investment', 'Big Data Analytics',
      'Applied Portfolio Management', 'Mergers & Acquisitions',
    ],
    highlights: [
      'Research Assistant, DeFi Crypto Asset Pricing',
      'Course Assistant, Financial Economics',
      'MS in Finance Program Ambassador',
    ],
  },
  {
    school: 'Indian Institute of Technology Bombay',
    short: 'IIT Bombay',
    degree: 'Bachelor of Technology in Chemical Engineering',
    concentrations: ['Industrial Engineering & Operations Research'],
    concLabel: 'Minor',
    period: 'Jul 2018 to May 2022',
    location: 'Mumbai, India',
    logoImg: `${import.meta.env.BASE_URL}iitb.png`,
    courses: [
      'Probability & Stochastic Processes', 'Numerical Analysis', 'Differential Equations',
      'Calculus', 'C++', 'Economics', 'Operations Research',
    ],
    highlights: [
      'Quantitative foundation in optimization and numerical methods',
      'Research-oriented curriculum emphasizing analytical rigor',
      'Senior Convener, InSync Dance Club',
    ],
  },
]

function EducationRow({ edu, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="py-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 border bg-white ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
            <img src={edu.logoImg} alt={edu.short} className="w-full h-full object-contain p-1" />
          </div>
          <div>
            <h3 className={`font-serif text-xl font-semibold leading-tight ${darkMode ? 'text-bone' : 'text-ink'}`}>
              {edu.school}
            </h3>
            <p className={`text-base font-medium mt-0.5 ${darkMode ? 'text-accent-light' : 'text-accent'}`}>{edu.degree}</p>
          </div>
        </div>
        <div className={`text-right text-sm font-mono ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          <div>{edu.period}</div>
          <div className="mt-0.5">{edu.location}{edu.gpa ? ` / GPA ${edu.gpa}` : ''}</div>
        </div>
      </div>

      <p className={`text-sm mb-4 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
        <span className={darkMode ? 'text-bone' : 'text-ink'}>{edu.concLabel}: </span>
        {edu.concentrations.join(', ')}
      </p>

      <ul className="space-y-1.5 mb-4">
        {edu.highlights.map((h, i) => (
          <li key={i} className={`text-sm leading-relaxed pl-4 border-l ${darkMode ? 'text-bone-soft border-rule-dark' : 'text-ink-soft border-rule'}`}>
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5">
        {edu.courses.map(c => (
          <span
            key={c}
            className={`px-2 py-0.5 text-xs font-mono border ${darkMode ? 'border-rule-dark text-bone-soft' : 'border-rule text-ink-soft'}`}
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Education({ darkMode }) {
  return (
    <SectionWrapper id="education" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Education"
          title="Academic foundation"
          subtitle="Rigorous training from two of the world's most selective institutions."
          darkMode={darkMode}
        />

        <div className={`divide-y border-t border-b ${darkMode ? 'divide-rule-dark border-rule-dark' : 'divide-rule border-rule'}`}>
          {EDUCATION.map((edu, i) => (
            <EducationRow key={edu.school} edu={edu} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

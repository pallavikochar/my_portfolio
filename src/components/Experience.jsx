import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const EXPERIENCES = [
  {
    company: 'fAlpha.ai',
    role: 'Quant Data Engineer Intern',
    period: 'Mar 2026 to May 2026',
    location: 'New York City, NY',
    type: 'Internship',
    bullets: [
      'Engineered a SHAP-based feature attribution framework in Python to decompose multi-factor predictive equity models into per-feature sensitivity metrics; parallelized matrix operations to balance attribution fidelity against runtime.',
      'Built an LLM-powered synthesis layer compiling multi-model predictive signals into structured equity research briefs.',
    ],
    tags: ['Python', 'SHAP', 'Explainable AI', 'LLM', 'Equity Research'],
  },
  {
    company: 'Kotak Securities Limited',
    role: 'Software Developer',
    note: 'Promoted 3x, IT Champion Award FY 2023 to 24',
    period: 'Jun 2022 to Dec 2024',
    location: 'Mumbai, India',
    type: 'Full-time',
    bullets: [
      "Built the SIP auto-debit execution path for Smallcase baskets in C#/.NET and SQL Server, with idempotent retry and daily reconciliation so duplicate instructions under at-least-once delivery could not double-debit.",
      'Optimized 50+ relational database queries, joins, and stored procedures across 10M+ financial records, ensuring strict data integrity and cutting manual reporting overhead by 50+ hours weekly.',
      'Distributed AWS data pipelines (S3, Glue, Step Functions, Lambda, Docker) to ingest and sync unstructured market and CRM data, improving analytics workflow efficiency by 30%.',
      'Engineered a Kafka/SQS streaming pipeline cross-checking PAN records against IP data, flagging 10+ fraudulent accounts monthly under KYC compliance.',
    ],
    tags: ['C#/.NET', 'SQL Server', 'AWS', 'Kafka', 'SQS', 'KYC Compliance'],
  },
  {
    company: 'Metvy',
    role: 'Entrepreneurship Trainee',
    period: 'Jun 2021 to Jul 2021',
    location: 'Mumbai, India',
    type: 'Trainee',
    bullets: [
      'Attended 15+ expert sessions across 8 aspects of entrepreneurship to understand the venture creation process.',
      'Developed a startup concept, conducted cost analysis, devised revenue strategies, and pitched to a panel of 10+ judges.',
    ],
    tags: ['Entrepreneurship', 'Business Strategy', 'Pitching', 'Cost Analysis'],
  },
  {
    company: 'FlexiEle',
    role: 'AI / ML Intern',
    period: 'May 2021 to Jul 2021',
    location: 'Gurgaon, India',
    type: 'Internship',
    bullets: [
      'Designed an AI chatbot using NLP techniques to conduct initial screenings, reducing manual recruiter workload by 60%.',
      'Trained ML algorithms to assess responses, improving prediction accuracy by 25% compared to rule-based methods.',
    ],
    tags: ['Python', 'NLP', 'Chatbot', 'ML'],
  },
  {
    company: 'Reliance Jio',
    role: 'Product Management Intern',
    period: 'Nov 2020 to Jan 2021',
    location: 'Mumbai, India',
    type: 'Internship',
    bullets: [
      'Customized features for the JioPhone Next in partnership with Google, targeting 300M+ users in India\'s mass market.',
      'Recommended strategic product enhancements that contributed to an estimated 15% higher adoption in Tier-2 cities.',
    ],
    tags: ['Product Management', 'Google Partnership', 'Market Research'],
  },
  {
    company: 'Microsoft',
    role: 'Engage Mentorship Program Apprentice',
    period: 'May 2020 to Jul 2020',
    location: 'Mumbai, India',
    type: 'Apprenticeship',
    bullets: [
      'Developed a web application to visualize and analyze shortest-path algorithms, integrating A*, Dijkstra, Best-First, and Breadth-First search for efficient distance calculation.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Algorithms', 'Data Structures'],
  },
]

function ExperienceCard({ exp, darkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border p-5 flex flex-col ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full text-left"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className={`font-serif text-lg font-semibold leading-snug ${darkMode ? 'text-bone' : 'text-ink'}`}>
            {exp.role}
          </h3>
          <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0 mt-1">
            <ChevronDown size={16} className={darkMode ? 'text-bone-soft' : 'text-ink-soft'} />
          </motion.div>
        </div>
        <p className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-accent-light' : 'text-accent'}`}>{exp.company}</p>
        <div className={`text-xs font-mono mt-2 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          {exp.period}
          <br />
          {exp.location} / {exp.type}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`pt-4 mt-4 border-t ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
              {exp.note && (
                <p className={`text-sm mb-3 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>{exp.note}</p>
              )}
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, i) => (
                  <li key={i} className={`text-sm leading-relaxed pl-3 border-l ${darkMode ? 'text-bone-soft border-rule-dark' : 'text-ink-soft border-rule'}`}>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map(t => (
                  <span
                    key={t}
                    className={`px-2 py-0.5 text-xs font-mono border ${darkMode ? 'border-rule-dark text-bone-soft' : 'border-rule text-ink-soft'}`}
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
  )
}

export default function Experience({ darkMode }) {
  return (
    <SectionWrapper id="experience" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Experience"
          subtitle="Three years of production engineering, quant research internships, and AI/ML development. Click a card to expand."
          darkMode={darkMode}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {EXPERIENCES.map(exp => (
            <ExperienceCard key={exp.company} exp={exp} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

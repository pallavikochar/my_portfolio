import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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

function ExperienceRow({ exp, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="py-8"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-4">
        <div>
          <h3 className={`font-serif text-xl font-semibold ${darkMode ? 'text-bone' : 'text-ink'}`}>
            {exp.role}
          </h3>
          <p className={`text-base font-medium mt-0.5 ${darkMode ? 'text-accent-light' : 'text-accent'}`}>
            {exp.company}
          </p>
        </div>
        <div className={`text-right text-sm font-mono ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          <div>{exp.period}</div>
          <div className="mt-0.5">{exp.location} / {exp.type}</div>
        </div>
      </div>

      {exp.note && (
        <p className={`text-sm mb-3 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>{exp.note}</p>
      )}

      <ul className="space-y-2 mb-4">
        {exp.bullets.map((b, i) => (
          <li key={i} className={`text-sm leading-relaxed pl-4 border-l ${darkMode ? 'text-bone-soft border-rule-dark' : 'text-ink-soft border-rule'}`}>
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
    </motion.div>
  )
}

export default function Experience({ darkMode }) {
  return (
    <SectionWrapper id="experience" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've worked"
          subtitle="Three years of production engineering, quant research internships, and AI/ML development."
          darkMode={darkMode}
        />

        <div className={`divide-y border-t border-b ${darkMode ? 'divide-rule-dark border-rule-dark' : 'divide-rule border-rule'}`}>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceRow key={exp.company} exp={exp} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

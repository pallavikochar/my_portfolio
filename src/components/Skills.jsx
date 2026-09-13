import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const SKILL_GROUPS = [
  {
    category: 'Technical',
    skills: [
      'Python', 'SQL (SQL Server, PostgreSQL)', 'R', 'C++', 'C# / .NET',
      'AWS (S3, Lambda, Glue, ECS)', 'Apache Kafka', 'Docker',
      'Git', 'Bloomberg', 'Capital IQ',
    ],
  },
  {
    category: 'Finance & Quant',
    skills: [
      'Monte Carlo Simulation', 'Stochastic Modeling', 'GARCH', 'VaR',
      'Expected Shortfall', 'MLE', 'Black-Scholes', 'Binomial Trees',
      'Portfolio Optimization', 'Variance Reduction', 'Cross-Validation', 'Risk Modeling',
    ],
  },
  {
    category: 'Machine Learning',
    skills: [
      'Probability & Stochastic Processes', 'Linear Algebra', 'Time Series Analysis',
      'XGBoost', 'LightGBM', 'Neural Networks', 'Bayesian Optimization',
      'Explainable AI (SHAP)', 'Logistic Regression',
    ],
  },
  {
    category: 'AI Tools & Systems',
    skills: [
      'Agentic AI', 'GenAI', 'Anthropic API / Claude Code',
      'Multi-Agent Orchestration', 'MCP (Model Context Protocol)',
      'GitHub Copilot', 'LangChain',
    ],
  },
]

const CERTIFICATIONS = [
  'Finance and Quantitative Modeling',
  'Machine Learning',
  'IBM Data Science',
  'LangChain',
]

function SkillRow({ group, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="py-6 grid sm:grid-cols-[190px_1fr] gap-2 sm:gap-8"
    >
      <h3 className={`font-serif text-lg ${darkMode ? 'text-accent-light' : 'text-accent'}`}>{group.category}</h3>
      <p className={`text-[15px] leading-relaxed ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
        {group.skills.join(', ')}
      </p>
    </motion.div>
  )
}

export default function Skills({ darkMode }) {
  return (
    <SectionWrapper id="skills" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical toolkit"
          subtitle="Across quant finance, data engineering, machine learning, and AI systems."
          darkMode={darkMode}
        />

        <div className={`border-t border-b divide-y ${darkMode ? 'border-rule-dark divide-rule-dark' : 'border-rule divide-rule'}`}>
          {SKILL_GROUPS.map((group, i) => (
            <SkillRow key={group.category} group={group} index={i} darkMode={darkMode} />
          ))}
        </div>

        <div className={`mt-8 text-sm ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
          <span className={`font-mono text-xs mr-3 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
            Certifications:
          </span>
          {CERTIFICATIONS.join(', ')}
        </div>
      </div>
    </SectionWrapper>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const SKILL_GROUPS = [
  {
    category: 'Technical',
    icon: '⚙️',
    color: 'from-blue-500 to-indigo-600',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'SQL / SQL Server', level: 90 },
      { name: 'R', level: 82 },
      { name: 'C# / .NET', level: 78 },
      { name: 'AWS (S3, Lambda, Glue)', level: 75 },
      { name: 'Azure', level: 68 },
      { name: 'ETL / SSIS', level: 80 },
      { name: 'CI/CD (GitHub Actions)', level: 70 },
      { name: 'Bloomberg Terminal', level: 72 },
    ],
  },
  {
    category: 'Finance & Quant',
    icon: '📈',
    color: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'Derivative Pricing', level: 88 },
      { name: 'Monte Carlo Methods', level: 90 },
      { name: 'Risk Management / VaR', level: 85 },
      { name: 'DCF / Equity Valuation', level: 82 },
      { name: 'Fixed Income / Duration', level: 78 },
      { name: 'Portfolio Construction', level: 80 },
      { name: 'GARCH / Volatility Modeling', level: 85 },
      { name: 'Backtesting Frameworks', level: 80 },
    ],
  },
  {
    category: 'Machine Learning',
    icon: '🧠',
    color: 'from-violet-500 to-purple-600',
    skills: [
      { name: 'Time Series (ARIMA, GARCH)', level: 88 },
      { name: 'LSTM / RNN', level: 78 },
      { name: 'FinBERT / NLP', level: 75 },
      { name: 'Explainable AI (SHAP, LIME)', level: 85 },
      { name: 'Gradient Boosting (XGBoost)', level: 80 },
      { name: 'Scikit-learn / Pandas', level: 92 },
    ],
  },
  {
    category: 'AI Tools & Systems',
    icon: '🤖',
    color: 'from-orange-500 to-rose-600',
    skills: [
      { name: 'Claude / Anthropic API', level: 88 },
      { name: 'Multi-Agent Orchestration', level: 82 },
      { name: 'MCP (Model Context Protocol)', level: 75 },
      { name: 'GitHub Copilot', level: 85 },
      { name: 'LangChain / Agents', level: 75 },
      { name: 'OpenAI API (GPT-4o)', level: 85 },
    ],
  },
]

const BAR_COLORS = {
  'Finance & Quant': 'bg-gradient-to-r from-emerald-500 to-teal-500',
  'Technical': 'bg-gradient-to-r from-blue-500 to-indigo-500',
  'Machine Learning': 'bg-gradient-to-r from-violet-500 to-purple-500',
  'AI Tools & Systems': 'bg-gradient-to-r from-orange-500 to-rose-500',
}

function SkillCard({ group, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const barColor = BAR_COLORS[group.category]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`rounded-2xl border p-6 ${
        darkMode ? 'border-blue-500/10 bg-navy-900' : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{group.icon}</span>
        <h3 className={`text-sm font-semibold tracking-wide uppercase ${
          darkMode ? 'text-slate-300' : 'text-slate-700'
        }`}>
          {group.category}
        </h3>
      </div>

      <div className="space-y-3.5">
        {group.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {skill.name}
              </span>
              <span className={`text-xs font-mono ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                {skill.level}%
              </span>
            </div>
            <div className={`h-1 rounded-full overflow-hidden ${darkMode ? 'bg-navy-800' : 'bg-slate-100'}`}>
              <motion.div
                className={`h-full rounded-full ${barColor}`}
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills({ darkMode }) {
  return (
    <SectionWrapper id="skills" className={darkMode ? 'bg-[#080e20]' : 'bg-slate-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Skills"
          title="Technical Toolkit"
          subtitle="Across quant finance, data engineering, machine learning, and AI systems."
          darkMode={darkMode}
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

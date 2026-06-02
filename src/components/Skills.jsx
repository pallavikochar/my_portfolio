import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, TrendingUp, Brain, Bot } from 'lucide-react'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const SKILL_GROUPS = [
  {
    category: 'Technical',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    tagColor: {
      dark: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
      light: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    skills: [
      'Python', 'SQL', 'R', 'C# / .NET',
      'AWS (S3, Lambda, EC2, Glue, RDS)', 'Azure', 'ETL / SSIS',
      'CI/CD Pipelines', 'GitHub', 'Bloomberg Terminal',
    ],
  },
  {
    category: 'Finance & Quant',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-600',
    tagColor: {
      dark: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      light: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    skills: [
      'Derivative Pricing', 'Monte Carlo Methods', 'Risk Management / VaR',
      'Portfolio Management',
      'GARCH / Volatility Modeling', 'Backtesting Frameworks',
    ],
  },
  {
    category: 'Machine Learning',
    icon: Brain,
    color: 'from-violet-500 to-purple-600',
    tagColor: {
      dark: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      light: 'bg-violet-50 text-violet-700 border-violet-200',
    },
    skills: [
      'Time Series (ARIMA, GARCH)', 'FinBERT / NLP',
      'Explainable AI (SHAP)', 'Gradient Boosting (XGBoost)',
      'Scikit-learn / Pandas', 'LSTM / RNN',
    ],
  },
  {
    category: 'AI Tools & Systems',
    icon: Bot,
    color: 'from-orange-500 to-rose-600',
    tagColor: {
      dark: 'bg-orange-500/10 text-orange-300 border-orange-500/20',
      light: 'bg-orange-50 text-orange-700 border-orange-200',
    },
    skills: [
      'LLM, LSM, LWM', 'Anthropic API / Claude Code',
      'Multi-Agent Orchestration', 'MCP (Model Context Protocol)',
      'GitHub Copilot', 'LangChain / Agents',
    ],
  },
]

function SkillCard({ group, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = group.icon
  const tag = group.tagColor[darkMode ? 'dark' : 'light']

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
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${
          darkMode ? 'border-slate-600 bg-transparent' : 'border-slate-300 bg-transparent'
        }`}>
          <Icon size={15} className={darkMode ? 'text-white' : 'text-slate-600'} />
        </div>
        <h3 className={`text-sm font-semibold tracking-wide uppercase ${
          darkMode ? 'text-slate-300' : 'text-slate-700'
        }`}>
          {group.category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
            className={`px-2.5 py-1 text-xs rounded-lg border font-medium ${tag}`}
          >
            {skill}
          </motion.span>
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

        <div className="grid sm:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

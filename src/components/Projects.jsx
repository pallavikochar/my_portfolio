import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'
import { ExternalLink, TrendingUp, BarChart2, Activity, Brain } from 'lucide-react'

function IconGithub({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const PROJECTS = [
  {
    title: 'Multi-Agent Trading System',
    description:
      'Multi-agent equity-trading system for Permian E&P names. Deterministic Python core with GPT-4o-mini qualitative agents for news and sentiment analysis. Backtested a satellite-anchored pre-earnings strategy: 18 trades, 83% hit rate, +13.5% return on $1M notional, 0.35 per-trade Sharpe ratio.',
    icon: TrendingUp,
    color: 'from-blue-500 to-indigo-600',
    accent: 'blue',
    tags: ['Python', 'GPT-4o-mini', 'Multi-Agent', 'Backtesting', 'NLP', 'Quant'],
    metrics: [
      { label: 'Hit Rate', value: '83%' },
      { label: 'Return', value: '+13.5%' },
      { label: 'Sharpe', value: '0.35' },
    ],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/multi-agent-trading',
    demo: null,
  },
  {
    title: 'Structured Product Valuation',
    description:
      'Priced a 2-year worst-of auto-callable note on AAPL / AMZN / GOOGL via Monte Carlo simulation in Python. Used correlated GBM with Cholesky decomposition, Bloomberg volatility surfaces, and OIS discounting. Modeled memory coupon mechanics, quarterly autocall schedule, and a 50% barrier.',
    icon: BarChart2,
    color: 'from-emerald-500 to-teal-600',
    accent: 'emerald',
    tags: ['Python', 'Monte Carlo', 'Cholesky', 'Bloomberg', 'Derivatives', 'GBM'],
    metrics: [
      { label: 'Assets', value: '3' },
      { label: 'Paths', value: '50K+' },
      { label: 'Barrier', value: '50%' },
    ],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/structured-product-valuation',
    demo: null,
  },
  {
    title: 'GARCH Volatility & VaR Modeling',
    description:
      'Implemented GARCH(1,1) on SPY returns using custom Maximum Likelihood Estimation in R — no black-box packages. Forecasted conditional volatility, then computed 1-day Value at Risk and Expected Shortfall at the 95% confidence level. Results validated against industry benchmarks.',
    icon: Activity,
    color: 'from-violet-500 to-purple-600',
    accent: 'violet',
    tags: ['R', 'GARCH', 'MLE', 'VaR', 'Expected Shortfall', 'Time Series'],
    metrics: [
      { label: 'Model', value: 'GARCH(1,1)' },
      { label: 'Conf.', value: '95%' },
      { label: 'Asset', value: 'SPY' },
    ],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/garch-var-modeling',
    demo: null,
  },
  {
    title: 'Behavioral Analysis of Credit Card Advertising',
    description:
      'Built a full data pipeline on Competiscan competitive intelligence data. Ran controlled experiments to identify which advertising features most influence credit card selection behavior. Analyzed salience effects, framing biases, and feature weighting in consumer decision-making.',
    icon: Brain,
    color: 'from-orange-500 to-rose-600',
    accent: 'orange',
    tags: ['Python', 'Data Pipeline', 'Behavioral Finance', 'A/B Testing', 'Statistics'],
    metrics: [
      { label: 'Source', value: 'Competiscan' },
      { label: 'Type', value: 'NLP + Stats' },
      { label: 'Focus', value: 'Behavioral' },
    ],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/credit-card-ad-analysis',
    demo: null,
  },
]

const ACCENT_STYLES = {
  blue: {
    dark: { badge: 'bg-blue-500/10 text-blue-400 border border-blue-500/20', metric: 'text-blue-400' },
    light: { badge: 'bg-blue-100 text-blue-700 border border-blue-200', metric: 'text-blue-600' },
  },
  emerald: {
    dark: { badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20', metric: 'text-emerald-400' },
    light: { badge: 'bg-emerald-100 text-emerald-700 border border-emerald-200', metric: 'text-emerald-600' },
  },
  violet: {
    dark: { badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20', metric: 'text-violet-400' },
    light: { badge: 'bg-violet-100 text-violet-700 border border-violet-200', metric: 'text-violet-600' },
  },
  orange: {
    dark: { badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20', metric: 'text-orange-400' },
    light: { badge: 'bg-orange-100 text-orange-700 border border-orange-200', metric: 'text-orange-600' },
  },
}

function ProjectCard({ project, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Icon = project.icon
  const styles = ACCENT_STYLES[project.accent][darkMode ? 'dark' : 'light']

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
      className={`group rounded-2xl border overflow-hidden card-hover flex flex-col ${
        darkMode
          ? 'border-blue-500/10 bg-navy-900'
          : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      {/* Card top accent bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${project.color} flex-shrink-0`}>
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <h3 className={`text-base font-semibold leading-snug ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Metrics */}
        <div className="flex gap-4 mb-4">
          {project.metrics.map(m => (
            <div key={m.label}>
              <div className={`text-xs font-mono font-semibold ${styles.metric}`}>{m.value}</div>
              <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed flex-1 mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map(t => (
            <span key={t} className={`px-2 py-0.5 text-xs font-mono rounded ${styles.badge}`}>
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-current/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
              darkMode ? 'text-slate-400 hover:text-accent' : 'text-slate-500 hover:text-accent'
            }`}
          >
            <IconGithub size={13} />
            GitHub
            <span className={`ml-1 text-xs font-mono px-1 py-0.5 rounded ${
              darkMode ? 'bg-navy-800 text-slate-600' : 'bg-slate-100 text-slate-400'
            }`}>placeholder</span>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                darkMode ? 'text-slate-400 hover:text-accent' : 'text-slate-500 hover:text-accent'
              }`}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects({ darkMode }) {
  return (
    <SectionWrapper id="projects" className={darkMode ? 'bg-navy-950' : 'bg-slate-50'}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="Quantitative research, derivative pricing, and AI-driven systems — with real numbers attached."
          darkMode={darkMode}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} darkMode={darkMode} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className={`mt-8 text-sm font-mono text-center ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}
        >
          💡 Replace the GitHub placeholder links with your actual repo URLs in{' '}
          <code className={`px-1.5 py-0.5 rounded text-xs ${darkMode ? 'bg-navy-900' : 'bg-slate-200'}`}>
            src/components/Projects.jsx
          </code>
        </motion.p>
      </div>
    </SectionWrapper>
  )
}

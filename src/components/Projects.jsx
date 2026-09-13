import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

function IconGithub({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

const PROJECTS = [
  {
    title: 'Multi-Asset Exotic Derivatives Pricing Model',
    description:
      'Simulated correlated GBM paths via Cholesky factorization of the implied correlation matrix under a 50% barrier, quarterly autocall, and memory-coupon structure, reaching a Monte Carlo standard error of $0.74 on a $978 price per $1,000 face. Reconciled payoff logic against a static decomposition (zero-coupon bond, short worst-of down-and-in put, autocall strip) and estimated delta and vega by bump-and-revalue under common random numbers to suppress finite-difference noise.',
    tags: ['Python', 'Monte Carlo', 'Cholesky', 'GBM', 'Autocallable', 'Greeks'],
    metrics: [
      { label: 'MC std error', value: '$0.74' },
      { label: 'Price', value: '$978' },
      { label: 'Barrier', value: '50%' },
    ],
    github: null,
  },
  {
    title: 'GARCH Volatility Modeling and Tail Risk (VaR/ES) Framework',
    description:
      'Derived and optimized the GARCH(1,1) log-likelihood with stationarity and positivity constraints through reparameterization, reconciling estimates to fGarch and tseries to 4 decimal places. Backtested 95% Value at Risk with Kupiec unconditional-coverage and Christoffersen independence tests, comparing exception counts and clustering across GARCH, historical-simulation, and delta-normal estimators.',
    tags: ['R', 'GARCH', 'MLE', 'VaR', 'Kupiec Test', 'Christoffersen Test'],
    metrics: [
      { label: 'Model', value: 'GARCH(1,1)' },
      { label: 'VaR conf.', value: '95%' },
      { label: 'Precision', value: '4 decimals' },
    ],
    github: null,
  },
  {
    title: 'Alternative Data Trading Strategy and Ablation Testing',
    description:
      'Built an alternative-data equity strategy on satellite-derived production signals for Permian Basin E&P names, with LLM agents confined to qualitative roles behind a deterministic Python core so P&L stayed reproducible and auditable. Pre-registered the ablation set before evaluating results to separate genuine signal from specification search, reporting a 0.35 per-trade Sharpe and surfacing the gap between an 83% hit rate and risk-adjusted return.',
    tags: ['Python', 'Satellite Data', 'LLM Agents', 'Backtesting', 'Ablation Testing'],
    metrics: [
      { label: 'Hit rate', value: '83%' },
      { label: 'Sharpe', value: '0.35' },
      { label: 'Basin', value: 'Permian' },
    ],
    github: 'https://github.com/pallavikochar/oil-gas-multi-agent-trading-system',
  },
  {
    title: 'Multi-Agent Systematic Equity Research and Backtesting',
    description:
      'Built a hybrid vector-keyword retrieval pipeline (bge-base, HNSW index) over 160K SEC filing chunks with citation scoring, holding warm-query latency to about 740ms. Orchestrated 11 specialized research agents over filing evidence; a 10-year historical backtest yielded 13.9% CAGR and 2.1% alpha over the benchmark index.',
    tags: ['Python', 'Multi-Agent', 'HNSW', 'RAG', 'SEC Filings', 'Backtesting'],
    metrics: [
      { label: 'Agents', value: '11' },
      { label: 'CAGR', value: '13.9%' },
      { label: 'Alpha', value: '2.1%' },
    ],
    github: 'https://github.com/pallavikochar/stock-selection-topdown-method',
  },
  {
    title: 'Interest Rate and Prepayment Modeling, Busey Bank Practicum',
    description:
      "Modeled conditional prepayment rate on bank loan-tape data with XGBoost across borrower and loan-characteristic segments, delivering results to Busey Bank's analytics team. Diagnosed target leakage in the CPR construction (prior and query balances mechanically embedded in the label), rebuilt the feature set, and flagged an inflated segment R-squared that would not have replicated out-of-sample.",
    tags: ['XGBoost', 'Python', 'Loan Tape', 'Target Leakage', 'Prepayment Modeling'],
    metrics: [
      { label: 'Model', value: 'XGBoost' },
      { label: 'Target', value: 'CPR' },
      { label: 'Partner', value: 'Busey Bank' },
    ],
    github: null,
  },
]

function ProjectRow({ project, index, darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06 }}
      className="py-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2 mb-4">
        <h3 className={`font-serif text-xl font-semibold max-w-2xl ${darkMode ? 'text-bone' : 'text-ink'}`}>
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 text-xs font-mono transition-colors ${
              darkMode ? 'text-bone-soft hover:text-accent-light' : 'text-ink-soft hover:text-accent'
            }`}
          >
            <IconGithub />
            Source
          </a>
        )}
      </div>

      <div className={`flex flex-wrap gap-x-8 gap-y-2 mb-4 pb-4 border-b ${darkMode ? 'border-rule-dark' : 'border-rule'}`}>
        {project.metrics.map(m => (
          <div key={m.label}>
            <div className={`font-mono tabular-nums text-lg font-medium ${darkMode ? 'text-accent-light' : 'text-accent'}`}>
              {m.value}
            </div>
            <div className={`text-xs mt-0.5 ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>{m.label}</div>
          </div>
        ))}
      </div>

      <p className={`text-sm leading-relaxed mb-4 max-w-3xl ${darkMode ? 'text-bone-soft' : 'text-ink-soft'}`}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map(t => (
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

export default function Projects({ darkMode }) {
  return (
    <SectionWrapper id="projects" className={darkMode ? 'bg-charcoal' : 'bg-paper'}>
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="Quantitative research, derivative pricing, and AI-driven systems. All results are real."
          darkMode={darkMode}
        />

        <div className={`divide-y border-t border-b ${darkMode ? 'divide-rule-dark border-rule-dark' : 'divide-rule border-rule'}`}>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

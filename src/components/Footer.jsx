import { Mail, ArrowUp } from 'lucide-react'

function IconGithub({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function IconLinkedin({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

export default function Footer({ darkMode }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={`border-t py-12 ${
      darkMode
        ? 'bg-navy-950 border-blue-500/10'
        : 'bg-white border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-serif text-lg font-semibold text-gradient">Pallavi Kochar</div>
            <p className={`text-xs mt-1 ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
              New York &nbsp;|&nbsp; Chicago &nbsp;|&nbsp; Remote
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:pallavikochar8@gmail.com"
              aria-label="Email"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com/in/pallavikochar7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <IconLinkedin size={18} />
            </a>
            <a
              href="https://github.com/pallavikochar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`transition-colors ${darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'}`}
            >
              <IconGithub size={18} />
            </a>
          </div>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className={`flex items-center gap-2 text-xs font-medium transition-colors ${
              darkMode ? 'text-slate-500 hover:text-accent' : 'text-slate-400 hover:text-accent'
            }`}
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>

        <div className={`mt-8 pt-6 border-t text-center text-xs ${
          darkMode ? 'border-blue-500/5 text-slate-700' : 'border-slate-100 text-slate-400'
        }`}>
          © {new Date().getFullYear()} Pallavi Kochar · Built with React &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  )
}

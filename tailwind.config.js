/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paper / graphite: the two surfaces. Neither cream nor near-black neon.
        paper: '#F4F4F1',
        charcoal: '#1B1C1F',
        // Text
        ink: '#1B1D22',
        'ink-soft': '#565A63',
        bone: '#E8E7E2',
        'bone-soft': '#93938C',
        // Hairlines, no shadows anywhere
        rule: '#D8D8D3',
        'rule-dark': '#333336',
        // The one interactive color: institutional navy, not a gradient
        accent: '#1E3A5F',
        'accent-light': '#7B9CC4',
        // Functional only: real positive/negative metrics, never decorative
        pos: '#1F6F4A',
        'pos-light': '#4E9B74',
        neg: '#A32F2F',
        'neg-light': '#C1615A',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}


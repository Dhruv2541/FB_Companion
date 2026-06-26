/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        arctic: '#F1F6F4',
        forsythia: '#FFC801',
        nocturnal: '#114C5A',
        mystic: '#D9E8E2',
        saffron: '#FF9932',
        oceanic: '#172B36',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        'hover-fast': '150ms',
        'hover-slow': '200ms',
        'reflow-fast': '300ms',
        'reflow-slow': '400ms',
        'entry-orchestration': '500ms',
      },
    },
  },
  plugins: [],
}

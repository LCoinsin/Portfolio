/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'large': '48pt',
        'medium': '32pt',
        'small': '24pt',
        'tyni': '16pt',
        'paragraphe': '14pt',
        'footnote': '12pt',
      },
      fontFamily: {
        "mplus": "'mplus', sans-serif",
      },
      colors: {
        'primary': '#bd2035',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}


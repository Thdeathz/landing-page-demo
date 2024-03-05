/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/src/assets/footer-bg.jpg')"
      },
      inset: {
        'banner-center-h': 'calc(50% - 5rem)',
        'banner-center-w': 'calc(50% - 22.5rem)'
      }
    }
  },
  important: true,
  plugins: []
}

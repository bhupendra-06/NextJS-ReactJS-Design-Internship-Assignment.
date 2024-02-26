/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        'custom': '#212731',
      },
      gridTemplateColumns: {
        // for rectangle section
        'custom': '1fr 3fr 1fr',
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}


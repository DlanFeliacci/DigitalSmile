/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite', // Adjust the duration as needed
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
      },
      keyframes: {
        'wiggle': {
        '0%, 100%': { transform: 'rotate(-18deg)' },
        '50%': { transform: 'rotate(18deg)' },
      }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

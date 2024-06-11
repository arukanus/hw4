import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // Use 'media' or 'class' here instead of false
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;

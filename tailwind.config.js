// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2s infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};

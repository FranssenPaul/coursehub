/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
export default {
  content: [
    './index.html', // Assure que Tailwind scanne index.html dossier public
    './src/**/*.{js,ts,jsx,tsx}', // Scanne tous les fichiers de composants
    // dans le dossier src
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'coffee',
      'light',
      'forest',
      'bumblebee',
      'emerald',
      'halloween',
      'wireframe',
      'autumn',
      'coffee',
      'business',
      'cupcake',
      'corporate',
    ],
    darkTheme: 'coffee',
    lightTheme: 'light',
    base: true,
    utils: true,
  },
};

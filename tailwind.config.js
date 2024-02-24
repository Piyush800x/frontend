/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
    'node_modules/flowbite-react/lib/esm/**/*.js',
],
  theme: {
    extend: {
      colors: {
        'blue-medium': "#113065",
        'blue-darker': "#0f1056",
        'blue-dark': "#151269",
        'blue-sky': "#81b1ce",
        'blue-skylight': "#aad6ec"
      }
    },
    fontFamily: {
      'body': ['montserrat']
    }
  },
  plugins: [
    require('flowbite/plugin'),
    //require('tailwindcss/forms'),
  ],
}


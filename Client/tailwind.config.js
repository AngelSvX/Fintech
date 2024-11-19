/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(to bottom right, #FF3A58 0%, #FF5378 50%, #EC2F8A 100%)',
      },
      borderImage: {
        'custom-gradient-border': 'linear-gradient(to right, #FF3A58, #FF5378, #EC2F8A) 1',
      },
      textColor:{
        'navLink': '#333644',
        'subTitle' : '#FF5378',
        'mainTitle': '#2F2F4A',
        'textDescription': 'rgba(47, 47, 74, 0.7)',
        'custom-gradient': 'bg-gradient-to-br from-[#FF3A58] via-[#FF5378] to-[#EC2F8A] bg-clip-text text-transparent',
      }
    },
  },
  plugins: [],
}


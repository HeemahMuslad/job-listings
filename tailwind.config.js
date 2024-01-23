/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {"max": '450px'},
        'md': {"max": '880px'},
        'lg':{"max": '1024px'},
      },
      colors:{primary:"hsl(180, 52%, 96%)", secondary:" hsl(180, 14%, 20%)",cool:" hsl(180, 8%, 52%)", dark:" hsl(180, 29%, 50%)" , light:"hsl(180, 31%, 95%)"},  
      width:{max:"90%"},
      height:{max:"90%", min:"50%"},
    },
    
  },
  plugins: [],
}
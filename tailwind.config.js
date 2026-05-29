export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        azonix : ['DM Sans']
      },
      colors: {
        bleu : '#111F4D',
        noir : '#020205',
        orange: '#E43A19'
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(250px,1fr))',
        'fitsm': 'repeat(auto-fit, minmax(189px,1fr))',
      },
    },
  },
  plugins: [],
}

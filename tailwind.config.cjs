module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // activar modo oscuro controlado por la clase "dark"
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'text': 'var(--text)',
        'secondary-text': 'var(--secondary-text)',
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'accent': 'var(--accent)',
        'muted': 'var(--muted)',
        'success': 'var(--success)',
        'danger': 'var(--danger)',
        'card-bg': 'var(--card-bg)',
      },
    }
  },
  plugins: [],
}
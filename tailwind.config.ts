import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'beige': '#F1E7D2',
        'gold': '#957D56',
        'dark-green': '#3E4A46',
        'light-green': '#586762',
        
        // Map new colors to semantic names
        'primary': '#3E4A46', // dark-green
        'primary-dark': '#2D3832', // darker shade of dark-green
        'primary-light': '#586762', // light-green
        
        'secondary': '#957D56', // gold
        'secondary-dark': '#7A6545', // darker shade of gold
        'secondary-light': '#A8927A', // lighter shade of gold
        
        'accent': '#F1E7D2', // beige
        'accent-dark': '#E5D6B6', // darker shade of beige
        'accent-light': '#F8F2E6', // lighter shade of beige
        
        // Custom Colors for Components
        'success': '#3E4A46',
        'warning': '#957D56',
        'info': '#586762',
        'error': '#D32F2F',
        
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'custom': '0 4px 14px 0 rgba(62, 74, 70, 0.1)',
      },
      gradients: {
        'primary': 'linear-gradient(135deg, #3E4A46 0%, #2D3832 100%)',
        'secondary': 'linear-gradient(135deg, #957D56 0%, #7A6545 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
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
        // Primary Colors
        'primary': '#2E7D32',
        'primary-dark': '#1B5E20',
        'primary-light': '#81C784',
        
        // Secondary Colors
        'secondary': '#FFD700',
        'secondary-dark': '#DAA520',
        
        // Custom Colors for Components
        'success': '#2E7D32',
        'warning': '#FFD700',
        'info': '#81C784',
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
        primaryTheme: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondaryTheme: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
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
        'custom': '0 4px 14px 0 rgba(46, 125, 50, 0.1)',
      },
      gradients: {
        'primary': 'linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%)',
        'secondary': 'linear-gradient(135deg, #FFD700 0%, #DAA520 100%)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main website theme colors - aligned with daysync.io
        main: {
          primary: '#016A70',
          accent: '#2A7B78', 
          secondary: '#006D77',
          background: '#F8F9FA',
          primaryText: '#132A3A',
          secondaryText: '#132A3A',
        },
        // Mobile app theme colors - consistent across platforms
        mobile: {
          primary: '#00D084',
          secondary: '#006D77',
          background: '#ECEFF1',
          primaryText: '#132A3A',
          secondaryText: '#475B6E',
          grey0: '#1C2D3F',
          grey1: '#364A5B',
          grey2: '#506872',
          grey3: '#6B869A',
          grey4: '#8BA4B1',
          grey5: '#A8C2D1',
          success: '#007749',
          warning: '#FFB300',
          error: '#FF6B6B',
          disabled: '#A8A8A8',
          divider: '#D0D0D0',
          subtitle: '#6B869A',
          border: '#B0C4D6',
        },
        // Liquid Glass palette - updated with mobile colors
        glass: {
          primary: '#016A70',      // Main primary for buttons/CTAs
          secondary: '#006D77',    // Secondary
          tertiary: '#007749',     // Success
          surface: 'rgba(255, 255, 255, 0.7)',   // Glass surface
          'surface-hover': 'rgba(255, 255, 255, 0.8)',
          'surface-solid': 'rgba(255, 255, 255, 0.95)',
          border: 'rgba(255, 255, 255, 0.18)',
          'border-hover': 'rgba(255, 255, 255, 0.25)',
          backdrop: 'rgba(248, 248, 250, 0.8)',
          mesh: {
            1: 'rgba(1, 106, 112, 0.03)',
            2: 'rgba(0, 109, 119, 0.03)',
            3: 'rgba(0, 119, 73, 0.03)',
          }
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F7',
          200: '#E8E8ED',
          300: '#D2D2D7',
          400: '#AEAEB2',
          500: '#8E8E93',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#1D1D1F',
        },
        // Keep some original colors for compatibility - updated with mobile theme
        daysync: {
          primary: '#016A70',
          secondary: '#006D77',
          accent: '#34C759',
          light: '#E3F2FD',
          background: '#FAFAFA',
          'primary-text': '#1D1D1F',
          'secondary-text': '#8E8E93',
          white: '#FFFFFF',
          border: 'rgba(0, 0, 0, 0.06)',
          'card-bg': 'rgba(255, 255, 255, 0.7)',
          'surface': '#F5F5F7',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'inter': ['Inter', 'Arial', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'Noto Sans Georgian', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Liquid Glass shadows - soft and diffused
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.12)',
        'glass-sm': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
        // Legacy shadows for compatibility
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'modern': '0 8px 32px rgba(0, 0, 0, 0.08)',
      },
      scale: {
        '98': '0.98',
        '102': '1.02',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0.8' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      }
    },
  },
  plugins: [],
}
export default config

import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["dark"],
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(function ({ addVariant }) {
      addVariant(
        "prose-inline-code",
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
      );
    }),
  ],
  variants: { typography: ["dark"] },
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Helvetica", fontFamily.sans],
        serif: ["Times", fontFamily.serif],
        mono: [fontFamily.mono],
      },
      fontSize: {
        base: "1rem",
      },
      colors: {
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Remove backticks from inline code
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            code: {
              backgroundColor: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
              borderRadius: theme("borderRadius.DEFAULT"),
              paddingLeft: theme("spacing[1]"),
              paddingRight: theme("spacing[1]"),
              paddingTop: theme("spacing[0.5]"),
              paddingBottom: theme("spacing[0.5]"),
            },
            a: {
              color: theme("colors.blue.600"),
              fontWeight: "400",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "li::marker": {
              color: theme("colors.neutral.950"),
            },
          },
        },
        dark: {
          css: {
            code: {
              backgroundColor: "hsl(var(--accent))",
              color: "hsl(var(--accent-foreground))",
              borderRadius: theme("borderRadius.DEFAULT"),
              paddingLeft: theme("spacing[1]"),
              paddingRight: theme("spacing[1]"),
              paddingTop: theme("spacing[0.5]"),
              paddingBottom: theme("spacing[0.5]"),
            },
            a: {
              color: theme("colors.blue.300"),
            },
            "li::marker": {
              color: theme("colors.neutral.300"),
            },
          },
        },
      }),
    },
  },
};

export default config;

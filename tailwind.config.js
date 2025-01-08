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
    require("@designbycode/tailwindcss-text-shadow"),
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
        sans: ["Roboto", "Helvetica", fontFamily.sans],
        serif: ["Times", fontFamily.serif],
        mono: [fontFamily.mono],
        display: ["Roboto Condensed", fontFamily.sans],
      },

      fontSize: {
        base: "1rem",
      },

      colors: {
        royalblue: {
          50: "#EDF1FC",
          100: "#D7E0F9",
          200: "#B4C4F3",
          300: "#8CA5ED",
          400: "#6989E7",
          500: "#4169E1",
          600: "#204BCB",
          700: "#183796",
          800: "#102565",
          900: "#081230",
          950: "#040A1A",
        },

        navyblue: {
          50: "#E0F3FF",
          100: "#BDE4FF",
          200: "#7ACAFF",
          300: "#3DB1FF",
          400: "#0096FA",
          500: "#006EB8",
          600: "#005994",
          700: "#004370",
          800: "#002B47",
          900: "#001524",
          950: "#000C14",
        },

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

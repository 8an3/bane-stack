import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'ui-sans-serif',
					'system-ui',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			backgroundColor: {
				background: "hsl(var(--background))",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
				"caret-blink": {
					"0%,70%,100%": { opacity: "1" },
					"20%,50%": { opacity: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontSize: "1.875rem", // text-3xl
							fontWeight: "700", // font-bold
							lineHeight: "1.25", // leading-tight
							letterSpacing: "-0.025em", // tracking-tighter
							textAlign: "center", // text-center
							"@media (min-width: 1024px)": { lineHeight: "1.1" }, // lg:leading-[1.1]
						},
						h2: {
							marginTop: "0.75rem", // mt-3
							color: "hsl(var(--muted-foreground))", // text-muted-foreground
							fontWeight: "300", // text-thin
							textAlign: "center", // text-center
						},
						h3: {
							fontWeight: "600", // font-semibold
							marginBottom: "1rem", // mb-4
							marginTop: "1rem", // mt-4
						},
						h4: {
							fontSize: "1.25rem", // text-xl
							fontWeight: "600", // font-semibold
							marginBottom: "0.75rem", // mb-3
							marginTop: "0.75rem", // mt-3
						},
						h5: {
							fontSize: "1.125rem", // text-lg
							fontWeight: "500", // font-medium
							marginBottom: "0.5rem", // mb-2
							marginTop: "0.5rem", // mt-2
						},
						p: {
							textWrap: "balance", // text-balance
							fontWeight: "300", // font-light
							color: "hsl(var(--foreground))", // text-foreground
							fontSize: "0.875rem", // text-sm
						},
					},
				},
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;

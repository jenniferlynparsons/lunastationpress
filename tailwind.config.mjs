/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		container: {
			center: true,
		},
		borderWidth: {
			DEFAULT: '1px',
			'0': '0px',
			'2': '2px',
			'4': '4px',
			'8': '8px',
			'header': '24px',
			'navbar': '1px',
			'navlink': '2px',
			'subfooter': '4px',
			'footer' : '8px',
			'definition-list': '1px',
			'note': '6px',
		},
		colors: {
			'blue': '#49819b',
			'green': '#5d8c85',
			'nymph': '#5d638c',
			'white': '#ffffff',
			'black': '#222222',
			'navy': '#182740',
			// Gray scale for proper color hierarchy - neutral grays based on #222222
			'gray': {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#e5e5e5',
				300: '#d4d4d4',
				400: '#a3a3a3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
			},
		  },
		fontFamily: {
			serif: ['Georgia', 'serif'],
			sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
		},
		textColor: {
			'blue': '#49819b',
			'green': '#5d8c85',
			'nymph': '#5d638c',
			'white': '#ffffff',
			'black': '#222222',
			'navy': '#182740',
			// Gray scale for text hierarchy - neutral grays based on #222222
			'gray': {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#e5e5e5',
				300: '#d4d4d4',
				400: '#a3a3a3',
				500: '#737373',
				600: '#525252',
				700: '#404040',
				800: '#262626',
				900: '#171717',
			},
		},
		extend: {
			typography: {
				DEFAULT: {
				  css: {
					color: '#222',
					a: {
					  color: '#49819b',
					  '&:hover': {
						color: '#7ba1a2',
					  },
					},
				  },
				},
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		function({ addBase, addUtilities }) {
			addBase({
			'h1, h2, h3, h4, h5, h6': { fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' },
			})
			
			// Add widow/orphan prevention utilities
			addUtilities({
				'.text-balance': {
					'text-wrap': 'balance',
				},
				'.text-pretty': {
					'text-wrap': 'pretty',
				},
				'.prevent-widows': {
					'widows': '2',
					'orphans': '2',
				},
				'.widows-2': {
					'widows': '2',
				},
				'.widows-3': {
					'widows': '3',
				},
				'.orphans-2': {
					'orphans': '2',
				},
				'.orphans-3': {
					'orphans': '3',
				},
			})
	  	}
	],
}

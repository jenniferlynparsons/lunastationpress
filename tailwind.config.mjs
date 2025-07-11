/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			// Gray scale for proper color hierarchy
			'gray': {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
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
			// Gray scale for text hierarchy
			'gray': {
				50: '#f9fafb',
				100: '#f3f4f6',
				200: '#e5e7eb',
				300: '#d1d5db',
				400: '#9ca3af',
				500: '#6b7280',
				600: '#4b5563',
				700: '#374151',
				800: '#1f2937',
				900: '#111827',
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

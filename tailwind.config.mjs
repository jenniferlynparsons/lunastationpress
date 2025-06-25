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
			'amber': '#cfc8b3',
			'nymph': '#7ba1a2',
			'white': '#ffffff',
			'black': '#222222',
			'navy': '#182740',
			'burnt': '#d67d45',
			'amber-light': '#f9f7f3',
		  },
		fontFamily: {
			serif: ['Georgia', 'serif'],
			sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
		},
		textColor: {
			'blue': '#49819b',
			'amber': '#cfc8b3',
			'nymph': '#7ba1a2',
			'white': '#ffffff',
			'black': '#222222',
			'navy': '#182740',
			'burnt': '#d67d45',
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
		function({ addBase }) {
			addBase({
			'h1, h2, h3, h4, h5, h6': { fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif' },
			})
	  	}
	],
}

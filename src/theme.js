const theme = Object.freeze({
	breakpoints: {
		mobile: '767px',
		tablet: ['768px', '1199px'],
		desktop: '1200px',
	},
	colors: {
		accent: '#ed5b2d',
		lightAccent: '#f66912',
		black: '#120200',
		white: '#ffffff',
		error: '#c40000',
		overlay: 'rgba(255,255,255,0.6)',
		background: {
			primary: '#f3f3f3',
			secondary: '#120200',
			button: '#ed5b2d',
			card: '#ffffff',
		},
		text: {
			primary: '#120200',
			secondary: '#f6f6e9',
		},
	},
	shadows: [
		'rgba(0, 0, 0, 0.1) 0 4px 12px',
		'7px 4px 14px rgba(49, 21, 4, 0.07)',
		'0 5px 7px -1px rgba(51, 51, 51, 0.23)',
		'0 9px 47px 11px rgba(51, 51, 51, 0.18)',
		'0px 4px 10px 4px #9e9e9e',
	],
	animation: {
		cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
	},
	spacing: ['4px', '8px', '16px', '32px', '64px', '128px'],
	shape: {
		borderRadius: { s: '4px', m: '8px', xl: '50px' },
		borderWidth: '2px',
		opacity: 0.6,
	},
	typography: {
		font: {
			primary: ['Noto Sans, sans-serif'],
		},
		size: {
			xxs: '10px',
			xs: '12px',
			s: '14px',
			m: '16px',
			l: '18px',
			xl: '20px',
			xxl: '24px',
		},
		weight: {
			light: 300,
			regular: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
		},
	},
});

export default theme;

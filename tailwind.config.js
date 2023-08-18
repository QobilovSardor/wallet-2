/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#1F6CFF',
				'orange': '#FF9900',
				'gray-1': '#B5B5B5',
				'warning': '#FF4444'
			},
			backgroundImage: {
				'wave-img': "url('/src/assets/icons/bottomIcon)"
			}
		},
	},
	plugins: [],
}

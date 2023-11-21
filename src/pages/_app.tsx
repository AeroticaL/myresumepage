import 'tailwindcss/tailwind.css'
import '@/styles/styles.css'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

const App = ({ Component, pageProps }) => {
	return (
		
		<ThemeProvider attribute="class">

			<Script
				src="https://kit.fontawesome.com/4c273e6d3b.js"
				crossOrigin="anonymous"
			/>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default App

import { useTheme } from './hooks/useTheme'

/* components */
import SiteContent from './components/site-content.jsx/SiteContent'
import SiteFooter from './components/site-footer/SiteFooter'
import SiteHeader from './components/site-header/SiteHeader'

function App() {
	const { bgColor } = useTheme()

	return (
		<div
			className='App flex-wrapper'
			style={{ backgroundColor: bgColor }}
		>
			<SiteHeader />
			<SiteContent />
			<SiteFooter />
		</div>
	)
}

export default App

/* components */
import SiteContent from './components/site-content.jsx/SiteContent'
import SiteFooter from './components/site-footer/SiteFooter'
import SiteHeader from './components/site-header/SiteHeader'

function App() {
	return (
		<div className='App flex-wrapper'>
			<SiteHeader />
			<SiteContent />
			<SiteFooter />
		</div>
	)
}

export default App

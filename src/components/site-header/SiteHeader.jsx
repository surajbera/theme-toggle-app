import { useTheme } from '../../hooks/useTheme'

import { CiDark } from 'react-icons/ci'

/* styles */
import './SiteHeader.css'

const SiteHeader = () => {
	const { updateThemeColor, bgColor } = useTheme()
	const themes = ['#475569', '#d97706', '#86198f', '#15803d', '#2563eb', '#9333ea']

	return (
		<header className='site-header'>
			<div className='container'>
				<div className='flex-wrapper header-inner'>
					<p className='flex-wrapper site-logo'>Lorem Ipsum</p>
					<ul className='theme-switcher-wrap flex-wrapper'>
						{themes.map(theme => (
							<li
								className='theme-btn-wrap flex-wrapper'
								key={theme}
							>
								<button
									className={`theme-btn ${bgColor === theme && 'active'}`}
									style={{ backgroundColor: theme }}
									onClick={() => updateThemeColor(theme)}
								></button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader

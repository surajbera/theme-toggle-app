import { useTheme } from '../../hooks/useTheme'

import { CiDark } from 'react-icons/ci'

/* styles */
import './SiteHeader.css'

const SiteHeader = () => {
	const themes = ['#64748b', '#6366f1', '#ec4899']
	const { updateThemeColor } = useTheme()

	const changeThemeColor = evt => {
		const color = evt.target.getAttribute('data-color')
		updateThemeColor(color)
	}

	return (
		<header className='site-header'>
			<div className='container'>
				<div className='flex-wrapper header-inner'>
					<div className='left-wrap flex-wrapper'>
						<p className='flex-wrapper site-logo'>Lorem Ipsum</p>
					</div>
					<div className='right-wrap flex-wrapper'>
						<ul className='theme-switcher-wrap flex-wrapper'>
							{themes.map(theme => (
								<li
									className='theme-btn-wrap flex-wrapper'
									key={theme}
								>
									<button
										className='theme-btn'
										data-color={theme}
										style={{ backgroundColor: theme }}
										onClick={changeThemeColor}
									></button>
								</li>
							))}
						</ul>
						<button className='flex-wrapper toggle-icon-btn'>
							<CiDark size={30} />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default SiteHeader

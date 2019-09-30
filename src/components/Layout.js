import React from 'react';

//components
import { Route, Nav } from './NavMenu';

//style
import '../assets/style/layout.css';

//svg
import logo from '../assets/svg/logo.svg';

function Layout() {
	return (
		<div>
			<main className={'desktop-layout'}>
				<aside className={'sideview'}>
					<img className={'logo'} src={logo} alt={'logo'} />
					<nav className={'dt-nav'}>
						<Nav />
					</nav>
				</aside>

				<aside className={'mainview'}>
					Main View
					<Route />
				</aside>
			</main>

			<main className={'mobile-layout'}>
				<nav className={'mobile-nav'}>
					<img className={'logo'} src={logo} alt={'logo'} />
					<Nav />
				</nav>
				<Route />
			</main>
		</div>
	);
}

export default Layout;

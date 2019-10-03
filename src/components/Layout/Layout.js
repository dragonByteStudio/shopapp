import React from 'react';

//style
import './layout.css';

//components
import NavDt from '../Nav/NavDt';
import NavMb from '../Nav/NavMb';
import Route from '../Route/Route';

function Layout() {
	return (
		<main className="main">
			<aside className="sidebar">
				<div className="fixed">
					<NavDt />
					<NavMb />
				</div>
			</aside>

			<aside className="content">
				<Route />
			</aside>
		</main>
	);
}

export default Layout;

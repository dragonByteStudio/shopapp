import React from 'react';
import { Link } from '@reach/router';
import { menu } from '../../utils/menu';

//svg
import logo from '../../assets/svg/logo.svg';

//style
import './nav.css';

function NavDt() {
	return (
		<div className="desktop-mode">
			<img className={'logo'} src={logo} alt={'logo'} />
			<nav className={'nav'}>
				{menu.map(type => (
					<Link to={type.link} key={type.id}>
						{type.nav}
					</Link>
				))}
			</nav>
		</div>
	);
}

export default NavDt;

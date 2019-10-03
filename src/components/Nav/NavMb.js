import React, { useState } from 'react';
import { Link } from '@reach/router';
import { menu } from '../../utils/menu';

//svg
import logo from '../../assets/svg/logo.svg';

//style
import './nav.css';

//---- Desktop ----
function NavMb() {
	const [ isOpen, setOpen ] = useState(false);

	const closeMenu = () => setOpen(!isOpen);

	return (
		<div className="mobile-mode">
			<MenuIcon onClick={() => setOpen(!isOpen)} />
			<Slider isOpen={isOpen} closeMenu={closeMenu} />
		</div>
	);
}

//---- Mobile ----
function Slider({ isOpen, closeMenu }) {
	return (
		<div>
			{isOpen && (
				<div className={'slide-menu'}>
					<img className={'logo'} src={logo} alt={'logo'} />
					<div className={'close'} onClick={closeMenu}>
						X
					</div>

					<nav className={'nav'}>
						{menu.map(type => (
							<Link to={type.link} key={type.id} onClick={closeMenu}>
								{type.nav}
							</Link>
						))}
					</nav>
				</div>
			)}
		</div>
	);
}

function MenuIcon({ onClick }) {
	return (
		<div className={'hamburger-menu'} onClick={onClick}>
			Menu ☰
		</div>
	);
}

export default NavMb;

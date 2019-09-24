import React from 'react';

//style
import '../assets/style/intro.css';
import logo from '../assets/svg/logo.svg';

function Intro() {
	return (
		<div className={'container flex-column'}>
			<img src={logo} alt={'logo'} />
			<h1 className={'text'}>ShopApp</h1>
			<div className={'button-content'}>
				<button>Login</button>
				<button>Sign Up</button>
			</div>
		</div>
	);
}

export default Intro;

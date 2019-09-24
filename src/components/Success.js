import React from 'react';

//style
import '../assets/style/success.css';

//img/logo
import logo from '../assets/svg/logo.svg';

function Success() {
	return (
		<div className={'container flex-column'}>
			<div>
				<img className={'logo'} src={logo} alt={'logo'} />
			</div>
			<div className={'welcome'}>Success!</div>
			<p className={'info'}>
				Further instruction have been sent to your email address. Please check
				your email.
			</p>
		</div>
	);
}

export default Success;

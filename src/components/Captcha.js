import React from 'react';

//style
import '../assets/style/form.css';

//img/logo
import logo from '../assets/svg/logo.svg';
import captcha from '../assets/image/captcha_placeholder.png';

function SignUp() {
	return (
		<div className={'container flex-column'}>
			<div>
				<img className={'logo'} src={logo} alt={'logo'} />
			</div>
			<h1 className={'text'}>ShopApp</h1>
			<p className={'info'}>
				To reset your password please enter your email address and captcha from
				the picture below.
			</p>
			<div className={'flex-column input-content'}>
				<input type="email" placeholder={'Your Username'} required />
			</div>

			<img className={'captcha'} src={captcha} alt={'captcha'} />

			<div className={'flex-column button-content'}>
				<button>Reset Your Password</button>
			</div>
			<p>
				Or go back to <a href="./">Sign In</a>
			</p>
		</div>
	);
}

export default SignUp;

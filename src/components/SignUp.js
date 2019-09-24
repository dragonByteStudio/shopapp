import React from 'react';

//style
import '../assets/style/form.css';
import logo from '../assets/svg/logo.svg';

function SignUp() {
	return (
		<div className={'container flex-column'}>
			<div>
				<img className={'logo'} src={logo} alt={'logo'} />
			</div>
			<h1 className={'text'}>ShopApp</h1>
			<div className={'flex-column input-content'}>
				<input type="text" placeholder={'Your Username'} required />
				<input type="email" placeholder={'Your Username'} required />
				<input type="password" placeholder={'Your Password'} required />
				<input type="password" placeholder={'Confirm Password'} required />
			</div>
			<div className={'flex-column button-content'}>
				<button>Sign Up</button>
				<button>Sign In With Gmail</button>
			</div>
			<p>
				Already have Account? <a href="./">Sign In</a>
			</p>
		</div>
	);
}

export default SignUp;

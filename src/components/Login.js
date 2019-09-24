import React from 'react';

//style
import '../assets/style/form.css';
import logo from '../assets/svg/logo.svg';

function Login() {
	return (
		<div className={'container flex-column'}>
			<div>
				<img className={'logo'} src={logo} alt={'logo'} />
			</div>
			<h1 className={'text'}>ShopApp</h1>
			<div className={'flex-column input-content'}>
				<input type="text" placeholder={'Your Username'} required />
				<input type="password" placeholder={'Your Password'} required />
			</div>
			<p>Forgot Password?</p>
			<div className={'flex-column button-content'}>
				<button>Login</button>
				<button>Sign In With Gmail</button>
			</div>
			<p>
				Need Account? <a href="./">Sign Up</a>
			</p>
		</div>
	);
}

export default Login;

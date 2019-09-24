import React from 'react';

//style
import '../assets/style/success.css';

function SignInSuccess() {
	return (
		<div className={'container flex-column'}>
			<div className={'welcome'}>
				Welcome, <strong>John!</strong>
			</div>
			<div className={'flex-column button-content'}>
				<button>Let's Get Started</button>
			</div>
		</div>
	);
}

export default SignInSuccess;

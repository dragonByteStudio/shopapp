import React from 'react';

//style
import '../assets/style/success.css';

function LoginSuccess() {
	return (
		<div className={'container flex-column'}>
			<div className={'text'}>
				Welcome Back, <strong>John!</strong>
			</div>
			<div className={'flex-column button-content'}>
				<button>Go See My List</button>
			</div>
		</div>
	);
}

export default LoginSuccess;

import React from 'react';
import ReactDOM from 'react-dom';

/* Components */
//import Intro from './components/Intro';
//import Login from './components/Login';
//import LoginSuccess from './components/LoginSuccess';
//import SignUp from './components/SignUp';
//import SignUpSuccess from './components/SignUpSuccess';
//import Loader from './components/Loader';
//import Captcha from './components/Captcha';
import Success from './components/Success';

/* Style */
// import './index.css';
import './assets/style/global.css';

import * as serviceWorker from './serviceWorker';

function App() {
	return (
		<div className={'mobile'}>
			<Success />
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

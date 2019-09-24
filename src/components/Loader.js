import React from 'react';

//style
import '../assets/style/loader.css';
import loader from '../assets/svg/loader_icon.svg';

function Loader() {
	return (
		<div className={'container flex-column'}>
			<div>
				<img className={'loader'} src={loader} alt={'loading...'} />
			</div>
			<p className={'text'}>Loading...</p>
		</div>
	);
}

export default Loader;

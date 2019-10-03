import React from 'react';
import { Router } from '@reach/router';

//page
import { Coupon, List, Settings, Stats } from '../../pages/index';

function Route() {
	return (
		<Router>
			<List path="/" />
			<Stats path="/stats" />
			<Coupon path="/coupon" />
			<Settings path="/settings" />
		</Router>
	);
}

export default Route;

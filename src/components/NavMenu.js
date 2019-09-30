import React from 'react';
import { Router, Link } from '@reach/router';

//style
import '../assets/style/navMenu.css';

//page
import { Coupon, List, Settings, Stats } from '../pages/index';

function Nav() {
	return (
		<>
			<Link to="/">List</Link>
			<Link to="/stats">Stats</Link>
			<Link to="/coupon">Coupon</Link>
			<Link to="/settings">Settings</Link>
		</>
	);
}

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

export { Route, Nav };

import React from 'react';
import { Brands, Header, Hero, NewArrival } from './components';

export default function App() {
	return (
		<div className="root-container">
			<Header />
			<Hero />
			<Brands />
			<NewArrival />
		</div>
	);
}

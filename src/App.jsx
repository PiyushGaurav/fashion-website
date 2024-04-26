import React from 'react';
import { Brands, Header, Hero, NewArrival, Sale } from './components';

export default function App() {
	return (
		<div className="root-container">
			<Header />
			<Hero />
			<Brands />
			<NewArrival />
			<Sale />
		</div>
	);
}

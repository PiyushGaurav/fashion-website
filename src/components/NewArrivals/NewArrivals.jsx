import React from 'react';
import styles from './NewArrivals.module.css';
import Category from './Category';
import arrival1 from '../../assets/arrival/arrival1.png';
import arrival2 from '../../assets/arrival/arrival2.png';
import arrival3 from '../../assets/arrival/arrival3.png';

export default function NewArrivals() {
	return (
		<div className={styles.arrival_container}>
			<h1>New arrivals</h1>
			<div className={styles.arrivals}>
				<Category imgUrl={arrival1} title={'Hoodies & Sweetshirt'} />
				<Category imgUrl={arrival2} title={'Coats & Parkas'} />
				<Category imgUrl={arrival3} title={'Tees & T-Shirt'} />
			</div>
		</div>
	);
}

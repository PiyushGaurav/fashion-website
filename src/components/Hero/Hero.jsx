import React from 'react';
import styles from './Hero.module.css';
import girl from '../../assets/girl.png';

export default function Hero() {
	return (
		<div className={styles.hero_container}>
			<div className={styles.titles_container}>
				<h1>LET'S</h1>
				<h1>EXPLORE</h1>
				<h1>UNIQUE</h1>
				<h1>CLOTHES.</h1>
				<p>Live for Influential and Innovative fashion!</p>
				<button className={styles.shop_btn}>Shop Now</button>
			</div>
			<div className={styles.hero_image_container}>
				<img src={girl} alt="" />
			</div>
		</div>
	);
}

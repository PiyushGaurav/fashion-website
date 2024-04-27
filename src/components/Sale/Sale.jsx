import React from 'react';
import styles from './Sale.module.css';
import girl from '../../assets/girl2.png';

export default function Sale() {
	return (
		<div className={styles.hero_container}>
			<div className={styles.hero_image_container}>
				<img src={girl} alt="" />
			</div>
			<div className={styles.titles_container}>
				<h1>PAYDAY</h1>
				<h1>SALE NOW</h1>
				<p>
					Spend minimal $100 get 30% off
					<br />
					voucher code for your next purchase
					<br />
					<b>1 May - 10 May 2024</b>
					<br />
					*Terms & Conditions apply
				</p>
				<button className={styles.shop_btn}>Shop Now</button>
			</div>
		</div>
	);
}

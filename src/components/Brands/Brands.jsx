import React from 'react';
import styles from './Brands.module.css';
import image1 from '../../assets/brands/brand1.png';
import image2 from '../../assets/brands/brand2.png';
import image3 from '../../assets/brands/brand3.png';
import image4 from '../../assets/brands/brand4.png';
import image5 from '../../assets/brands/brand5.png';
import image6 from '../../assets/brands/brand6.png';

export default function Brands() {
	return (
		<div className={styles.brand_container}>
			<img src={image1} alt="" />
			<img src={image2} alt="" />
			<img src={image3} alt="" />
			<img src={image4} alt="" />
			<img src={image5} alt="" />
			<img src={image6} alt="" />
		</div>
	);
}

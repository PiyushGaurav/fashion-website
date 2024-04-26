import React from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

export default function Header() {
	return (
		<div className={styles.header_container}>
			<div className={styles.logo_container}>
				<img src={logo} alt="Fashion Logo" />
				<h1 className={styles.logo_name}>Fashion</h1>
			</div>
			<nav className={styles.navbar}>
				<ul>
					<li>Catalogue</li>
					<li>Fashion</li>
					<li>Favorite</li>
					<li>Lifestyle</li>
					<button className={styles.signup}>Sign up</button>
				</ul>
			</nav>
		</div>
	);
}

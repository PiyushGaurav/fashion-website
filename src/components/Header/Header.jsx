import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

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
			<div className={styles.toggle_button} onClick={() => setIsOpen(isOpen => !isOpen)}>
				<GiHamburgerMenu size={30} color="black" />
			</div>
			{isOpen && (
				<div className={styles.mobile_navbar}>
					<ul>
						<li>Catalogue</li>
						<li>Fashion</li>
						<li>Favorite</li>
						<li>Lifestyle</li>
						<button className={styles.signup}>Sign up</button>
					</ul>
				</div>
			)}
		</div>
	);
}

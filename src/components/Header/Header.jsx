import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

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
				<div className={styles.toggle_button} onClick={() => setIsOpen(isOpen => !isOpen)}>
					{!isOpen ? <GiHamburgerMenu size={30} color="black" /> : <IoClose size={30} color="black" />}
				</div>
			</nav>

			{isOpen && (
				<div className={styles.mobile_navbar}>
					<div className={styles.toggle_button} onClick={() => setIsOpen(isOpen => !isOpen)}>
						{!isOpen ? <GiHamburgerMenu size={30} color="black" /> : <IoClose size={30} color="black" />}
					</div>
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

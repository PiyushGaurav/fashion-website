import React from 'react';
import PropTypes from 'prop-types';
import styles from './NewArrivals.module.css';
import { FaArrowRight } from 'react-icons/fa6';

function Category({ imgUrl, title }) {
	return (
		<div className={styles.category_container}>
			<div className={styles.outfitImg}>
				<img src={imgUrl} alt="" />
			</div>
			<div className={styles.action}>
				<div className={styles.details}>
					<p>{title}</p>
					<span>Explore Now!</span>
				</div>
				<FaArrowRight />
			</div>
		</div>
	);
}

Category.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string
};

export default Category;

import React from 'react';
import css from './FoodItem.module.css';

const insertCommas = (num) => num.toLocaleString('ko-KR');

const FoodItem = ({ name, description, price }) => {
	const processedPrice = insertCommas(price);

	return (
		<li>
			<h3>{name}</h3>
			<div className={css.description}>{description}</div>
			<div className={css.price}>{processedPrice}</div>
			<hr />
		</li>
	);
};

export default FoodItem;

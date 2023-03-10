import React from 'react';
import FoodForm from './FoodForm';
import css from './FoodItem.module.css';

export const insertCommas = (num) => num.toLocaleString('ko-KR');

const FoodItem = ({ id, name, description, price }) => {
	const processedPrice = insertCommas(price);

	return (
		<li className={css.food}>
			<div>
				<h3>{name}</h3>
				<div className={css.description}>{description}</div>
				<div className={css.price}>{processedPrice} 원</div>
			</div>
			<FoodForm id={id} name={name} price={price} />
		</li>
	);
};

export default FoodItem;

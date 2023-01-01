import React from 'react';
import FoodItem from './FoodItem';
import css from './FoodList.module.css';
import Card from './UI/Card';

const FoodList = ({ foodData }) => {
	const foodItems = foodData.map((item) => (
		<FoodItem
			key={item.id}
			name={item.name}
			price={item.price}
			description={item.description}
		/>
	));

	return (
		<section className={css['food-list']}>
			<Card>
				<ul>{foodItems}</ul>
			</Card>
		</section>
	);
};

export default FoodList;

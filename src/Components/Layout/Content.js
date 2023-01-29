import React, { useEffect, useState } from 'react';
import AdPhrase from '../AdPhrase';
import FoodList from '../FoodList';

const Content = () => {
	const [foodData, setFoodData] = useState([]);

	const fetchData = async () => {
		const food = [];
		const response = await fetch(
			'https://react-http-c4b25-default-rtdb.firebaseio.com/meals.json',
		);
		const data = await response.json();

		for (let key in data) {
			food.push({
				id: key,
				name: data[key].name,
				description: data[key].description,
				price: data[key].price,
			});
		}
		setFoodData(food);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<AdPhrase />
			<FoodList foodData={foodData} />
		</>
	);
};

export default Content;

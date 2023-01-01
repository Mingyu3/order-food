import React from "react";
import css from "./FoodList.module.css";
import Card from "./UI/Card";

const FoodList = ({ foodData }) => {
	return (
		<section className={css["food-list"]}>
			<Card>
				<ul>
					{foodData.map((item) => (
						<li key={item.id}>
							<h2>{item.name}</h2>
							<p>{item.description}</p>
							<p>{item.price}</p>
						</li>
					))}
				</ul>
			</Card>
		</section>
	);
};

export default FoodList;

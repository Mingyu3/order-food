import React from "react";
import css from "./AdPhrase.module.css";

const AdPhrase = () => {
	return (
		<section className={css["summary"]}>
			<h2>맛있는 음식과 빠른 배송</h2>
			<p>좋아하는 음식을 골라 주문하고 집에서 맛있는 점심, 저녁을 드세요.</p>
			<p>민스키친의 음식은 질 좋은 식재료를 이용해 충분한 경험이 있는 쉐프들이 요리합니다!</p>
		</section>
	);
};

export default AdPhrase;

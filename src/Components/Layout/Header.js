import React from "react";
import css from "./Header.module.css";
import Cart from "../Cart/Cart";
import MainImg from "../../asset/food.jpg";

function Header() {
	return (
		<>
			<header>
				<h2 className={css.title}>Min&apos;s Kitchen</h2>
				<Cart />
			</header>
			<div className={css["main-img"]}>
				<img src={MainImg} alt="food" />
			</div>
		</>
	);
}

export default Header;

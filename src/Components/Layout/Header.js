import React from 'react';
import css from './Header.module.css';
import Cart from '../Cart/Cart';
import mainImage from '../../asset/food.jpg';

function Header() {
	return (
		<>
			<header>
				<h2 className={css.title}>Mins Kitchen</h2>
				<Cart />
			</header>
			<img className={css['main-image']} src={mainImage} alt='main food' />
		</>
	);
}

export default Header;

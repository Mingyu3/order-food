import React from 'react';
import css from './Header.module.css';
import MainImg from '../../asset/food.jpg';
import CartButton from '../Cart/CartButton';

function Header({ isShownCart, onShowCart }) {
	return (
		<>
			<header>
				<h2 className={css.title}>Min&apos;s Kitchen</h2>
				<CartButton isShownCart={isShownCart} onShow={onShowCart} />
			</header>
			<div className={css['main-img']}>
				<img src={MainImg} alt='food' />
			</div>
		</>
	);
}

export default Header;

import React from 'react';
import css from './CartButton.module.css';

function CartButton({ onShow }) {
	return (
		<button className={css.button} onClick={onShow}>
			<span className='material-symbols-outlined'>shopping_cart</span>
			<span className={css['cart-amount']}>3</span>
		</button>
	);
}

export default CartButton;

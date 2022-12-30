import React from 'react';
import css from './Cart.module.css';

function Cart() {
	return (
		<button className={css.button}>
			<span className='material-symbols-outlined'>shopping_cart</span>
			<span className={css['cart-amount']}>3</span>
		</button>
	);
}

export default Cart;

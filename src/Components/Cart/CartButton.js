import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import css from './CartButton.module.css';

function CartButton({ onShow }) {
	const cartCtx = useContext(CartContext);

	return (
		<button className={css.button} onClick={onShow}>
			<span className='material-symbols-outlined'>shopping_cart</span>
			<span className={css['cart-amount']}>{cartCtx.cartState.totalItems}</span>
		</button>
	);
}

export default CartButton;

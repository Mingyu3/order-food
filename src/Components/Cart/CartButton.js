import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import css from './CartButton.module.css';

function CartButton({ isShownCart, onShow }) {
	const cartCtx = useContext(CartContext);
	const [addedItem, setAddedItem] = useState(false);
	const btnClasses = `${css.button} ${addedItem && css.shake}`;

	useEffect(() => {
		if (cartCtx.items.length === 0 || isShownCart) return;
		setAddedItem(true);

		const shake = setTimeout(() => setAddedItem(false), 400);

		return () => clearTimeout(shake);
	}, [cartCtx.items]);

	return (
		<button className={btnClasses} onClick={onShow}>
			<span className='material-symbols-outlined'>shopping_cart</span>
			<span className={css['cart-amount']}>{cartCtx.totalAmount}</span>
		</button>
	);
}

export default CartButton;

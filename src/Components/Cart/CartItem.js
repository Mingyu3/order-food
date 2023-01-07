import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import css from './CartItem.module.css';
const CartItem = ({ item }) => {
	const cartCtx = useContext(CartContext);

	const cartItemAddHandler = () => cartCtx.addItem({ ...item, amount: 1 });

	return (
		<li key={item.id} className={css.food}>
			<div>
				<h3>{item.name}</h3>
				<div className={css['detail']}>
					<span className={css.price}>{item.price}원</span>
					<span className={css.amount}>x{item.amount}</span>
				</div>
			</div>
			<div className={css.buttons}>
				<button onClick={cartItemAddHandler}>+</button>
				<button>-</button>
			</div>
		</li>
	);
};

export default CartItem;

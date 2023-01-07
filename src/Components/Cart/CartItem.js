import React, { useState, useContext } from 'react';
import CartContext from '../../store/cart-context';
import { insertCommas } from '../FoodItem';
import css from './CartItem.module.css';

const CartItem = ({ item }) => {
	const [changedItem, setChangedItem] = useState(false);
	const cartCtx = useContext(CartContext);
	const processedPrice = insertCommas(item.price);

	const amountClasses = `${css.amount} ${changedItem && css.shake}`;

	const cartItemAddHandler = () => {
		setChangedItem(true);
		setTimeout(() => setChangedItem(false), 300);
		return cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = () => {
		setChangedItem(true);
		setTimeout(() => setChangedItem(false), 300);
		return cartCtx.removeItem({ id: item.id });
	};

	return (
		<li key={item.id} className={css.food}>
			<div>
				<h3>{item.name}</h3>
				<div className={css['detail']}>
					<span className={css.price}>{processedPrice}원</span>
					<span className={amountClasses}>x{item.amount}</span>
				</div>
			</div>
			<div className={css.buttons}>
				<button onClick={cartItemAddHandler}>+</button>
				<button onClick={cartItemRemoveHandler}>-</button>
			</div>
		</li>
	);
};

export default CartItem;

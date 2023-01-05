import React from 'react';
import css from './CartItem.module.css';
const CartItem = ({ id, name, price, amount }) => {
	return (
		<li key={id} className={css.food}>
			<div>
				<h3>{name}</h3>
				<div className={css['detail']}>
					<span className={css.price}>{price}원</span>
					<span className={css.amount}>x{amount}</span>
				</div>
			</div>
			<div className={css.buttons}>
				<button>+</button>
				<button>-</button>
			</div>
		</li>
	);
};

export default CartItem;

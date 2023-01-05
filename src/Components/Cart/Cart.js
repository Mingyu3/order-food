import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import css from './Cart.module.css';

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext);
	const itemList = cartCtx.cartState.items.map((item) => (
		<li key={item.id} className={css['each-food']}>
			<span>{item.name}</span>
			<span>{item.price}원</span>
		</li>
	));

	return (
		<Modal onHide={onHideCart}>
			<ul className={css.food}>{itemList}</ul>
			<div className={css.total}>
				<span>총합</span>
				<span>{cartCtx.cartState.totalPrice}원</span>
			</div>
			<div className={css.buttons}>
				<button className={css['order-btn']}>주문</button>
				<button className={css['close-btn']} onClick={onHideCart}>
					취소
				</button>
			</div>
		</Modal>
	);
};

export default Cart;

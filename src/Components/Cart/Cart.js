import React from 'react';
import Modal from '../UI/Modal';
import css from './Cart.module.css';

const Cart = ({ onHideCart }) => {
	return (
		<Modal onHide={onHideCart}>
			<ul className={css.food}>
				<li className={css['each-food']}>
					<span>name</span>
					<span>원</span>
				</li>
			</ul>
			<div className={css.total}>
				<span>총합</span>
				<span>원</span>
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

import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import css from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext);

	return (
		<Modal onHide={onHideCart}>
			<ul className={css.food}>
				{cartCtx.cartState.items.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
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

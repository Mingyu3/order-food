import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import { insertCommas } from '../FoodItem';
import Modal from '../UI/Modal';
import css from './Cart.module.css';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
	const cartCtx = useContext(CartContext);
	const processedPrice = insertCommas(cartCtx.totalPrice);

	return (
		<Modal onHide={onHideCart}>
			<ul className={css.food}>
				{cartCtx.items.length ? (
					cartCtx.items.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<h3>장바구니가 비어 있어요.</h3>
				)}
			</ul>
			<div className={css.total}>
				<span>총합</span>
				<span>{processedPrice}원</span>
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

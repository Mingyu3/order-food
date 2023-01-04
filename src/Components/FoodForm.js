import React, { useContext, useRef } from 'react';
import CartContext from '../store/cart-context';
import css from './FoodForm.module.css';

const FoodForm = ({ name, price }) => {
	const cartCtx = useContext(CartContext);
	const amountRef = useRef(0);

	const submitHandler = (e) => {
		e.preventDefault();
		const enteredAmount = +amountRef.current.value;

		cartCtx.addItem({ name: name, price: price, amount: enteredAmount });
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<label className={css['amount-label']} htmlFor='amount'>
					수량
				</label>
				<input
					ref={amountRef}
					className={css.input}
					type='number'
					id='amount'
					min='1'
					max='10'
					step='1'
					defaultValue='1'
				/>
			</div>
			<button className={css['add-button']}>ADD</button>
		</form>
	);
};

export default FoodForm;

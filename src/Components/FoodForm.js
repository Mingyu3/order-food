import React from 'react';
import css from './FoodForm.module.css';

const FoodForm = () => {
	return (
		<form>
			<div>
				<label className={css['amount-label']} htmlFor='amount'>
					수량
				</label>
				<input
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

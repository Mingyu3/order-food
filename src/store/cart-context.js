import React, { useReducer } from 'react';

const CartContext = React.createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			return {
				items: state.items.concat(action.item),
				totalItems: state.totalItems + action.item.amount,
				totalPrice: state.totalPrice + action.item.price * action.item.amount,
			};
		default:
			return state;
	}
};

const defaultCartState = {
	items: [],
	totalItems: 0,
	totalPrice: 0,
};

export const ContextProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCart({ type: 'ADD', item: item });
	};

	return (
		<CartContext.Provider
			value={{
				addItem: addItemToCartHandler,
				items: cartState,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;

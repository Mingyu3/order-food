import React, { useReducer } from 'react';

const CartContext = React.createContext();

const cartReducer = (state, action) => {
	let updatedItems;

	switch (action.type) {
		case 'ADD':
			{
				const existingFoodIndex = state.items.findIndex(
					(item) => item.id === action.item.id,
				);
				const existingFood = state.items[existingFoodIndex];
				if (existingFood) {
					const updatedItem = {
						...existingFood,
						amount: existingFood.amount + action.item.amount,
					};
					updatedItems = [...state.items];
					updatedItems[existingFoodIndex] = updatedItem;
				} else {
					updatedItems = state.items.concat(action.item);
				}
			}
			return {
				items: updatedItems,
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
				cartState: cartState,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;

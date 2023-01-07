import React, { useReducer } from 'react';

const CartContext = React.createContext();

const cartReducer = (state, action) => {
	const existingFoodIndex = state.items.findIndex(
		(element) => element.id === action.item.id,
	);
	const existingFood = state.items[existingFoodIndex];
	let updatedItems;

	switch (action.type) {
		case 'ADD':
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

			return {
				items: updatedItems,
				totalAmount: state.totalAmount + action.item.amount,
				totalPrice: state.totalPrice + action.item.price * action.item.amount,
			};

		case 'REMOVE':
			updatedItems = [...state.items];

			if (existingFood.amount === 1) updatedItems.splice(existingFoodIndex, 1);
			else {
				updatedItems[existingFoodIndex].amount--;
			}

			return {
				items: updatedItems,
				totalAmount: state.totalAmount - 1,
				totalPrice: state.totalPrice - existingFood.price,
			};
		default:
			return state;
	}
};

const defaultCartState = {
	items: [],
	totalAmount: 0,
	totalPrice: 0,
};

export const ContextProvider = (props) => {
	const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCart({ type: 'ADD', item: item });
	};

	const removeItemFromCartHandler = (item) => {
		dispatchCart({ type: 'REMOVE', item: item });
	};

	return (
		<CartContext.Provider
			value={{
				addItem: addItemToCartHandler,
				removeItem: removeItemFromCartHandler,
				cartState: cartState,
			}}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartContext;

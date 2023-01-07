import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { ContextProvider } from './store/cart-context';

function App() {
	const [isShownCart, setIsShownCart] = useState(false);

	const showCart = () => {
		setIsShownCart(true);
	};

	const hideCart = () => {
		setIsShownCart(false);
	};

	return (
		<ContextProvider>
			{isShownCart && <Cart onHideCart={hideCart} />}
			<Header isShownCart={isShownCart} onShowCart={showCart} />
			<main>
				<Content />
			</main>
		</ContextProvider>
	);
}

export default App;

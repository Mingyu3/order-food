import React, { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Content from './Components/Layout/Content';
import Header from './Components/Layout/Header';
import { ContextProvider } from './store/cart-context';

function App() {
	const [isShowCart, setIsShowCart] = useState(false);

	const showCart = () => {
		setIsShowCart(true);
	};

	const hideCart = () => {
		setIsShowCart(false);
	};

	return (
		<ContextProvider>
			{isShowCart && <Cart onHideCart={hideCart} />}
			<Header onShowCart={showCart} />
			<main>
				<Content />
			</main>
		</ContextProvider>
	);
}

export default App;

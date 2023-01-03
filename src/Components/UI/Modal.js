import React from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

const Backdrop = ({ onHide }) => {
	return <div className={css.backdrop} onClick={onHide}></div>;
};

const Overlay = (props) => {
	return <div className={css.modal}>{props.children}</div>;
};

const portalOverlay = document.getElementById('overlay');

const Modal = ({ children, onHide }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onHide={onHide} />, portalOverlay)}
			{ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalOverlay)}
		</>
	);
};

export default Modal;

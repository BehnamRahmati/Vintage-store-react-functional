import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from "./context/Products"
import CartProvider from "./context/Cart";
ReactDOM.render(
  <ProductProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductProvider>,
  document.getElementById('root')
);

import React, { useState, useEffect } from 'react'
// ======================
export const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [cartItem, setCartItem] = useState(0)
  const [total, setTotal] = useState(0)
  // ============================================
  useEffect(() => {
    // ========================
    const newCartItem = [...cart].reduce((acc, cartItem) => {
      return acc += cartItem.amount
    }, 0)
    setCartItem(newCartItem);
    // ========================
    const newTotal = [...cart].reduce((total, cartItem) => {
      return total += cartItem.price * cartItem.amount
    }, 0)
    setTotal(parseFloat(newTotal.toFixed(2)));
    // ===========================
  }, [cart])
  // ======================================================================================
  const increaseAmount = (id) => {
    setCart([...cart].map(item => {
      return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item }
    }))
  }
  // ======================================================================================
  const removeItem = (id) => {
    setCart([...cart].filter(item => item.id !== id))
  }

  // ======================================================================================

  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      removeItem(id)
      return
    } else {
      setCart([...cart].map(item => {
        return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item }
      }))
    }
  }
  // ======================================================================================

  const clearCart = () => {
    setCart([])
  }
  // ======================================================================================

  const addToCart = (product) => {
    const { id, image: { url }, title, price } = product;
    const item = [...cart].find(item => item.id === id);
    if (item) {
      increaseAmount(id);
      return;
    } else {
      const newItem = { id, image: url, title, price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  }

  // ====================================================================================
  return (
    <CartContext.Provider value={{ cart, cartItem, total, removeItem, increaseAmount, decreaseAmount, clearCart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

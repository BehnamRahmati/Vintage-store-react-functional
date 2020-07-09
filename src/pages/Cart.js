import React, { useContext } from 'react'
import { CartContext } from "../context/Cart"
import EmptyCart from "../components/cart/EmptyCart"
import CartItem from '../components/cart/CartItem'
import CartLink from "../components/cart/CartLink"
const Cart = () => {
  const { cart, total } = useContext(CartContext)
  if (cart.length === 0) return <EmptyCart />
  return (
    <main className="container py-5">
      <section className="row">
        <div className="col-12 col-sm-10 mx-auto col-md-8 text-center ">
          {cart.map(item => <CartItem key={item.id} {...item} />)}
          <h1 className="text-capitalize py-2">total : $ {total} </h1>
          <CartLink />
        </div>
      </section>
    </main>
  )
}

export default Cart

import React from 'react'
import { FaAngleUp, FaAngleDown } from "react-icons/fa"
import { CartContext } from "../../context/Cart"
const CartItem = ({ image, title, price, id, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(CartContext)
  return (
    <article className="card my-2">
      <main className="row">
        <section className="col-3 d-flex justify-content-center align-items-center">
          <img className="img-fluid" src={image} alt={title} />
        </section>
        <section className="col-7 d-flex flex-column justify-content-center align-items-start">
          <p className="text-capitalize mb-1">{title}</p>
          <h5 className="text-capitalize">$ {price}</h5>
          <button type="button" className="text-muted btn" onClick={() => removeItem(id)}>r e m o v e</button>
        </section>
        <section className="col-2 d-flex flex-column justify-content-center align-items-center">
          <button type="button" className="text-muted btn" onClick={() => increaseAmount(id)}><FaAngleUp className="text-info" /></button>
          <p className="m-0">{amount}</p>
          <button type="button" className="text-muted btn btn-sm" onClick={() => decreaseAmount(id, amount)}><FaAngleDown className="text-info" /></button>
        </section>
      </main>
    </article>
  )
}

export default CartItem

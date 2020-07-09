import React from 'react'
import { Link } from "react-router-dom"
const EmptyCart = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="col-10 mx-auto text-center py-5">
          <h2 className="text-capitalize display-5 text-warning">your cart is empty !!!</h2>
          <Link to="/products" className="text-capitalize btn btn-outline-primary px-5 my-3">fill it</Link>
        </div>
      </div>
    </section>
  )
}

export default EmptyCart

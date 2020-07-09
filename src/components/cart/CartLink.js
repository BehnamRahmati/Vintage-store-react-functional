import React from 'react'
import { Link } from "react-router-dom"
const CartLink = () => {
  let user = false;
  return (
    <div>
      {(user) ? <Link to="/checkout" className="btn btn-outline-primary d-block text-capitalize">checkout</Link>
        : <Link to="/login" className="btn btn-outline-primary d-block text-capitalize">login</Link>}
    </div>
  )
}

export default CartLink

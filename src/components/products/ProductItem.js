import React from 'react'
import { Link } from "react-router-dom"
const ProductItem = ({ title, price, image: { url }, id }) => {
  return (
    <section className="col-10 mx-auto col-sm-6 col-md-4 col-lg-3 py-3">
      <article className="card p-3 shadow-sm">
        <img src={url} alt={title} className="card-img-top" />
        <section className="py-2" style={{ height: "7rem" }}>
          <h6 className="text-capitalize">{title}</h6>
          <h6 className="text-capitalize text-info">$ {price}</h6>
          <Link className="btn btn-sm btn-outline-success rounded-0 text-capitalize" to={`/products/${id}`}>details</Link>
        </section>
      </article>
    </section>
  )
}

export default ProductItem

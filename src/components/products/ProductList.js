import React from 'react'
import Product from "./ProductItem"
const ProductList = ({ title, products }) => {
  return (
    <section className="container p-0">
      <h1 className="text-center py-5 display-4 text-capitalize">{title}</h1>
      <div className="row">
        {
          products.map(product => <Product key={product.id} {...product} />)
        }
      </div>

    </section>
  )
}

export default ProductList

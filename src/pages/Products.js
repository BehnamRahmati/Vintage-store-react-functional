import React, { useContext } from 'react'
import { ProductContext } from "../context/Products"
import Loading from "../components/Loading"
import ProductList from "../components/products/ProductList"
const Products = () => {
  const { loading, products } = useContext(ProductContext)
  if (loading) return <Loading />
  return (
    <main>
      <ProductList title="our products" products={products} />
    </main>
  )
}

export default Products

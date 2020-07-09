import React, { useContext } from 'react'
import Loading from "../Loading"
import ProductList from "./ProductList"
import { ProductContext } from "../../context/Products"
const FeaturedProducts = () => {
  const { featured, loading } = useContext(ProductContext)
  if (loading) return <Loading />
  return (
    <div>
      <ProductList title="featured products" products={featured} />
    </div>
  )
}

export default FeaturedProducts

import React, { useState, useEffect } from 'react'
import axios from "axios"
import url from "../utilities/URL"
import { featuredProduct } from "../utilities/helpers"
const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  // setting state
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([])

  // getting data from api
  useEffect(() => {
    setLoading(true);
    try {
      axios.get(`${url}/products`).then(response => {
        const featured = featuredProduct(response.data);
        setProducts(response.data);
        setFeatured(featured);
        setLoading(false);
      })
    } catch (error) {
      console.log(error);
    }

    return () => { }
  }, [])
  return (
    <ProductContext.Provider value={{ loading, products, featured }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }

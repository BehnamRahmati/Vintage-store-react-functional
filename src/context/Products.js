import React, { useState, useEffect } from 'react'
import axios from "axios"
import url from "../utilities/URL"
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
        setProducts(response.data);
        setFeatured(() => response.data.filter(data => data.featured === true));
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

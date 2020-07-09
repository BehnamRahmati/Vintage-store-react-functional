import React, { useContext } from 'react'
import Hero from "../components/Hero"
import { Link } from "react-router-dom"
import { ProductContext } from "../context/Products"
const Home = () => {
  const { featured } = useContext(ProductContext)
  return (
    <main>
      <Hero>
        <h1 className="display-3 text-capitalize text-warning">think, code, deploy</h1>
        <h5 className="display-5 text-capitalize text-warning">embrace your choices - we do</h5>
        <div>
          <Link className="text-capitalize btn btn-outline-warning px-5 my-3" to="/products">our products</Link>
        </div>
      </Hero>
    </main>
  )
}

export default Home

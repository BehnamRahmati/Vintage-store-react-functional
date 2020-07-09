import React, { useContext } from 'react'
import { useParams, useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { ProductContext } from "../context/Products"
import { CartContext } from "../context/Cart"
const ProductDetials = () => {
  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)
  const { id } = useParams();
  const history = useHistory();
  const product = products.find(item => item.id === parseInt(id))
  if (products.length === 0) {
    return <Loading />
  } else {
    const { image, title, price, description } = product
    return (
      <main className="container p-0 py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6">
            <img src={image.url} alt={title} className="img-fluid" />
          </div>
          <div className="col-10 mx-auto col-md-6">
            <p className="text-capitalize " style={{ fontSize: "1.8rem" }}>{title}</p>
            <p className="text-capitalize text-info" style={{ fontSize: "1.5rem" }}>$ {price}</p>
            <p className="text-justify">{description}</p>
            <button type="button" className="btn btn-outline-warning rounded-0 shadow text-capitalize d-block w-100" onClick={() => { addToCart(product); history.push("/cart") }}>add to cart</button>
          </div>
        </div>
      </main>
    )
  }

}

export default ProductDetials

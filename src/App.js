import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
// ======================== pages
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import Products from "./pages/Products"
import ProductsDetails from "./pages/ProductDetails"
import Error from "./pages/Error"
// ===================================== components
import Header from "./components/Header"
// ===============================================
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductsDetails />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

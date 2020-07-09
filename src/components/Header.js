import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import { FaUserAlt, FaCartPlus } from "react-icons/fa"
import logo from "../assets/logo.svg"
// ========================================
const Header = () => {
  return (
    <header>
      <TopHeaderWrapper className="d-none d-md-block">
        <div className="container p-0 py-2">
          <div className="row ">
            <div className="col-6 d-flex align-items-center">
              <Link to="/login" className="btn btn-sm btn-outline-success text-capitalize m-0">register / login <FaUserAlt className="mb-1" /> </Link>
              <div className="cartItem ml-3">
                <Link to="/cart" className="text-capitalize m-0 text-dark "><FaCartPlus className="mb-1" /></Link>
                <span className="cartItemCount bg-primary text-light text-center rounded-circle">9</span>
              </div>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-end">
              <Link style={fontFamily} className="text-decoration-none text-capitalize" to="/"><h3 className="display-6 text-dark ">company</h3></Link>
              <Link to="/"><img height="50" src={logo} alt="company" /></Link>
            </div>
          </div>
        </div>
      </TopHeaderWrapper>
      <div className="container p-0">
        <hr className="m-0" />
      </div>
      <NavbarWrapper className="container p-0 py-3">
        <ul className="row my-auto">
          <div className="col-12 d-flex align-items-center ">
            <li>
              <Link className="text-capitalize m-0 mx-2 text-decoration-none text-dark" to="/">home</Link>
            </li>
            <li>
              <Link className="text-capitalize m-0 mx-2 text-decoration-none text-dark" to="/about">about</Link>
            </li>
            <li>
              <Link className="text-capitalize m-0 mx-2 text-decoration-none text-dark" to="/products">products</Link>
            </li>
          </div>
        </ul>
      </NavbarWrapper>
    </header>
  )
}

const TopHeaderWrapper = styled.div`
display:flex;
align-items: center;
justify-content:center;
.cartItem {
  position: relative;
  a {
    text-decoration: none !important;
    font-size: 1.5rem;
  }
  .cartItemCount {
    position: absolute;
    top: -8px;
    right: -22px;
    width: 1.4rem;
    height:1.3rem;
    font-size: 0.9rem;
  }
}
`
const NavbarWrapper = styled.nav`
display: flex;
align-items: center;
ul {
  list-style-type: none;
}
`
const fontFamily = {
  fontFamily: "Righteous"
}
export default Header

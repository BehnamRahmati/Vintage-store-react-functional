import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
const Error = () => {
  return (
    <main>
      <ErrorWrapper>
        <div className="alert alert-warning p-5 text-center" role="alert">
          <h1 className="display-1">404</h1>
          <p className="text-capitalize">unfortunatly your requested page does not exist any more!</p>
          <Link to="/" className="btn btn-outline-secondary text-capitalize"> return to home </Link>
        </div>
      </ErrorWrapper>
    </main>
  )
}

const ErrorWrapper = styled.section`
height: 30rem;
background-color: #eee;
display: flex;
align-items: center;
justify-content: center;
`



export default Error

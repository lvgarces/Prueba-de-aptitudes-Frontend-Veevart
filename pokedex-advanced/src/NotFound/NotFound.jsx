import React from 'react'
import img from "./pikasad.png"
import './NotFound.css'

const NotFound = ({pokemon}) => {
  return (
    <div className="o-not">
        <img src={img} alt="" />
        <h2>Sorry we couldn't find "{pokemon}".</h2>
    </div>
  )
}

export default NotFound
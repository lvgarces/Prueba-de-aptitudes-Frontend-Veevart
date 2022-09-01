import React from 'react'
import {motion} from 'framer-motion'
import img from "./pikasad.png"
import './NotFound.css'

const NotFound = ({pokemon}) => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="o-not">
        <img src={img} alt="" />
        <h2>Sorry we couldn't find "{pokemon}".</h2>
    </motion.div>
  )
}

export default NotFound
import React from 'react'
import { motion } from "framer-motion"
import './ButtonM.css'

const ButtonM = () => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="button" class="btn btn-warning o-btn">Moves info</motion.button>
  )
}

export default ButtonM;
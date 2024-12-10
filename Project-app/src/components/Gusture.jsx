import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
function Gusture() {
  return (
    <div className=' flex justify-center mt-10' >
        <motion.button
         whileHover={{ scale: 2 ,color:"yellow",backgroundColor:"green", border:"none"}}
         whileTap={{ scale: 1, color:"yellow", backgroundColor:"black", border:"none" }}
        className='btn btn-danger' >Submit</motion.button>
    </div>
  )
}

export default Gusture
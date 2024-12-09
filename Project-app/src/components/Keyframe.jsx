import React from 'react'
import { motion } from "framer-motion";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
function Keyframe() {
    return (
        <div className="container bg-light">
            <div className="row">
                <div className="col-4 text-center pt-3 bg-gray-600 text-white">
                    <motion.div className="box" animate={{
                        x: 100,

                        transition: { duration: 3, }
                    }}>

                    </motion.div>
                </div>
                <div className="col-4 text-center p-3 bg-red-700 text-white">
                    <motion.div className="box" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 4, scale: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      ease: [0, 0.71, 0.2, 1.01]
                    }}
                     >

                    </motion.div>
                </div>
                <div className="col-4 text-center p-3 bg-warning text-white">

                </div>
            </div>
        </div>
    )
}
export default Keyframe
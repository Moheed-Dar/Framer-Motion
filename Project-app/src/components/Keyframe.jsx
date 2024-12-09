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
                        x: 300,
                    }}
                    transition={{
                        duration:1,
                        repeat: Infinity,
                        repeatDelay: 1,
                    }}
                    >
                    </motion.div>
                </div>
                <div className="col-4 text-center p-3 bg-red-700 text-white">
                    <motion.div className="box"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 4, scale: 1 }}
                        transition={{
                            duration: 2,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                            repeat: Infinity,
                            repeatDelay: 1,
                        }}
                    >
                    </motion.div>
                </div>
                <div className="col-4 text-center ps-4 pt-4 bg-warning text-white">
                    <motion.div className="box1"
                        animate={{
                            x:100,
                            y:5,
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 180, 180, 0],
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0,
                            repeatType: "reverse",
                        }}
                    >
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Keyframe
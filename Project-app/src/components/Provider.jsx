import React from 'react';
import { motion } from "motion/react";

function Provider() {
  return (
    <div className="mt-1  pe-4 ps-4">
      <div className="w-full  h-2 rounded bg-white ">
        <motion.div animate={{
          width: "100%",
        }}
          transition={{
            duration: 10,
          }}
          className="w-1/12  h-full rounded bg-blue-500 "></motion.div>
      </div>
    </div>
  )
}

export default Provider;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "motion/react";
function Enter() {
    const [remove, setRemove] = useState(false);
    useEffect(() => {
        setTimeout(() => setRemove(true), 7000);
    });
    return (
        <div>
            <h2 className="text-3xl mb-4 mt-1" >Animation 2</h2>
            <div className="bg-white w-10 h-10  mx-auto mt-7 rounded-full">
               <AnimatePresence>
               {remove === false && (
                    <motion.div
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 9, y: 26 }}
                        transition={{
                            duration: 2,
                        }}
                        exit={{ opacity: 0, y: 400 }}
                        className="bg-green-600 h-20 w-20  rounded-full ">
                        <button className='pt-5 text-2xl'>click</button>
                    </motion.div>
                )}
               </AnimatePresence>
            </div>
        </div>
    )
}
export default Enter
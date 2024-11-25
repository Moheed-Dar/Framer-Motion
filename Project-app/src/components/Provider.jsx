import { motion } from "motion/react";
function Provider() {
  return (
    <div className="mt-1 mb-3  pe-4 ps-4">
      <h1 className='text-3xl '>Animation  1</h1>
      <div className="w-full  h-2 rounded bg-white ">
        <motion.div animate={{
          width: "100%",
        }}
          transition={{
            duration: 4,
          }}
          className="w-1/12  h-full rounded bg-blue-500 "></motion.div>
      </div>
    </div>
  )
}
export default Provider;
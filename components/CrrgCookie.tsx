'use client'
import { motion } from "framer-motion"
import { useState } from "react";

const CrrgCookie = () => {
    const [showCookie, setShowCookie] = useState(true)
    const handleCookie = () => {
        setShowCookie(false)
    }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
        onClick={() => handleCookie()}
        className={`${
          showCookie ? "flex" : "hidden"
        } fixed left-32 bottom-48 w-[20%] h-auto p-4 text-xl text-crrg bg-black border-crrg rounded-2xl flex-col justify-around items-center z-50`}
      >
        <p>
          This website uses cookies to enhance user experience and to optomise
          response times.
        </p>
        <button className=" text-white border border-crrg rounded-md p-2 mt-2 hover:text-crrg hover:border-white transition-all duration-200">
          OK
        </button>
      </motion.div>
    </>
  )
}

export default CrrgCookie;

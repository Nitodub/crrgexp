"use client"
import { useState } from "react"
import Image from "next/image"
import rideouts from "./gallery.ts"
import { GiCancel } from "react-icons/gi"
import { motion } from "framer-motion"

let bigPicture = rideouts[1].loc

const Page = () => {
  const [showPic, setShowPic] = useState(false);

  const handleClick = (i: number) => {
    bigPicture = rideouts[i].loc;
    setShowPic(true);
  };

  const handleShowPic = () => {
    showPic ? setShowPic(false) : setShowPic(true);
  }

  const classInput = showPic ? 'w-[95%] m-auto fixed top-0 bottom-0 left-0 right-0 h-[95%]' : 'hidden'

  return (
    <div className="w-[full] bg-black m-0 p-0">
      <motion.h1
        initial={{ opacity: 0, x: -150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
        className="text-crrg text-4xl text-center"
      >
        CRRG Gallery
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
        className="text-crrg text-4xl text-center mt-4 mb-4"
      >
        Photos from our Latest Trips
      </motion.h1>

      <div className="w-[95%] mt-0 mb-0 mx-auto pt-4 gap-4 flex justify-around flex-wrap">
        {rideouts.map((pic, i) => (
          <li
            className="sm:w-[100%] md:w-[30%] min-w-[350px] list-none cursor-pointer hover:rotate-3 transition-transform duration-200"
            key={i}
            onClick={() => handleClick(i)}
          >
            <Image
              className="w-full mw-[300px] h-auto object-cover"
              src={pic.loc}
              alt="A nice Picture"
            />
          </li>
        ))}
      </div>
      <div
        onClick={() => handleShowPic()}
        className={`h-[80%] m-auto flex flex-row items-center justify-around ${classInput}`}
      >
        <div>
          <GiCancel
            onClick={() => handleShowPic()}
            className="fixed top-[15%] left-[90%] text-crrg text-4xl cursor-pointer z-20"
          />
          <Image
            className="max-w-[100%] max-h-[100%] top-0 object-contain bg-gradient-to-r from-green-200 via-white to-orange-200 border-crrg border-4 rounded-md border-solid z-10 "
            src={bigPicture}
            alt="A very big nice picture"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;

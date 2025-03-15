'use client'
import Image from "next/image"
import Badge from '@/public/30Badge.png'
import Peter from '@/public/Petes30th.png'
import Camera from '@/public/G80M.png'
import Link from "next/link"
import { motion } from "framer-motion"

const MidSection = () => {
    return (
      <div className="w-full flex sm: flex-col lg:flex-row justify-between bg-[url('../public/FourBikesLeap.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
        {/* Left Box  */}
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.5 }}
          className="sm:w-full lg:w-1/2 flex flex-col items-center"
        >
          <h1 className="text-white text-3xl mt-10">CRRG Latest News</h1>
          <Image
            className="mt-5 mb-5 sm:w-[20%] lg:w-[15%]"
            src={Badge}
            alt="30 Rideout Badge"
            width={200}
          />
          <h2 className="text-white sm:text-3xl lg:text-2xl mb-4">
            Peter Makes it to 30
          </h2>
          <Image
            className="sm:w-[85%] lg:w-[45%] mb-10 rounded-lg"
            src={Peter}
            alt="Peters 30th Presentation"
            width={350}
          />
        </motion.div>

        {/* Right Box  */}
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.5 }}
          className="sm:w-full lg:w-1/2 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center justify-center">
            <Link
              className="text-white text-3xl underlineAnimation mb-4"
              href="/Gallery"
            >
              Visit our Photo Gallery
            </Link>
            <Image
              className="w-[90%]"
              src={Camera}
              alt="Lumix Camera"
              width={350}
            />
          </div>
        </motion.div>
      </div>
    );
}

export default MidSection
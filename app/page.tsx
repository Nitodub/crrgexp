'use client'
import MidSection from '@/components/MidSection'
import Alan from '@/public/AlanPeek.png'
import Image from 'next/image'
import Lightning from '@/public/RedFlash3.png'
import {motion} from "framer-motion"
import AnimatedCounter from '@/components/AnimatedCounter'

export default function Home() {
  return (
    <>
      <div className="w-full h-[80vh] bg-heroBG bg-no-repeat bg-cover bg-center bg-fixed overflow-hidden">
        <Image
          src={Lightning}
          alt="Lightning bolt"
          className="absolute top-[35%] left-[25%] z-50 animate-lightning"
        />
        <motion.h1
          initial={{ opacity: 0, x: -250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
          className="text-center text-crrg sm:text-2xl md:text-3xl xl:text-6xl pt-10 font-bold"
        >
          Welcome to the Country Roads Riders Guide
        </motion.h1>

        {/* Top Box */}
        <div className="w-full h-full flex sm:flex-col lg:flex-row">
          {/* Left Box */}
          <div className="sm:w-full lg:w-2/5">
            <Image
              src={Alan}
              alt="Alan Having a Look"
              className="absolute bottom-[100] hidden sm:block sm:opacity-65 sm:w-[40%] sm:left-[45] lg:opacity-100 lg:left-[20] lg:w-[20%]"
            />
          </div>
          {/* Right Box */}
          <div className="sm:w-full sm:mt-6 lg:w-3/5 text-white text-2xl flex flex-col items-center justify-center">
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", delay: 0.25 }}
              className="w-4/5 mb-10"
            >
              The Country Roads Riders Guide is a blog written by a small group
              of motorcycle touring enthusiasts who regularly tour the beautiful
              Irish countryside and share the occasional coffee or breakfast.
              Their motorcycles, like their owners, come in all shapes and sizes
              and are mostly old and in need of slight repair.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: "50vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
              className="w-4/5 mb-2"
            >
              This site is run by enthusiasts who provide material and
              photographs for trip reports and bike reviews. The guide is
              intended to give a totally subjective account of Ireland's
              picturesque locations for bike touring to fellow bikers who like a
              good motorcycle based read. We strongly urge you to browse our
              guide, but most of all, visit Ireland and bike safe.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white flex items-center justify-around py-5">
        <div className="border-crrg border p-5 text-white text-3xl w-32 text-center rounded-xl bg-gradient-to-bl from-green-700 to-black">
          <AnimatedCounter from={0} to={397} />
          <h1 className="text-lg">Spins</h1>
        </div>
        <div className="border-crrg border p-5 text-white text-3xl w-32 text-center rounded-xl bg-gradient-to-bl from-white to-black">
          <AnimatedCounter from={0} to={40} />k
          <h1 className="text-lg">Miles</h1>
        </div>
        <div className="border-crrg border p-5 text-white text-3xl w-32 text-center rounded-xl bg-gradient-to-bl from-orange-700 to-black">
          <AnimatedCounter from={0} to={15} />
          <h1 className="text-lg">Years</h1>
        </div>
      </div>
      <MidSection />
    </>
  );
}

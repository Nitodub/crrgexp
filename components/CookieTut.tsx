import Image from "next/image"
import archivePics from "../app/Archives/archiveList"

const CookieTut = () => {
  const reversedPics = [...archivePics].reverse()
  return (
    <>
      <h1>Photos Go Hereunder</h1>
      <div className="w-full flex flex-wrap gap-4 justify-around items-center">
        {reversedPics.map((pic, i) => (
          <li key={i} className="list-none w-[30%]">
            <Image 
              className="w-full min-w-[350] rounded-lg"
              src={pic.loc}
              width={350}
              alt="Picture from the Archives"
            />
          </li>
        ))}
      </div>
    </>
  );
};

export default CookieTut;


// "use client";
// import { GiCancel } from "react-icons/gi";
// import archivePics from "./archiveList";
// import Image from "next/image";
// import { useState } from "react";
// import { motion } from "framer-motion";

// let bigPic = archivePics[1].loc;

// const Page = () => {
//   const [bigPicVisible, setBigPicVisible] = useState(false);

//   const archivePicHandler = (i: number) => {
//     bigPic = archivePics[i].loc;
//     setBigPicVisible(true);
//   };

//   const handleBigPic = () => {
//     bigPicVisible ? setBigPicVisible(false) : setBigPicVisible(true);
//   };

//   return (
//     <div className="w-full m-0 p-0 bg-black text-white">
//       <motion.h1
//         initial={{ opacity: 0, x: -150 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
//         className="text-crrg text-4xl text-center"
//       >
//         CRRG Random Archive Pictures and Fake News
//       </motion.h1>
//       <motion.h1
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
//         className="text-crrg text-4xl text-center mb-10 mt-3"
//       >
//         Updated Regularly
//       </motion.h1>

//       {/* Archive Gallery */}
//       <div className="w-full m-4">
//         <ul className="w-full grid grid-cols-[repeat(auto-fill,minmax(500px,1fr))] gap-4">
//           {archivePics.map((pic, i) => (
//             <motion.li
//               initial={{ opacity: 0, x: -200 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.75 }}
//               key={i}
//               onClick={() => archivePicHandler(i)}
//             >
//               <Image
//                 className={`w-[95%] rounded-lg ${
//                   i % 2 ? "hover:rotate-3" : "hover:-rotate-3"
//                 } hover:scale-95 transition-transform duration-300 cursor-pointer`}
//                 src={pic.loc}
//                 alt="A Nice Archive Picture"
//               />
//             </motion.li>
//           ))}
//         </ul>
//       </div>

//       {/* Expanded Picture  */}
//       <div
//         onClick={() => handleBigPic()}
//         className={`${
//           bigPicVisible ? "flex" : "hidden"
//         }   fixed top-2 bottom-2 left-2 right-2 z-10 bg-slate-50 border-2 rounded-lg border-crrg items-center justify-around bg-gradient-to-r from-green-200 via-white to-orange-200`}
//       >
//         <GiCancel
//           onClick={() => {
//             handleBigPic();
//           }}
//           className="fixed top-6 right-6 text-crrg text-4xl cursor-pointer"
//         />
//         <Image
//           className="max-w-[98%] max-h-[98%] object-contain rounded-xl"
//           src={bigPic}
//           alt="A selected picture"
//         />
//       </div>
//     </div>
//   );
// };

// export default Page;
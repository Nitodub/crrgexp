'use client'
import navLinks from "@/data/navLinks"
import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { GiCancel } from "react-icons/gi"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  const handleMobile = () => {
    isMobile ? setIsMobile(false) : setIsMobile(true)
    console.log(isMobile)
  }

  return (
    <div className="flex w-full items-center justify-between">
      <div className="hidden lg:flex flex-row items-center justify-between w-full">
        {navLinks.map((item) => (
          <li className="text-white list-none underlineAnimation" key={item.id}>
            <Link href={item.location}>{item.desc}</Link>
          </li>
        ))}
      </div>
      <div className="lg:hidden w-full flex items-center justify-end">
        <AiOutlineMenu
          onClick={handleMobile}
          className="text-white text-3xl hover:text-crrg transition duration-300"
        />
        <GiCancel className={`${isMobile ? 'block' : 'hidden' } text-white text-3xl hover:text-crrg transition duration-300`} />
      </div>
    </div>
  )
}

export default Navbar
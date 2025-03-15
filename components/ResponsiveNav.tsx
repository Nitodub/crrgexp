'use client'
import { useState } from "react"
import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

const ResponsiveNav = () => {
    const [showNav, setShowNav] = useState(false)
    const openNavHandler = () => setShowNav(true)
    const closeNavHandler = () => setShowNav(false)

    return (
      <div className="flex text-white text-2xl justify-around items-center w-2/5">
        <Navbar openNav={openNavHandler}/>
        <MobileNav showNav={showNav} closeNav={closeNavHandler} />
      </div>
    );
}

export default ResponsiveNav 
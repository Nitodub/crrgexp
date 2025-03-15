import Image from "next/image"
import Logo from '@/public/crrglogo.png'
import { FaRegEnvelope } from "react-icons/fa6"
import ResponsiveNav from "./ResponsiveNav"

const Header = () => {
    return (
      <div className="w-full bg-black flex items-center p-3 justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <Image src={Logo} width={125} height={125} alt="CRRG Logo" />
          <h1 className="text-crrg font-bold pl-2 text-xl">
            Country Roadz Riderz Guide
          </h1>
        </div>

        {/* Main Navbar */}
        <ResponsiveNav />

        {/* Mailbox */}
        <div className="hidden lg:flex items-center mr-4">
          <FaRegEnvelope className="text-crrg text-2xl" />
          <h1 className="text-crrg text-2xl">info@crrg.ie</h1>
        </div>
      </div>
    )
}

export default Header
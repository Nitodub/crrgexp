import MobileNav from "./MobileNav"
import Navbar from "./Navbar"

const ResponsiveNav = () => {
    return (
      <div className="flex text-white text-2xl justify-around items-center w-2/5">
        <Navbar />
        <MobileNav />
      </div>
    )
}

export default ResponsiveNav 
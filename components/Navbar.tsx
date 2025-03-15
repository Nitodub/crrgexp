
import navLinks from "@/data/navLinks"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"

type Props = {
  openNav: () => void,
}

const Navbar = ({openNav}: Props) => {
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
          onClick={openNav}
          className="text-white text-3xl hover:text-crrg transition duration-300"
        />
        {/* <GiCancel className="hidden text-white text-3xl hover:text-crrg transition duration-300" /> */}
      </div>
    </div>
  )
}

export default Navbar
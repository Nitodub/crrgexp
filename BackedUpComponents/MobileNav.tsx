import navLinks from "@/data/navLinks"
import Link from "next/link"

const MobileNav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-[40%] -translate-x-full bg-rose-500 z-10 text-crrg text-2xl flex flex-col items-center justify-around">
      {navLinks.map((item) => (
        <li
          className="text-white list-none w-max underlineAnimation"
          key={item.id}
        >
          <Link href={item.location}>{item.desc}</Link>
        </li>
      ))}
    </div>
  )
}

export default MobileNav;

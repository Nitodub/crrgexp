import navLinks from "@/data/navLinks"
import Link from "next/link"
import { GiCancel } from "react-icons/gi";

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({showNav, closeNav}:Props) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 h-full w-[40%] ${
        showNav ? "translate-x-0" : "-translate-x-full"
      } transition-all duration-300 bg-gradient-to-r from-lime-200 via-white to-orange-200 z-10 text-crrg text-2xl flex flex-col items-center justify-around`}
    >
      {navLinks.map((item) => (
        <li
          className="text-black list-none w-max underlineAnimation"
          key={item.id}
        >
          <Link href={item.location}>{item.desc}</Link>
        </li>
      ))}
      <GiCancel
        onClick={closeNav}
        className="fixed top-16 right-10 text-4xl text-white cursor-pointer hover:rotate-45 hover:text-crrg transition-all delay-300"
      />
    </div>
  );
}

export default MobileNav;

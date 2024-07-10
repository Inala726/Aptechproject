import "./Navbar.css";
import Sidebar from "./Sidebar";
import "./fonts.css";
import { IoIosArrowDown } from "react-icons/io";

interface NavProps {
  src?: string;
  loginCount?: number;
  links: { href: string; text: string }[];
}

const Navbar = ({ src, links, loginCount }: NavProps) => {
  return (
    <>
      <div className="img-cont">
        <div className="">
          <span className="count">{loginCount}</span>
          <img src={src} alt="" className="logo" />
        </div>
        <ul className="lato-regular nav-list ">
          {links.map((link) => (
            <li key={link.href} className="nav-list">
              <a href={link.href} className="flex items-center">
                {link.text} <IoIosArrowDown size={10} />
              </a>
            </li>
          ))}
        </ul>
        <div className="menu">
          <Sidebar links={links} />
        </div>
      </div>
    </>
  );
};

export default Navbar;

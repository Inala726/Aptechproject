import "./Navbar.css";
import "./fonts.css"
import { IoIosArrowDown } from "react-icons/io";
interface NavProps {
  src:string
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

const Navbar = ({ link1, link2, link3, link4, src }: NavProps) => {
  return (
    <>
      <div className="img-cont">
        <img src={src} alt="" className="logo" />
        <ul className="lato-regular nav-list">
        <li>
          {link1} <IoIosArrowDown size={10} />
        </li>
        <li>
          {link2} <IoIosArrowDown size={10} />
        </li>
        <li>
          {link3} <IoIosArrowDown size={10} />
        </li>
        <li>
          {link4} <IoIosArrowDown size={10} />
        </li>
      </ul>
      </div>
      
    </>
  );
};

export default Navbar;

import Navbar from "./Navbar";
import logo from "../assets/PngItem_1076085.png";
import "./Herosection.css";
import "../App.css";
import "./fonts.css";

interface SectionProps {
  heading: string;
  bracket?: string;
  paragraph: string;
  count: number;
  setCount?: (count: number) => void;
}

const Herosection = ({ heading, bracket, paragraph, count }: SectionProps) => {
  const links = [
    { href: "/", text: "Planets" },
    { href: "#solarsystem", text: "Solar System" },
    { href: "#objects", text: "Objects" },
    { href: "#resources", text: "Resources" },
  ];

  return (
    <>
      <section className="section">
        <Navbar
          src={logo}
          loginCount={count}
          links={links}
        />
        <div className="outer">
          <div className="text">
            <p className="lato-bold">{heading}</p>
            <p className="lato-regular bracket">{bracket}</p>
            <p className="lato-regular paragraph">{paragraph}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;

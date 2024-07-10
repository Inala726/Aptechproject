import "./Herosection.css";
import "../App.css";
import "./fonts.css";
import Navbar from "./Navbar";
import logo from "../assets/PngItem_1076085.png";


interface SectionProps {
  heading: string;
  bracket?: string;
  paragraph: string;
}

const Herosection = ({ heading, bracket, paragraph }: SectionProps) => {
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
          loginCount={0}
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

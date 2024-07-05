import "./Herosection.css";
import "../App.css";
import "./fonts.css"
import Navbar from "./Navbar";
import logo from '../assets/PngItem_1076085.png'

interface SectionProps {
  heading: string;
  bracket?: string;
  paragraph: string;
}

const Herosection = ({ heading, bracket, paragraph }: SectionProps) => {
  return (
    <>
      <section className="section">
        <Navbar src={logo} link1={"Planets"} link2={"Solar System"} link3={"Objects"} link4={"Resources"}        
        />
        <div className="outer">
          <div className="text">
            <p className="lato-bold">{heading}</p>
            <p className="lato-regular bracket">{`(${bracket})`}</p>
            <p className="lato-regular paragraph">{paragraph}</p>
          </div>
        </div>
      </section>
      <div className="ash-text lato-regular">
        <p>
          The Nine Planets is an encyclopedic overview with facts and
          information about mythology and current scientific knowledge of the
          planets, moons, and other objects in our solar system and beyond.
        </p>
      </div>
    </>
  );
};

export default Herosection;

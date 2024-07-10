import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Haumea = () => {
  return (
    <>
      <Herosection
        heading={"Haumea Facts"}
        paragraph={
          "Haumea lives in the Kuiper belt and is about the same size as Pluto. It spins very fast, which distorts its shape, making it look like a football."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Haumea is the fastest rotating dwarf planet with the most
            interesting/controversial shape. It is located beyond the orbit of
            Neptune. It was discovered in 2004 and is the fourth largest dwarf
            planet.
          </li>
          <li>
            It was discovered in 2004 by team of astronomers led by Mike Brown
            and in 2005 by a team led by Luiz Moreno, though the latter claim
            was contested.
          </li>
          <li>
            However, it was officially recognized as dwarf planet in 2008 by the
            International Astronomical Union. Haumea’s shape is a bit
            controversial and thus the reason for its late proclamation as a
            dwarf planet.
          </li>
          <li>
            Along with its weird shape it also rotates quite fast and displays
            large fluctuations of brightness. Its speedy rotation is considered
            to be the fastest among all the known equilibrium bodies in the
            Solar System.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Haumea is member of the group of objects that orbit in a disc-like
          zone beyond the orbit of Neptune, called the Kuiper Belt. These
          objects are called trans-Neptunian objects or plutoids and it is
          believed to have formed in the early history of our Solar System about
          4.5 billion years ago. Haumea or the Haumean family is the only
          identified trans-Neptunian collisional family.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          It is about 35 AU away from the Sun at its perihelion, while at its
          aphelion point, about 50 AU away. In relation to Earth it is currently
          51.2 AU away while its light is reflected back at us in about 7 hours.
          Haumea has a radius of about 385 miles or 620 kilometers, it is about
          1/14 the radius of Earth, like a sesame seed compared to a nickel. It
          has a diameter of about 1,632 kilometers or 1014 miles, three Haumeas
          can fit side by side into Earth. Haumea represents 28% the mass of the
          plutonian system and about 6% that of Earth’s moon. However it is
          believed that the dwarf planet lost about 20% of its mass during a
          collision.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
        It takes around 284 Earth years for Haumea to make a trip around the Sun. While orbiting the Sun, it completes one rotation every 4 hours. The speed of Haumea’s rotation is extremely fast, almost unnatural, and it is believed that this is due to its collision that happened many years ago.
        </p>
        <h2>Surface and Geology</h2>
        <p>
        Spectral analysis showed that Haumea is coated in strong crystalline water ice, similar to the surface of Pluto’s moon Charon. A peculiarity since crystalline ice forms at temperatures above 110 K while Haumea’s surface temperature is below 50 K which is favorable for amorphous ice to be formed. As a result it is believed that Haumea is made up entirely out of rock covered by a thin icy shell.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
        Two moons were discovered by Darin Ragozzine and Michel Brown in 2005. It is believed that both moons are fragments of Haumea.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Haumea;

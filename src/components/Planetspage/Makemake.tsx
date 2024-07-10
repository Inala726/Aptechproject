import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Makemake = () => {
  return (
    <>
      <Herosection
        heading={"Makemake Facts"}
        paragraph={
          "Also in the Kuiper belt, Makemake is the second brightest object in the belt, behind Pluto. Makemake (and Eris) are the reason Pluto is no longer a planet."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Makemake is the second furthest dwarf planet from the Sun located
            beyond Neptune’s orbit. Discovered in 2005, it is the third-largest
            known dwarf planet.
          </li>
          <li>
            It was discovered on March 31, 2005, by a team of astronomers at the
            Palomar Observatory who also discovered the dwarf planet Eris.
          </li>
          <li>
            Its discovery along with that of Eris and Haumea contributed to
            Pluto’s reclassification as a planet to a dwarf planet. It was the
            fourth dwarf planet to be discovered. This included Pluto who was
            reclassified.
          </li>
          <li>
            Makemake has one satellite, a dim lightened moon that was named MK
            2. Makemake is large enough and bright enough to be studied by
            high-end amateur telescopes.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Makemake is luckier than Ceres since it’s located with its other
          fellow dwarf planets Eris, Pluto and Haumea, in the Kuiper Belt, a
          region outside of Neptune’s orbit. It is the second-brightest object
          in the Kuiper Belt with Pluto being the brightest. The Kuiper Belt is
          a group of objects that orbit in a disc-like zone beyond the orbit of
          Neptune. This faraway realm is populated with thousands of miniature
          icy worlds, which formed early in the history of our Solar System
          about 4.5 billion years ago.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Makemake has a radius of approximately 444 miles or 715 kilometers, it
          is 1/9 the radius of Earth. It has a diameter of about 1,430
          kilometers. It’s like the size of a mustard seed in comparison to a
          nickel. The distance from the Sun is quite big, about 45.8 AU away and
          53.2 AU away from Earth. It is about two-thirds the size of Pluto and
          about three times the size of the 277-mile-long Grand Canyon, thus
          making it the 25th largest object in our Solar System. Its mass is
          estimated to be in the vicinity of 4 x 10²¹ kg or about 4,000,000,000
          trillion kg, which is the equivalent of 0.00067 Earths.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          The orbital period of Makemake is estimated to be around 310 years.
          Its orbit lies far enough from Neptune to remain stable over the edge
          of the Solar System. It has a slightly eccentric orbit which ranges
          from 38.5 AU at perihelion to 52.8 AU at aphelion.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Similar to Pluto, it appears red in the visible spectrum and
          significantly redder than the surface of Eris. The spectral signature
          of Makemake’s methane is much stronger than that of Pluto and Eris.
          The analysis revealed that methane must be present in the form of
          large grains at least one centimeter in size.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Makemake has one natural moon that was nicknamed MK 2. It was
          discovered in 2016 by the Hubble Space Telescope’s Wide Field Camera
          3. There is however speculation that it could have a second
          undiscovered satellite, which would explain its unusually long
          rotation.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Makemake;

import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Pluto = () => {
  return (
    <>
      <Herosection
        heading={"Pluto Facts"}
        paragraph={
          "Pluto will always be the ninth planet to us! Smaller than Earth's moon, Pluto was a planet up until 2006 and has five of its own moons!"
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Pluto is the largest known dwarf planet in the Solar System, discovered in 1930. It was thought to be the 9th planet of our system for 75 years until the discovery of Eris and other similar objects that led to its demotion from a planet to a dwarf planet in 2006.
          </li>
          <li>
          It was the first Kuiper Belt object to be discovered and is the largest known plutoid. It was discovered in 1930 by Clyde Tombaugh and was classified for 75 years as the ninth planet of the Solar System.
          </li>
          <li>
          Since the beginning of the 1990s, its status as a planet was questioned following the discovery of other objects of similar size. After the discovery of Eris in 2005, Pluto was demoted in 2006 from a planet to a dwarf planet after the IAU defined the term “planet”.
          </li>
          <li>
          Pluto is the ninth-largest and tenth most massive known object directly orbiting the Sun. However, when it comes to the trans-Neptunian objects, it is the largest by volume but less massive than Eris.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
        Pluto is the largest member of a group of objects that orbit in a disc-like zone beyond the orbit of Neptune, called the Kuiper Belt. This far away realm is populated with thousands of miniature icy worlds, which formed early in the history of our Solar System about 4.5 billion years ago. The origin and identity of Pluto has long puzzled astronomers.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
        Due to its orbit, Pluto periodically comes closer to the Sun than Neptune. A stable orbital resonance with Neptune prevents them from colliding. The light from the Sun reaches Pluto in about 5.5 hours at its average distance of 39.5 AU. In its furthest point, Pluto is 48.9 AU distance from the sun, at its closest it is 29.7 AU. Currently Pluto is 34.3 AU distance from the Earth, light takes about 4 hours and 45 minutes to travel from it to us.
        The surface area of Pluto is a bit bigger than Russia, and it is about half as wide as the United States, with a gravity of 0.063 g, Earth has 1 g. It has a diameter of 2,376 kilometers or 1476 miles and a radius of 1,188 kilometers or 738 miles. It is about 1/6 the size of Earth or 18%, and it has 70% the diameter of Earth’s moon.

The mass of Pluto is 1.3 x 1022 kg, which is only 0.22% that of Earth or 18% that of Earth’s moon. The mass of Pluto is also smaller than six other moons: Titan, Callisto, Io, Ganymede, Europa and Triton. Pluto is more than twice the diameter and a dozen times the mass of the dwarf planet Ceres, the largest object in the asteroid belt. It is less massive than the dwarf planet Eris.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
        One day on Pluto lasts about 153 hours while a whole trip around the Sun is completed in about 248 years. It has an unusual orbit, both elliptical and tilted. Its oval-shaped orbit can take it 48.9 AU away from the Sun and 29.7 AU at its closest but on average it is about 39 AU.
        </p>
        <h2>Surface and Geology</h2>
        <p>
        The surface of Pluto is composed mostly of about 98% nitrogen ice, with traces of methane and carbon monoxide. Nitrogen and carbon monoxide are most abundant on the anti-Charon face where Tombaugh Regio’s western lobe, Sputnik Planitia is located. It has mountains covered in water ice.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          A total of 14 known moons surround Neptune. They have all been named
          after water deities in Greek mythology. The first moon discovered was
          Triton, just 17 days after Neptune itself was discovered. It is also
          the largest of the 14 moons. The 14 moons of Neptune can be divided
          into regular, irregular and unusual irregular moons.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Pluto;

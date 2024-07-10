import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Saturn = () => {
  return (
    <>
      <Herosection
        heading={"Saturn Facts"}
        paragraph={
          "The most recognizable planet with a system of icy rings, Saturn is a very unique and interesting planet."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Saturn is the sixth planet from the Sun, with the largest planetary
            rings in the Solar System. It is the second-largest planet after
            Jupiter, and recently, with many other moons being discovered, it
            surpassed the number of Jupiter’s moons and is now considered the
            planet with the most numerous satellites.
          </li>
          <li>
            Since ancient times Saturn was known to humanity because of its
            brightness and closeness to Earth. It’s not possible to give someone
            credit for the discovery of Saturn, however, the first telescopic
            observation was conducted by Galileo Galilei in 1610.
          </li>
          <li>
            Because of the crude telescope available at the time, Galileo failed
            to observe the rings of Saturn. The discovery of the rings was made
            by Christiaan Huygens in 1659. The rings of Saturn are the most
            extensive of any other planet. They cannot be seen without an
            unaided eye. Generally, only 3 rings can be seen by regular
            telescopes, powerful telescopes can view 8 rings and when the
            spacecraft Cassini orbited Saturn, it counted well above 30 rings.
            It is important to understand that these rings are actually
            countless since they are comprised of millions of generally small
            rocks creating illusions of ring systems.
          </li>
          <li>
            Saturn is named after the Roman god of harvest and time, the
            equivalent of the Greek god of time, Cronos.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Saturn formed together with the rest of the solar system about 4.5
          billion years ago. Gravity pulled swirling gas and dust together and
          thus the gas giant was created. About 4 billion years ago, Saturn
          settled into its current position in the outer solar system. Like
          Jupiter, Saturn is mostly made of hydrogen and helium, the same two
          main components that make up the Sun.
        </p>
        <p>
          There are theories that hypothesize the fact that Jupiter may have
          formed before the Sun while others state that Jupiter formed after the
          sun about 4.5 billion years ago. Gravity pulled swirling gas and dust
          and resulted in the creation of Jupiter. Sometime around 4 billion
          years ago Jupiter settled in its current position in the outer solar
          system.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Saturn is about 9.5 times farther away from the Sun than Earth. At a
          distance of 9.6 AU away from the Sun and 10.6 AU away from Earth, it
          is the sixth most distant planet.
        </p>
        <p>
          Light takes approximately 1 hour and 29 minutes to travel from Saturn
          and then arrive at Earth. It is the second-largest planet in the Solar
          System, having a radius of 58.232 km or 36.183 mi, about nine times
          that of Earth and a diameter of 120.536 km or 74.897 mi, almost 9.5
          times bigger than the diameter of Earth. The surface area is about 83
          times bigger than our planet, and the mass of Saturn is about 95 times
          greater.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          Saturn has the second-shortest day in the solar system, completing a
          rotation quite quickly, in about 10.6 hours. However, its orbit around
          the Sun is slow, completing one trip around the Sun or a year, in
          about 29.5 Earth years. Its average orbital speed is about 9.68 km/s -
          6.01 mi/s.
        </p>
        <p>
          The elliptical orbit of Saturn is inclined 2.48° relative to the
          orbital plane of the Earth. The perihelion and aphelion distances are,
          respectively, 9.195 and 9.957 AU, on average.
        </p>
        <h3>Axial tilt</h3>
        <p>
          Due to Saturn’s axial tilt of 26.73 degrees, similar to that of Earth,
          the southern and northern hemispheres are heated differently, causing
          seasonal temperature variations. Much of these variations in
          temperature are horizontal.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Predominately composed out of hydrogen and helium, Saturn’s density is
          the lowest out of all the planets in the Solar System, having no true
          surface just like Jupiter, Uranus, and Neptune. It does have a dense
          core in the center, composed out of water, ice, and rocky materials,
          but no actual landmass. The core is believed to be similar to that of
          Jupiter – rocky, enveloped by a liquid metallic hydrogen layer and a
          molecular hydrogen layer with traces of various ices. The interior is
          very hot at the core – 12.000 K / 11,700 °C – and it radiates 2.5
          times the amount of energy it produces into space than it receives
          from the Sun. It is estimated that the core’s mass is about 9-22 times
          bigger than that of Earth. This would result in a diameter of 25.000
          km/15.534 mi or almost two times the size of Earth.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Saturn is now the “king of the moons” in the Solar System, having a
          total of 82 confirmed and diverse satellites that range from a couple
          of meters to several hundred kilometers. The orbits of these 82 moons
          have been confirmed as not being embedded in its rings. Only 13 of
          these satellites have diameters greater than 50 km/31 mi - as well as
          dense rings that contain millions of embedded moonlets and innumerable
          smaller ring particles. Only 7 of these moons are large enough to have
          collapsed into a relaxed, ellipsoidal shape, though only one or two,
          Titan and possibly Rhea, are currently in hydrostatic equilibrium.
          Momentarily, not all the moons have been named.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Saturn;

import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Ceres = () => {
  return (
    <>
      <Herosection
        heading={"Ceres Facts"}
        paragraph={
          "Ceres is the largest object in the asteroid belt, but was reclassified a dwarf planet in 2006 – even though it’s 14 times smaller than Pluto."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Ceres is a dwarf planet, and the only who isn’t located in the
            Kuiper Belt but rather in the inner solar system in the asteroid
            belt between the orbits of Mars and Jupiter. Discovered in 1801, it
            was considered a planet for a year, and then an asteroid, the first
            of its kind until 2006, when it was classified as of dwarf planet
            being the smallest of them.
          </li>
          <li>
            Ceres is the first dwarf planet to receive a visit from a
            spacecraft.
          </li>
          <li>
            It is the only dwarf planet located in the inner solar system.1
          </li>
          <li>
            It does not have any moons or rings, and scientist believe that it
            also lacks a magnetosphere.
          </li>
        </ul>
        <h2>Distance, Formation and Size</h2>
        <p>
          Located in the asteroid belt between Mars and Jupiter, Ceres
          encompasses one-third of all the mass found in the asteroid belt. Its
          size would later grant it the status of a dwarf planet, in 2006.
        </p>
        <p>
          It is located just under 2.8 Astronomical Units away from the Sun and
          thus it receives its light in about 22 minutes, and is approximately
          3.5 Astronomical Units away from Earth, light thus takes 29 minutes to
          arrive to us from Ceres. It is the 33th largest body in the Solar
          System within Neptune’s orbit. Ceres is believed to have been formed
          around 4.5 billion years ago when the Solar System was forming.
          Gravity pulled swirling gas and dust and it resulted in the creation
          of the small dwarf planet. Ceres is described by scientists as an
          embryonic planet or proto planet, meaning that it started to form as a
          planet but failed to finish. The failure was guaranteed by Neptune’s
          strong gravity which prevented Ceres from becoming a fully formed
          planet. Ceres has the radius of 476 kilometers or 296 miles. Thus
          Ceres is 1/13 the radius of Earth or 27% that of the Moon. The
          diameter of Ceres is estimated to be about 945 kilometers, meaning
          that Ceres is a comparative size to the top to bottom length of the
          United Kingdom.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          It follows an orbit between Mars and Jupiter, within the asteroid belt
          and closer to the orbit of Mars. The orbit is moderately inclined, (i
          = 10.6° compared to 7° for Mercury and 17° for Pluto) and moderately
          eccentric (e = 0.08 compared to 0.09 for Mars). It takes about 4.6
          Earth years for Ceres to make one trip around the sun or approximately
          1,681 Earth days. As Ceres orbits the sun, it completes one rotation
          every 9 hours, thus its day length, which is one of the shortest in
          the solar system.
        </p>
        <h3>Axial tilt</h3>
        <p>
          The axial tilt of Neptune is 28.32°. It is similar to the tilts of
          Earth 23° and Mars 25°. As a result, Neptune experiences similar
          seasonal changes to Earth but due to its long orbital period, the
          seasons last for 40 Earth years. Due to the fact that it lacks a solid
          body, its atmosphere undergoes differential rotations. In the wide
          equatorial zone the rotation period is completed within 18 hours, much
          slower than the 16.11 – hour rotation of the planet’s magnetic field.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Ceres is covered in countless small, young craters, no larger than 280
          kilometers or 175 miles in diameter. The dwarf planet is made up
          mostly from ice and rock, with a rocky interior and an icy exterior.
          On the surface, ice mixes with various minerals, iron rich clay can
          also be found on the surface. The surface is relatively warm for an
          asteroid, the average surface temperature is about 235 degrees Kelvin
          or minus 36 degrees Fahrenheit or minus 38 degrees Celsius. In January
          2014, water vapor was detected in several regions, and thus it was
          discovered that water vapor comprises more of Ceres’s external makeup
          than it was previously believed. It has been determined that this
          could be the result of outgassing or from a unique type of volcano
          called a cryovolcano.
        </p>
        <h2>Moons and Satelites</h2>
        <p>No satellite has been discovered yet.</p>
      </div>
      <Footer />
    </>
  );
};

export default Ceres;

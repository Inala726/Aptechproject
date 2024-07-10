import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Neptune = () => {
  return (
    <>
      <Herosection
        heading={"Neptune Facts"}
        paragraph={
          "Neptune is now the most distant planet (sorry, Pluto😪😪) and is a cold and dark world nearly 3 billion miles from the Sun."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Neptune is the fourth largest and the farthest planet of the Solar
            System with the most powerful wind speeds out of all the planets. It
            is the smallest of the gas giants and is the first planet to be
            discovered by mathematical predictions in 1846.
          </li>
          <li>
            It is the only planet that is invisible to the unaided eye, thus it
            eluded ancient astronomers until it was officially discovered in
            1846 by Le Verrier and Johann Galle.
          </li>
          <li>
            The greatest factor of the discovery was the planet Uranus, whom
            astronomers were calculating its orbit and observed that Uranus
            wasn’t following their models.4
          </li>
          <li>
            Neptune was given the name of the roman god of the sea due to its
            bluish-ocean like color. Its satellites also received names of water
            deities. Neptune’s color is believed to be influenced by the
            presence of methane in its atmosphere and also an unknown factor.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Through simulations after the Nice model, it has been suggested that
          Neptune formed closer to the sun and later drifted away. It is
          hypothesized that the Solar System formed from a giant rotating ball
          of gas and dust known as the pre-solar nebula. Much of it formed the
          Sun while more of its dust went on and merged to create the first
          proto-planets. As they grew, some accreted enough matter for their
          gravity to hold unto the nebula’s leftover gas. Estimates suggest the
          creation to have taken place about 4.5 billion years ago, and the
          drifting about 4 billion.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          From its discovery until 1930 when Pluto was discovered, Neptune was
          considered the farthest planet. After the discovery of Pluto, Neptune
          was thought to be the second furthest planet. When Pluto’s eccentric
          orbit was understood and its status dropped from that of a planet to a
          dwarf planet in 2006, Neptune regained the title of the farthest
          planet in Solar System. Neptune has an average distance of 2.8 billion
          miles/4.5 billion kilometers or 30.1 AU away from the Sun, and its
          currently 29.4 AU away from Earth with its light taking up to 4 hours
          to arrive to us.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          Since it is the farthest planet from the Sun it has the longest
          orbital duration, completing a trip around the Sun in about 165 years.
          However, one sidereal rotation or day on Neptune is completed in 16.11
          hours. The average distance from the Sun is about 30.1 AU, while at
          its perihelion 29.81 AU, and its aphelion 30.33 AU. The elliptical
          orbit of Neptune is inclined 1.77° compared to that of Earth.
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
          The internal structure is very similar to that of the planet Uranus.
          Its atmospheres forms about 5% to 10% of its mass and extends about
          10% to 20% of the way towards the core reaching pressures of about 10
          GPa or 100.000 times that of Earth’s atmosphere. Concentrations of
          methane, ammonia and water are found in the lower regions of the
          atmosphere with the mantle equivalent to 10-15 Earth masses.
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

export default Neptune;

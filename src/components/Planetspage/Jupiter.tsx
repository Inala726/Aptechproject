import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Jupiter = () => {
  return (
    <>
      <Herosection
        heading={"Jupiter Facts"}
        paragraph={
          "Jupiter is a massive planet, twice the size of all other planets combined and has a centuries-old storm that is bigger than Earth."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Jupiter is the fifth planet from the Sun and the largest planet of
            the Solar System. It is the oldest planet of the Solar System thus
            it was the first to take shape out of the remains of the solar
            nebula.
          </li>
          <li>
            Since it is the fourth brightest object in the sky, Jupiter was
            observed since ancient times and thus no one can be credited for its
            discovery. However, the first telescopic observations were conducted
            by Galileo Galilei in 1609 and in 1610 Galileo also discovered the
            major moons of Jupiter, but of course not the smaller ones
          </li>
          <li>
            Jupiter is one of the five visible planets (Mercury, Venus, Mars,
            Saturn), being the fifth most distant from the Sun at an average
            distance of 5.2 AU, its closest approach is at 4.9 AU and at its
            farthest 5.4 AU. Its exact position can be checked online since the
            planet is constantly tracked.
          </li>
          <li>
            Since many cultures observed Jupiter, they all gave it different
            names but the Roman name remained used in the majority of cultures.
            Jupiter is named after the principal Roman god, the equivalent of
            the Greek god Zeus.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Throughout the universe, there are many planetary systems similar to
          ours. Most of them contain terrestrial planets like our own and gas
          giants like Jupiter. However, they also contain super-Earths – planets
          that are several times more massive than Earth. This indicates that
          our own Solar System should also have these types of planets and it is
          hypothesized that we did have them but they collided with Jupiter in
          the early formation of the Solar System. This resulted in Jupiter’s
          migration from the inner solar system to the outer solar system and
          thus allowed the inner solar planets to form. This theory is called
          the Grand Tack Hypothesis.
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
          It is the fifth most distant from the Sun with an average distance of
          about 5.2 AU. The closest approach is at 4.9 AU and at its farthest
          5.4 AU. Its exact position can be checked online since the planet is
          constantly tracked.
        </p>
        <p>
          It is the biggest planet of the Solar System, with a mean radius of
          43.440 miles / 69.911 km. Almost 11 times bigger than Earth. Jupiter's
          radius is about 1/10 the radius of the Sun, and its mass is 0.001
          times the mass of the Sun, so the densities of the two bodies are
          similar. The diameter at the equator of about 88.846 mi / 142.984 km,
          and at the poles, the diameter is only 83.082 mi / 133.708 km. The
          average density of Jupiter is about 1.326 g/cm3, much smaller than all
          the terrestrial planets. Jupiter is also 2.5 times more massive than
          all the other planets combined, having 318 times the mass of Earth. It
          has a volume of about 1,321 Earths.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          Jupiter rotates once every 10 hours – A Jovian day - thus it has the
          shortest day of all the planets in the solar system. A Jovian year, on
          the other hand, is about 12 Earth years, quite long in comparison to
          its short days. The orbital period is about two-fifths that of Saturn.
          The orbit of Jupiter is elliptical, inclined about 1.31 degrees when
          compared to Earth.
        </p>
        <p>
          The eccentricity of the orbit is about 0.048. This results in its
          distance from the Sun varying from its perihelion to aphelion by about
          75 million km / 46 mi. Jupiter’s upper atmosphere undergoes
          differential rotation since it’s made out of gases.
        </p>
        <h3>Axial tilt</h3>
        <p>
          Since Jupiter has a small axial tilt of only 3.13 degrees, it has
          little seasonal variations Because of this low tilt the poles
          constantly receive less solar radiation than at the planet’s
          equatorial region.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          One of the key features of Jupiter is its Great Red Spot. A storm
          that’s existed since 1831, and possibly since 1665. This oval-shaped
          object is greater in size than Earth and rotates counterclockwise
          within a period of six days. Its maximum altitude is about 8 km / 5 mi
          above the surrounding cloud tops. Since its discovery, it has
          decreased in size and recent observations state that it decreases in
          length by about 930 km / 580 mi per year. Storms are common on
          Jupiter, some are small and last hours while others are huge and last
          for centuries. Wind speeds of 100 m/s – 360 km/h are common on certain
          parts of the planet.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Jupiter was the king of the moons since recently, having a total of 79
          known satellites. Recently, Saturn dethroned Jupiter having a total of
          82 known satellites. These rankings can change as observations
          continue. Out of the 79 satellites, 63 are less than 10 km / 6.2 mi in
          diameter, and have only been observed since 1975. The Galilean moons,
          Io, Europa, Ganymede, and Callisto are large enough to be seen from
          Earth with binoculars. They are among the largest satellites
          discovered in the Solar System with Ganymede being the largest out of
          all the satellites in our solar system.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Jupiter;

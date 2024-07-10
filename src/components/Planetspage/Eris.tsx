import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Eris = () => {
  return (
    <>
      <Herosection
        heading={"Eris Facts"}
        paragraph={
          "Eris is the same size as Pluto, but three times further from the Sun! It’s so far away, we don’t know much about this extremely cold and remote dwarf planet."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Eris is the most distant dwarf planet, located beyond the orbit of
            Neptune. It was discovered in 2005 and was originally classified as
            a planet. It is the second-largest dwarf planet discovered and it
            led to both it and Pluto’s demotion from planets to dwarf planets.
          </li>
          <li>
            It was discovered in 2005 by a team of astronomers led by Mike Brown
            and announced in the same day as Makemake, and two days after
            Haumea.
          </li>
          <li>
            It is the most distant discovered dwarf planet from the Sun and has
            the greatest mass of the five dwarf planets.
          </li>
          <li>
            It was nicknamed Xena by the team, and later named Eris, after the
            ancient Greek goddess of discord and strife. The name fits since
            Eris remains at the center of a scientific debate about the
            definition of a planet. It also led to Pluto’s demotion from a
            planet to a dwarf planet.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Eris is a member of a group of objects that orbit in a disc-like zone
          beyond the orbit of Neptune, called the Kuiper Belt. Although, Eris is
          the only dwarf planet that orbits even further than this. This far
          away realm is populated with thousands of miniature icy worlds, which
          formed early in the history of our Solar System about 4.5 billion
          years ago.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Eris is about 68 AU away from the sun, and presently about 95.1 AU
          from the Earth. It takes about 13 hours for light to travel from Eris
          to us. These statistics constantly change but can be verified online
          since Eris is constantly tracked. Eris has a radius of about 722 miles
          or 1,163 kilometers, and thus it’s about 1/5 the radius of Earth. Like
          Pluto, it is a bit smaller than our moon. If Earth were a nickel, Eris
          would be the size of a popcorn kernel. It has a diameter of about
          2,326 kilometers or 1,445 miles. It is slightly smaller than Pluto,
          though Eris is about 27% more massive and denser. However, new results
          from the New Horizons mission revealed that Pluto’s volume was not
          slightly smaller, but actually slightly larger than Eris. With this
          new information, Eris has been placed as the tenth-largest object
          known to orbit the sun by volume, but it remains the ninth-largest by
          mass.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          It takes about 558 Earth years for Eris to make one trip around the
          Sun. As it orbits the Sun, it completes one rotation every 25.9 hours.
          Its maximum distance or aphelion, from the Sun, is about 97.65 AU
          while its closest or its perihelion is about 37.91 AU.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Eris has an estimated albedo of 0.96, higher than any other large body
          in the Solar System except for the sixth-largest moon of Saturn,
          Enceladus. The reason for its high albedo is speculated to be due to
          its surface ices that are replenished because of temperature
          fluctuations as Eris’s eccentric orbit takes it closer and father from
          the Sun. Since it has a density of 2.52±0.07 g/cm3, it is believed
          that it is largely composed of rocky materials. Internal heating via
          radioactive decay suggests that Eris could have an internal ocean of
          liquid water at the mantle-core boundary.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Eris has one known satellite, a moon that was discovered in 2005, and
          was named Dysnomia, after the daughter of the goddess Eris.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Eris;

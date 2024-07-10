import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Sun = () => {
  return (
    <>
      <Herosection
        heading={"Sun Facts"}
        paragraph={
          "The Sun is the heart of our solar system and its gravity is what keeps every planet and particle in orbit. This yellow dwarf star is just one of billions like it across the Milky Way galaxy."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">The Sun Profile</h2>

        <ul className="sun-list">
          <li>diameter: 1,390,000 km.</li>
          <li>mass: 1.989e30 kg</li>
          <li>temperature: 5800 K (surface) 15,600,000 K (core)</li>
        </ul>
        <h2>History of the Sun</h2>
        <p>
          The Sun is by far the largest object in the solar system. It contains
          more than 99.8% of the total mass of the Solar System (Jupiter
          contains most of the rest). It is often said that the Sun is an
          "ordinary" star. That's true in the sense that there are many others
          similar to it. But there are many more smaller stars than larger ones;
          the Sun is in the top 10% by mass. The median size of stars in our
          galaxy is probably less than half the mass of the Sun.
        </p>
        <p>
          The Sun is personified in many mythologies: the Greeks called it
          Helios and the Romans called it Sol. The Sun is, at present, about 70%
          hydrogen and 28% helium by mass everything else ("metals") amounts to
          less than 2%. This changes slowly over time as the Sun converts
          hydrogen to helium in its core. The outer layers of the Sun exhibit
          differential rotation: at the equator the surface rotates once every
          25.4 days; near the poles it's as much as 36 days. This odd behavior
          is due to the fact that the Sun is not a solid body like the Earth.
          Similar effects are seen in the gas planets. The differential rotation
          extends considerably down into the interior of the Sun but the core of
          the Sun rotates as a solid body. Conditions at the Sun's core
          (approximately the inner 25% of its radius) are extreme. The
          temperature is 15.6 million Kelvin and the pressure is 250 billion
          atmospheres. At the center of the core the Sun's density is more than
          150 times that of water.
        </p>
        <p>
          The Sun's power (about 386 billion billion mega Watts) is produced by
          nuclear fusion reactions. Each second about 700,000,000 tons of
          hydrogen are converted to about 695,000,000 tons of helium and
          5,000,000 tons (=3.86e33 ergs) of energy in the form of gamma rays. As
          it travels out toward the surface, the energy is continuously absorbed
          and re-emitted at lower and lower temperatures so that by the time it
          reaches the surface, it is primarily visible light. For the last 20%
          of the way to the surface the energy is carried more by convection
          than by radiation.
        </p>
        <p>
          The highly rarefied region above the chromosphere, called the corona,
          extends millions of kilometers into space but is visible only during a
          total solar eclipse (left). Temperatures in the corona are over
          1,000,000 K. It just happens that the Moon and the Sun appear the same
          size in the sky as viewed from the Earth. And since the Moon orbits
          the Earth in approximately the same plane as the Earth's orbit around
          the Sun sometimes the Moon comes directly between the Earth and the
          Sun. This is called a solar eclipse; if the alignment is slighly
          imperfect then the Moon covers only part of the Sun's disk and the
          event is called a partial eclipse. When it lines up perfectly the
          entire solar disk is blocked and it is called a total eclipse of the
          Sun. Partial eclipses are visible over a wide area of the Earth but
          the region from which a total eclipse is visible, called the path of
          totality, is very narrow, just a few kilometers (though it is usually
          thousands of kilometers long). Eclipses of the Sun happen once or
          twice a year. If you stay home, you're likely to see a partial eclipse
          several times per decade. But since the path of totality is so small
          it is very unlikely that it will cross you home. So people often
          travel half way around the world just to see a total solar eclipse. To
          stand in the shadow of the Moon is an awesome experience. For a few
          precious minutes it gets dark in the middle of the day. The stars come
          out. The animals and birds think it's time to sleep. And you can see
          the solar corona. It is well worth a major journey.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          The Sun has 8 objects revolving around it which are the 8 planets in the solar system(sorry Pluto)
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Sun;

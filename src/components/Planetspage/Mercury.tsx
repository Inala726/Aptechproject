import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Mercury = () => {
  return (
    <>
      <Herosection
        heading={"Mercury Facts"}
        paragraph={
          "The planet closest to the Sun, Mercury is the smallest and fastest planet in the solar system -- whipping around the Sun every 88 Earth days."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Mercury is the closest planet to the Sun but, perhaps surprisingly,
            it does not have the highest temperatures. It is the second densest
            planet of the Solar System, but also the smallest planet. The
            structure of Mercury makes it the most similar planet to Earth.
          </li>
          <li>
            Since Mercury can be seen without the need of a telescope, many
            ancient civilizations saw the planet, and as such it is impossible
            to determine who discovered it first. However, it was first observed
            with the help of a telescope in early 17th century, by Galileo
            Galilei.
          </li>
          <li>
            Galileo’s crude telescope didn’t manage to capture Mercury’s phases,
            this would be observed later by astronomer Giovanni Zupi in 1639,
            and thus he discovered that the planet had similar phases like Venus
            and the Moon.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          It is theorized that Mercury was formed about 4.5 billion years ago
          when gravity pulled swirling gas and dust together to form the small
          planet. Its small size but enormous core is theorized to be the result
          of a collision with another giant object that stripped much of its
          surface.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Mercury is the closest planet to the Sun, at a distance of 57.91
          million kilometers / 35.98 miles or 0.4 AU away. It takes sunlight 3.2
          minutes to travel from the Sun to Mercury.
        </p>
        <p>
          Mercury has a radius of 2.439 km or 1516 mi, and a diameter of 4.879
          km or 3.032 mi. It is about the size of the continental United States,
          slightly bigger. It has a mass of about 3.285 × 10^23 kg or about 5.5%
          that of Earth. Despite being the smallest planet from the Solar
          System, it is the second densest planet in the Solar System, with a
          density of 5.43 g/cm³ after Earth. For comparison, Mercury’s size is
          about a third of Earth, and Earth has a density of 5.51 g/cm³.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          Mercury's highly eccentric, egg-shaped orbit takes the planet as close
          as 29 million miles or 47 million kilometers, and as far as 43 million
          miles or 70 million kilometers from the Sun. It takes a trip around
          the Sun every 88 days thus 1 orbit/year is the equivalent of 88 Earth
          days. Mercury travels through space at nearly 29 miles or 47
          kilometers per second, faster than any other planet.
        </p>
        <p>
          The diagram above illustrates the effects of the eccentricity, showing
          Mercury’s orbit overlaid with a circular orbit having the same
          semi-major axis. The resonance makes a single solar day on Mercury
          last exactly two Mercury years, about 176 Earth days.
        </p>
        <h3>Axial tilt</h3>
        <p>
          The axial tilt is almost zero, with the best measured value as low as
          0.027 degrees. This is significantly smaller than that of Jupiter,
          which has the second smallest axial tilt of all planets at 3.1
          degrees. On average, Mercury is the closest planet to Earth, and to
          each of the other planets in the Solar System.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Very similar in appearance to Earth’s moon, Mercury’s surface is
          scarred by many impact craters from comets or meteoroids.
          Interestingly, many of these craters are named after famous deceased
          artists and authors. There are also extensive mare-like plains present
          and the craters also indicate that the planet has been geologically
          inactive for billions of years. It is believed that Mercury was heavy
          bombarded by comets and asteroids during and shortly after its
          formation 4.6 billion years ago, as well as during a possibly separate
          subsequent event called the Late Heavy Bombardment that ended 3.8
          billion years ago.
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default Mercury;

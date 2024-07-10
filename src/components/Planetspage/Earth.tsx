import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Earth = () => {
  return (
    <>
      <Herosection
        heading={"Earth Facts"}
        paragraph={
          "The place we call home, Earth is the third rock from the sun and the only planet with known life on it – and lots of it too!"
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Earth is the third planet from the Sun and the fifth largest planet
            in the Solar System with the highest density. It is currently the
            only known location where life is present.
          </li>
          <li>
            The realization that Earth is a planet, and a planet among many
            others was established “fairly” recently, in the 17th century – this
            realization came through by the combined forces of ancient
            philosophers, mathematicians, and astronomers.
          </li>
          <li>
            Plato correctly deduced that the Earth is spherical but this idea
            would take root and be proven much later.
          </li>
          <li>
            The name “Earth” – is at least 1.000 years old, and it is a Germanic
            word which simply translates to “the ground.” It is not known who
            came up with it but it is the only planet that wasn’t named after a
            Greek or Roman god. However, the Greek equivalent to Earth is Gaia –
            terra mater – mother Earth, and Roman equivalent was Tellus – the
            fertile soil.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          The Earth is believed to have formed around 4.5 billion years ago. The
          duration for this formation has been estimated to have lasted about 10
          to 20 million years. The theory states that a solar nebula partitions
          a volume out of a molecular cloud by gravitational collapse which
          begins to spin and flatten into a circumstellar disk.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          It is the fifth-largest planet in the Solar System, being the largest
          of the terrestrial planets. Earth is the third planet from the Sun, at
          a distance of 1 AU or 147 million km / 91 million mi. It is situated
          in the goldilocks zone where temperatures are just right for liquid
          water to exist and for life to evolve.
        </p>
        <p>
          Depending upon their current orbital positions, either Venus or
          Mercury are the closest planets to Earth. It has an equatorial radius
          of 6.371 km / 3.958 mi, and a polar radius of 6.356 km / 3.949 mi,
          meaning it is not completely spherical but rather bulged at the
          equator due to rotation. The diameter of Earth is around 12.742 km /
          7.917 mi being the fifth largest planet from the solar system, and the
          largest of the terrestrial planets (Venus, Mercury, Mars). The Earth
          is so big that if it were hallowed, almost 50 moons could fit inside
          it. Earth has a mass of about 6.6 sextillion tons and a volume of
          about 260 billion cubic miles / 1 trillion cubic kilometers. It has
          the biggest mass out of all the terrestrial planets and the greatest
          density out of all the planets - 5.51 g/cm³. Earth’s mass composition
          is mostly comprised of iron 32.1%, oxygen 30.1%, silicon 15.1%,
          magnesium 13.9%, sulphur 2.9%, nickel 1.8 %, nickel 1.8%, calcium
          1.5%, and aluminum 1.4%. The remaining 1.2% consists of trace amounts
          of other elements.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          The Earth makes a complete rotation on its axis once every 23.9 hours.
          It takes Earth 265,25 days to complete one trip around the Sun – year.
          In order for calendars to maintain their consistency with this orbit,
          every 4 years one day is added – this is called a leap day – as well
          as a leap year.
        </p>
        <p>
          Earth's orbital speed averages 29.78 km/s (107,208 km/h; 66,616 mph),
          which is fast enough to cover the planet's diameter in 7 minutes and
          the distance to the Moon in 4 hours.
        </p>
        <h3>Axial tilt</h3>
        <p>
          The Earth orbits around the Sun with one pole constantly tilted
          towards it. This tilt results in how much light reaches a given point
          on the surface of Earth. Earth’s axis is tilted towards the ecliptic
          of the Sun at approximately 23.4 degrees. This is responsible for
          Earth’s seasonal changes and the diurnal cycle.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          The surface area of Earth is about 197 million square miles / 510
          million square kilometers. Around 71% of the surface is covered by
          water and 29% by land. The water is 3% fresh and 97% salted. Of that
          3% freshwater, over 2% is frozen in ice sheets and glaciers meaning
          that less than 1% is freshwater found in lakes, rivers, and the
          underground. In regards to land, the continent of Asia covers about
          30% of all the land, having around 60% of the world’s population. The
          Earth is divided into 7 continents that constantly “move” several
          centimeters every year. In about 250 million years about four
          fundamental scenarios for the formation of the next supercontinent
          have been hypothesized: Novopangea, Pangea Ultima, Aurica and Amasia.
          Novopangea seems the most likely scenario based on current
          evaluations. The Americas would collide with the northward drifting
          Antarctica, and then into the already collided Africa-Eurasia.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Earth has one natural satellite the Moon, and several other artificial
          satellites such as asteroids or large rocks trapped by Earth’s
          gravity. They are trapped only temporarily for months or even years
          before returning to an orbit around the Sun. It is believed that the
          Moon was formed after a collision billions of years ago. A large chunk
          of rock smashed into Earth and displaced a portion of Earth’s
          interior. The resulting chunks clumped together and formed our Moon.
          This is at least the most widespread theory, researching continues.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Earth;

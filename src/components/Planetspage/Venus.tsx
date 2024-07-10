import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Venus = () => {
  return (
    <>
      <Herosection
        heading={"Venus Facts"}
        paragraph={
          "Spinning in the opposite direction to most planets, Venus is the hottest planet, and one of the brightest objects in the sky."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Venus is the second planet from the Sun and the sixth-largest.
            Together with Mercury, they are the only planets without a
            satellite, even though Mercury is closer to the sun, Venus is the
            hottest planet.
          </li>
          <li>
            Being very close to Earth, Venus was observed by ancient astronomers
            from different cultures many times however, the first accurate
            observation was in 1610 by Galileo Galilei.
          </li>
          <li>
            Galileo saw Venus through a telescope and determined it had phases
            similar to the Moon. This helped support the Copernican view that
            planets orbited the Sun and not vice versa as previously believed.
          </li>
          <li>
          Since Venus is the brightest object in the sky after the Moon, and the Sun, it was given the name of the Roman goddess of beauty and love, the ancient Greek’s named it Aphrodite.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
        It is theorized that Venus was formed about 4.5 billion years ago when gravity pulled swirling gas and dust together to form the second planet and it later settled into its current layout.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
        Venus is the second closest planet to the Sun, at a distance of 108.2 million km/ 67.24 mi or 0.7 AU receiving the sun’s light in 6 minutes. Venus has a radius of 6.051 km or 3.760 miles and a diameter of 12.104 km or 7.521 mi, slightly smaller than Earth.
        </p>
        <p>
          It has a mass of 4.87 × 1024 kg, or 85% that of Earth. The mentioned similarities also give way to similar densities, Venus having a density of 5.24 grams per cubic centimeter, while Earth has 5.52. It also has a as much volume as Earth - 928.45 billion cubic km compared to Earth's 1083.21 billion.
          Its closest approach to Earth happens once every 584 days, when the planets catch up to one another. On average it can get as close as 25 million miles or 40 million kilometers to Earth the equivalent of about 0.28 AU.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
        One of the reasons that ancient civilizations unknowingly turned Venus into two separate stars – The Morning Star and The Evening Star - was that they didn’t understood its orbit. Venus goes from being visible only after sunset to only being visible prior to sunrise when its orbit around the sun surpasses Earth’s orbit.
        </p>
        <p>
        Venus has a retrograde rotation, moving in the opposite direction than most planets, only Uranus also does this. They both move from East to West, clockwise. Venus does this rotation once every 243 Earth days, having the slowest rotation out of all the planets in the solar system.
        </p>
        <h3>Axial tilt</h3>
        <p>
        Venus has tilted away from the plane of the ecliptic by 2.7 degrees meaning it is almost completely upside down. Because of this, Venus almost doesn’t experience any seasons spinning nearly upright.
        </p>
        <h2>Surface and Geology</h2>
        <p>
        Venus is very similar to Earth in its structure. The core is posseses is approximately 2.000 miles or 3.200 kilometers in radius. Above that core rests a mantle of hot rock, slowly churning due to the planet’s interior heat. As a result the surface is a thin crust of rock that bulges and moves as Venus’s mantle shifts, and creates volcanoes.
        </p>
        <h2>Moons</h2>
        <p>
        Theories suggest that Venus might once have had a moon, which formed after a collision. After this, a second collision occurred that shattered the moon. It is believed that even this moon actually collided into Venus thus its unusual rotation.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Venus;

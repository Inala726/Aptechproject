import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Mars = () => {
  return (
    <>
      <Herosection
        heading={"Mars Facts"}
        paragraph={
          "The red planet is dusty, cold world with a thin atmosphere and is home to four NASA robots."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Mars is the fourth planet from the Sun and the second-smallest
            planet with a thin atmosphere, having the surface features
            reminiscent both of the impact craters of the Moon, and the valleys,
            deserts and polar ice caps of Earth. It is the most widely searched
            planet for life.
          </li>
          <li>
            Due to its brightness and closeness to Earth, Mars has been
            documented for at least 4.000 years thus it is impossible to credit
            someone with its discovery. However, the first person to observe
            Mars with a telescope was Galileo Galilei in 1610.
          </li>
          <li>
            It is named after the Roman god of war due to its red appearance. In
            different cultures, Mars represents masculinity, youth and its
            symbol is used as the symbol for the male gender.
          </li>
          <li>
            Due to the effects of the iron oxide prevalent on Mars’s surface, it
            has a reddish appearance distinctive among the astronomical bodies
            visible to the naked eye.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          It is hypothesized that the Solar System formed from a giant rotating
          ball of gas and dust known as the pre-solar nebula. Much of it formed
          the Sun while more of its dust went on and merged to create the first
          proto-planets. Mars was one of these planets and after the gravity
          pulled enough swirling gas and dust, it became the fourth planet from
          the Sun.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Mars is about 227.9 million km / 141.6 million mi or 1.5 AU away from
          the Sun. It takes sunlight about 13 minutes to reach Mars. The
          diameter of Mars is 6.779 km or 4.212 mi, slightly more than half the
          size of Earth.
        </p>
        <p>
          In a way, its diameter is about the width of the continent of Africa.
          Mars’s mass is 6.42 x 1023 kilograms, about 10 times less than Earth
          and a volume of 1.6318 x 10¹¹ km³ (163 billion cubic kilometers) which
          is the equivalent of 0.151 Earths. Its entire surface area is similar
          to that of all the Earth’s continents combined
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          One rotation/day on Mars is completed within 24.6 hours while a whole
          trip around the Sun or year, is completed within 669.6 days.
        </p>
        <p>
          Mars has a relatively pronounced orbital eccentricity of about 0.09.
          Of the seven other planets in the Solar System, only Mercury has a
          larger orbital eccentricity. It is known that in the past, Mars had a
          much more circular orbit. At one point, 1.35 million Earth years ago,
          Mars had an eccentricity of roughly 0.002, much less than that of
          Earth today.
        </p>
        <h3>Axial tilt</h3>
        <p>
          Mars’s axis of rotation is tilted 25.2 degrees similar to Earth which
          has an axial tilt of 23.4 degrees. It has seasons though they last
          longer than on Earth since Mars takes longer to orbit the Sun. The
          seasons vary in length due to Mars’s elliptical, egg-shaped orbit
          around the Sun.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          Though it is often referred to as the Red Planet, Mars actually has
          many colors. At the surface colors such as brown, gold and tan are
          present. Its surface is the same size as Earth’s dry lands combined,
          even though it is two times smaller. Mars has many evidences of a
          watery past, with ancient river valley networks, deltas and lakebeds,
          as well as rocks and minerals on the surface that could only have
          formed in liquid water. Some features suggest that Mars experienced
          huge floods about 3.5 billion years ago.
        </p>
        <h2>Moons</h2>
        <p>
          Mars has only 2 known moons named Phobos and Deimos after the horses
          that pulled the chariot of the god of war Mars. They are very small
          though, Phobos has a diameter of about 25 km or 15.5 mi, while Deimos
          just 15 km or 9.3 mi. They look very much like asteroids and it is
          strongly believed that they have been captured by Mars gravity from
          the nearby asteroid belt. Phobos orbits Mars only 6.000 km or 3.728 mi
          over the surface, moving so rapidly in its orbit that it orbits faster
          than Mars rotates. Tides from Mars are also altering its orbit, slowly
          lowering Phobos closer and closer to the surface. It is believed that
          in a few million years Phobos will drop low enough that it will
          actually enter the atmosphere and impact the surface.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Mars;

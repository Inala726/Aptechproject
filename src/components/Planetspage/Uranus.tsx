import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Uranus = () => {
  return (
    <>
      <Herosection
        heading={"Uranus Facts"}
        paragraph={
          "Uranus has a very unique rotation–it spins on its side at an almost 90-degree angle, unlike other planets."
        }
      />
      <div className="lato-regular body">
        <h2 className="header">Key Facts and Summary</h2>
        <ul>
          <li>
            Uranus is the seventh planet discovered in the Solar System that
            also led to the discovery of the last planet, Neptune they are both
            referred to as ice giants. Officially recognized in 1781 after many
            observations in the past, it is the third-largest planet of the
            Solar System.
          </li>
          <li>
            The mean apparent magnitude of Uranus is 5.68 with a standard
            deviation of 0.17, making it near the limit of naked eye visibility.
            Uranus is the seventh planet from the Sun, around 1.8 billion miles
            or 2.9 billion kilometers distance away. It has the third-largest
            planetary radius and fourth-largest mass in the Solar System.
          </li>
          <li>
            Since ancient times it was not recognized due to its dimness and
            slow orbit. However, in 1781 Sir William Herschel announced its
            discovery being the first planet discovered with the help of a
            telescope.
          </li>
          <li>
            It was given the name Uranus, after the Greek god of the sky
            Ouranos. It is the only planet whose name is derived directly from a
            figure of Greek mythology.
          </li>
        </ul>
        <h2>Formation</h2>
        <p>
          Through simulations after the Nice model, it has been suggested that
          both Uranus and Neptune formed closer to the sun and later drifted
          away. It is hypothesized that the Solar System formed from a giant
          rotating ball of gas and dust known as the pre-solar nebula. Much of
          it formed the Sun while more of its dust went on and merged to create
          the first proto-planets. As they grew, some accreted enough matter for
          their gravity to hold unto the nebula’s leftover gas. Estimates
          suggest the creation to have taken place about 4.5 billion years ago,
          and the drifting about 4 billion.
        </p>
        <h2>Distance, Size and Mass</h2>
        <p>
          Since its discovery, the planet has shifted it 1° west every 72 years
          however, its average distance from the sun still remains about 20 AU
          or 2 billion kilometers – 2 billion miles. The difference between its
          furthest and closest point from the sun is about 1.8 AU, larger than
          that of any other planet with the exception of the dwarf planet Pluto.
        </p>
        <p>
          Though its mass is roughly 14.5 times that of Earth, it is the least
          massive compared to the other giant planets, having a mass of 8.681 ×
          10^25 kg. However, its diameter is slightly larger than that of
          Neptune, and it’s about four times that of Earth: about 51.118
          kilometers or 31.763 miles. The density of Uranus 1.27 g/cm3 makes it
          the second least dense planet, after Saturn. This value indicates that
          it is made primarily of various ices such as water, ammonia, and
          methane. The mass of its interior is however debatable, it is
          speculated to be around 9.3 and 13.5 Earth masses.
        </p>
        <h2>Orbit and Rotation</h2>
        <p>
          It takes Uranus about 7 years to pass through each zodiac
          constellation, and a total of 84 years to make a complete trip around
          the sun. Its interesting orbing caught the attention of astronomers
          because the planet escaped its predicted location, and thus it led to
          the discovery of the last planet in 1846 that would later be called
          Neptune.
        </p>
        <p>
          The interior rotation of Uranus is completed in about 17 hours, 14
          minutes, and as in the case of all the gas giants its upper atmosphere
          experiences strong winds in the direction of rotation thus making a
          full rotation faster, in about 14 hours.
        </p>
        <h3>Axial tilt</h3>
        <p>
          The axis of rotation is approximately parallel with the plane of the
          Solar System, with a tilt of 97.77°. This feature gives Uranus
          completely different seasonal changes unlike those of other planets.
        </p>
        <h2>Surface and Geology</h2>
        <p>
          The core’s mass is estimated to be about 0.55% Earth masses with a
          radius less than 20% of the whole of Uranus. The mantle comprises its
          bulk, with around 13.4 Earth masses. The upper atmosphere is
          relatively insubstantial, weighing about 0.5 Earth masses and
          expanding for the last 20% of Uranus’s radius. The core density is
          around 9 g/cm3, with a pressure in the middle of about 8 million bars,
          and a temperature of about 5.000 K. What is referred to as the ice
          mantle is not in fact composed of ice in the conventional sense, but
          of a hot and dense fluid consisting of water, ammonia and other
          volatiles.
        </p>
        <h2>Moons and Satelites</h2>
        <p>
          Like other giant planets Uranus has many moons. Until now 27
          satellites have been discovered, and were named after characters from
          the works of Shakespeare and Alexander Pope. Although the Uranian
          satellite system is the least massive among those of the giant
          planets. There are five main satellites that stand out: Miranda,
          Ariel, Umbriel, Titania and Oberon.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Uranus;

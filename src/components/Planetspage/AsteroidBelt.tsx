import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const AsteroidBelt = () => {
  return (
    <>
      <Herosection
        heading={"Asteroid Belt Facts"}
        paragraph={
          "Between the orbits of Mars and Jupiter, the asteroid belt contains an estimated 1.9 asteroids. The total mass of all objects in the asteroid belt is still less than that of Earth’s Moon."
        }
      />
      <div className="lato-regular body">
        <p>
          The asteroid belt, found between the orbits of Mars and Jupiter,
          contains countless asteroids, rocks, dust particles, and dwarf
          planets. You might think that this belt is full of asteroids very
          narrowly missing each other – impossible to pass. The truth is that
          objects in the asteroid belt are spread very far apart with not much
          risk of a collision. It is home to hundreds of thousands of tiny
          asteroids but just four of the objects in the asteroid belt – Ceres,
          Vesta, Pallas, and Hygiea – make up almost half of the entire mass.
        </p>
        <h2 className="header">Asteroid History</h2>
        <p>
          Ceres has a diameter of 950 kilometres and is the only asteroid in the
          belt that is large enough to be considered a dwarf plan. In this blog
          post, you’ll learn some interesting facts about the asteroid belt, its
          composition, history, and more. Keep reading as we journey into this
          very interesting part of our solar system.
        </p>
        <h2 className="header">What Exactly Is The Asteroid Belt?</h2>
        <ul>
          <li>
            There are hundreds of thousands of asteroids in the asteroid belt,
            but almost half of the entire mass is made up of just four objects.
            These objects are the dwarf planet Ceres, and three other asteroids
            called Vesta, Pallas and Hygiea.
          </li>
          <li>
            The diameters of Vesta, Pallas and Hygiea are over 400km and Ceres
            is even bigger at 950km diameter. Of the many thousands of asteroids
            in the asteroid belt, Ceres is the only one large enough to be
            classified as a “dwarf planet”. Apart from these four objects, the
            remaining objects in the asteroid belt range in size from small
            rocks right down to dust particles.
          </li>
        </ul>
        <h2 className="header">What Exactly Is The Asteroid Belt?</h2>
        <p>
          The asteroid belt is between the planets Mars and Jupiter. It is
          located about 2.2 to 3.2 Astronomical Units (AU) from the Sun. That is
          somewhere between 329-478 million km away. The asteroid belt is huge
          and the space between each of the asteroids is over 600,000 miles. The
          circumference of Earth is only 24,901.45 miles, which means that the
          distance between objects in the asteroid belt is more than 24 times
          the circumference of Earth.
        </p>
        <h2 className="header">Interesting Facts About The Asteroid Belt</h2>
        <ul>
          <li>
            The asteroid belt was first discovered in 1801. This is when
            Giuseppe Piazzi discovered Ceres. Ceres is a dwarf planet and was
            the first object to be observed in the asteroid belt. Fifteen months
            later a large asteroid was spotted and named Pallas. Over the next
            few decades more objects were found and in the 1850s astronomers
            began calling the region “the asteroid belt”. By the year 2000 over
            100,000 asteroids had been discovered.
          </li>
          <li>
            The asteroid belt is a disc shape, located between the orbits of
            Mars and Jupiter.
          </li>
          <li>
            The asteroids are made of rock and metal and are all irregularly
            shaped.
          </li>
          <li>
            The size of the objects within the asteroid belt range from being as
            small as a dust particle to almost 1000km wide. The largest is the
            dwarf planet Ceres. Ceres is the only dwarf planet in the asteroid
            belt.
          </li>
          <li>
            The four largest objects in the belt are Ceres, Vesta, Pallas and
            Hygiea.
          </li>
          <li>
            Many people picture the belt crowded with asteroids. However this is
            not the case. The asteroid belt is so vast that the objects are
            widely spread out, in fact spacecraft have managed to easily travel
            through the belt without collision.
          </li>
          <li>
            Astronomers used to believe that the objects within the asteroid
            belt were the remnant of a planet smaller than Earth’s moon that had
            exploded. However this theory is now accepted to be untrue and it is
            thought the asteroids were never part of a planet.
          </li>
          <li>
            Gravitational forces can throw asteroids out of the belt and send
            them towards the inner solar system. Asteroids are similar to comets
            but lack the coma which appears as a tail.
          </li>
          <li>
            Sometimes the asteroid belt is called the main belt to help
            differentiate between other groups of asteroids in the solar system.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default AsteroidBelt;

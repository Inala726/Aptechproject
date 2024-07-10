import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Asteroid = () => {
  return (
    <>
      <Herosection
        heading={"Asteroid Facts"}
        paragraph={
          "Asteroids are small, rocky, debris left over from the formation of our solar system around 4.6 billion years ago. There are currently over 822,000 known asteroids."
        }
      />
      <div className="lato-regular body">
        <p>
          On the first day of January 1801, Giuseppe Piazzi discovered an object
          which he first thought was a new comet. But after its orbit was better
          determined it was clear that it was not a comet but more like a small
          planet. Piazzi named it Ceres, after the Sicilian goddess of grain.
          Three other small bodies were discovered in the next few years
          (Pallas, Vesta, and Juno). By the end of the 19th century, there were
          several hundred.
        </p>
        <h2 className="header">Asteroid History</h2>
        <p>
          Several hundred thousand asteroids have been discovered and given
          provisional designations so far. Thousands more are discovered each
          year. There are undoubtedly hundreds of thousands more that are too
          small to be seen from the Earth. There are 26 known asteroids larger
          than 200 km in diameter. Our census of the largest ones is now fairly
          complete: we probably know 99% of the asteroids larger than 100 km in
          diameter. Of those in the 10 to 100 km range we have cataloged about
          half. But we know very few of the smaller ones; there are probably
          considerably more than a million asteroids in the 1 km range.
        </p>
        <p>
          The total mass of all the asteroids is less than that of the Moon. 11
          comets and asteroids have been explored by spacecraft so far, as
          follows: ICE flyby of Comet Giacobini-Zinner. Multiple flyby missions
          to Comet Halley. Giotto (retarget) to Comet Grigg-Skellerup. Galileo
          flybys of asteroids Gaspra and Ida (and Ida satellite Dactyl).
          NEAR-Shoemaker flyby of asteroid Mathilde on the way to orbit and land
          on Eros. DS-1 flybys of asteroid Braille and Comet Borrelly. Stardust
          flyby of asteroid Annefrank and recent sample collection from Comet
          Wild 2. For future we can expect: Hayabusa (MUSES-C) to asteroid
          Itokawa, Rosetta to Comet Churyumov-Gerasmenko, Deep Impact to Comet
          Tempel 1, and Dawn to orbit asteroids Vesta and Ceres.
        </p>
        <p>
          243 Ida and 951 Gaspra were photographed by the Galileo spacecraft on
          its way to Jupiter. The NEAR mission flew by 253 Mathilde (left) on
          1997 June 27 returning many images. NEAR (now renamed
          "NEAR-Shoemaker") entered orbit around 433 Eros (right) in January
          1999 and returned a wealth of images and data. At the end of its
          mission it actually landed on Eros. The largest asteroid by far is 1
          Ceres. It is 974 km in diameter and contains about 25% of the mass of
          all the asteroids combined. The next largest are 2 Pallas, 4 Vesta and
          10 Hygiea which are between 400 and 525 km in diameter. All other
          known asteroids are less than 340 km across.
        </p>
        <h2 className="header">Interesting Facts about Asteroids</h2>
        <ul>
          <li>
          The size of asteroids varies from the size of a speck of dust to the size of 945 kilometers (587 miles) in diameter! This is the dwarf planet Ceres – the largest discovered asteroid in the solar system.
          </li>
          <li>
          Most of the asteroids orbit the Sun between the orbit of Mars and Jupiter. This area is called the asteroid belt.
          Some of the larger asteroids can also be referred to as planetoids and minor planets. Ceres is the only dwarf planet to still keep its asteroid label.
          </li>
          <li>
          Asteroids are grouped into categories based on their composition – what the asteroids are made from.
          </li>
          <li>
          C-types, called chondrites, are made of clay and silicate rocks. These are by far the most common type of asteroid. These orbit furthest away from the Sun, mostly in the outer belt, so they have not been altered by the Sun’s heat.
          </li>
          <li>
            Like asteroids, comets are leftovers from the formation of the Solar
            System. We don’t know an awful lot about them at this point, but
            scientists believe they may hold clues to how the Solar System came
            to be.
          </li>
          <li>
          S-types, known as siliceous asteroids, are the stony asteroids made up of silicate rocks and nickel-iron mixtures. These are found mostly in the inner Asteroid belt..
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Asteroid;

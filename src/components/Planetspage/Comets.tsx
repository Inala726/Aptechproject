import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Comets = () => {
  return (
    <>
      <Herosection
        heading={"Comet Facts"}
        paragraph={
          "Comets are snowballs made up of frozen gas, rock, and dust that orbit the Sun. As they get closer to the Sun, they heat up and leave a trail of glowing dust and gases."
        }
      />
      <div className="lato-regular body">
        <p>
          Unlike the other small bodies in the solar system, comets have been
          known since antiquity. There are Chinese records of Comet Halley going
          back to at least 240 BC. The famous Bayeux Tapestry, which
          commemorates the Norman Conquest of England in 1066, depicts an
          apparition of Comet Halley.
        </p>
        <h2 className="header">Comet History</h2>
        <p>
          As of 1995, 878 comets have been cataloged and their orbits at least
          roughly calculated. Of these 184 are periodic comets (orbital periods
          less than 200 years); some of the remainder are no doubt periodic as
          well, but their orbits have not been determined with sufficient
          accuracy to tell for sure. Comets are sometimes called dirty snowballs
          or "icy mudballs". They are a mixture of ices (both water and frozen
          gases) and dust that for some reason didn't get incorporated into
          planets when the solar system was formed. This makes them very
          interesting as samples of the early history of the solar system. When
          they are near the Sun and active, comets have several distinct parts:
        </p>
        <ul>
          <li>
            nucleus: relatively solid and stable, mostly ice and gas with a
            small amount of dust and other solids;
          </li>
          <li>
            coma: dense cloud of water, carbon dioxide and other neutral gases
            sublimed from the nucleus;
          </li>
          <li>
            hydrogen cloud: huge (millions of km in diameter) but very sparse
            envelope of neutral hydrogen;
          </li>
          <li>
            dust tail: up to 10 million km long composed of smoke-sized dust
            particles driven off the nucleus by escaping gases; this is the most
            prominent part of a comet to the unaided eye;
          </li>
          <li>
            ion tail: as much as several hundred million km long composed of
            plasma and laced with rays and streamers caused by interactions with
            the solar wind.
          </li>
        </ul>
        Comets are invisible except when they are near the Sun. Most comets have
        highly eccentric orbits which take them far beyond the orbit of Pluto;
        these are seen once and then disappear for millennia. Only the short-
        and intermediate-period comets (like Comet Halley), stay within the
        orbit of Pluto for a significant fraction of their orbits.
        <p>
          After 500 or so passes near the Sun off most of a comet's ice and gas
          is lost leaving a rocky object very much like an asteroid in
          appearance. (Perhaps half of the near-Earth asteroids may be "dead"
          comets.) A comet whose orbit takes it near the Sun is also likely to
          either impact one of the planets or the Sun or to be ejected out of
          the solar system by a close encounter (esp. with Jupiter). By far the
          most famous comet is Comet Halley but SL 9 was a "big hit" for a week
          in the summer of 1994. Meteor shower sometimes occur when the Earth
          passes thru the orbit of a comet. Some occur with great regularity:
          the Perseid meteor shower occurs every year between August 9 and 13
          when the Earth passes thru the orbit of Comet Swift-Tuttle. Comet
          Halley is the source of the Orionid shower in October. Many comets are
          first discovered by amateur astronomers. Since comets are brightest
          when near the Sun, they are usually visible only at sunrise or sunset.
          Charts showing the positions in the sky of some comets can be created
          with a planetarium program.
        </p>
        <h2 className="header">Interesting Facts about Comet</h2>
        <ul>
          <li>
            Comets come from the Kuiper belt and the Oort Cloud. These areas of
            space are way out in the solar system far away from the Sun. The
            Oort cloud is so far away we have never even seen it! The comets
            visible from Earth are most likely ones that came from the closer
            Kuiper belt which is near Pluto.
          </li>
          <li>
            There are millions of comets, and they are all orbiting the Sun.
            Most take less than two hundred years to do so, and others travel
            much slower, potentially taking millions of years to complete an
            orbit.
          </li>
          <li>
            When a comet approaches the inner planets, it is warmed by the Sun.
            When this happens, it begins to melt and throws out dust and gas.
            This creates a head and the tail. The tail is the part of the comet
            we see in the sky. The tail always points away from the Sun. This
            means that sometimes the tail is behind the comet and sometimes it
            in front. It all depends on whether the comet is travelling towards
            or away from the Sun.
          </li>
          <li>
            Travelling through a comet’s tail is not dangerous. Earth even
            passes through them. When this happens, we see a meteor shower!
          </li>
          <li>
            Like asteroids, comets are leftovers from the formation of the Solar
            System. We don’t know an awful lot about them at this point, but
            scientists believe they may hold clues to how the Solar System came
            to be.
          </li>
          <li>
            The most famous comet of all time is Halley’s Comet. Halley is a
            periodic comet and is visible from Earth every 76 years and has been
            for centuries. It made its last appearance in 1986. Other famous
            comets include the Hale-Bopp Comet, Donati’s comet and the
            Shoemaker-Levy 9 Comet.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Comets;

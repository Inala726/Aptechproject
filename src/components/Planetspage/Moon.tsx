import "./Planets.css";
import "../Herosection";
import Herosection from "../Herosection";
import "../fonts.css";
import Footer from "../footer";

// import React from 'react'

const Moon = () => {
  return (
    <>
      <Herosection
        heading={"Moon Facts"}
        paragraph={
          "The only place beyond Earth that humans have explored, the Moon is the largest and brightest object in our sky – responsible for the tides and keeping Earth stable on its axis."
        }
      />
      <div className="lato-regular body">
        <p>
          The Moon, otherwise known as Luna, is the only natural satellite of
          Earth. It was created 4.6 billion years ago, and it is widely accepted
          that it was created when Earth collided with a planet-sized object
          called Theia. It’s the fifth-largest moon in our solar system and is
          the second brightest object in the sky (after the Sun).
        </p>
        <h2 className="header">The Moon Profile</h2>

        <ul className="sun-list">
          <li>orbit: 384,400 km from Earth</li>
          <li>mass: 7.35e22 kg</li>
          <li>diameter: 3476 km</li>
        </ul>
        <h2 className="header">History of the Moon</h2>
        <p>
          Called Luna by the Romans, Selene and Artemis by the Greeks, and many
          other names in other mythologies. The Moon, of course, has been known
          since prehistoric times. It is the second brightest object in the sky
          after the Sun. As the Moon orbits around the Earth once per month, the
          angle between the Earth, the Moon and the Sun changes; we see this as
          the cycle of the Moon’s phases. The time between successive new moons
          is 29.5 days (709 hours), slightly different from the Moon’s orbital
          period (measured against the stars) since the Earth moves a
          significant distance in its orbit around the Sun in that time.
          <br />
          Due to its size and composition, the Moon is sometimes classified as a
          terrestrial “planet” along with Mercury, Venus, Earth and Mars.
        </p>
        <p>
          The Moon was first visited by the Soviet spacecraft Luna 2 in 1959. It
          is the only extraterrestrial body to have been visited by humans. The
          first landing was on July 20, 1969 (do you remember where you were?);
          the last was in December 1972. The Moon is also the only body from
          which samples have been returned to Earth. In the summer of 1994, the
          Moon was very extensively mapped by the little spacecraft Clementine
          and again in 1999 by Lunar Prospector. The gravitational forces
          between the Earth and the Moon cause some interesting effects. The
          most obvious is the tides. The Moon’s gravitational attraction is
          stronger on the side of the Earth nearest to the Moon and weaker on
          the opposite side. Since the Earth, and particularly the oceans, is
          not perfectly rigid it is stretched out along the line toward the
          Moon. From our perspective on the Earth’s surface we see two small
          bulges, one in the direction of the Moon and one directly opposite.
          The effect is much stronger in the ocean water than in the solid crust
          so the water bulges are higher. And because the Earth rotates much
          faster than the Moon moves in its orbit, the bulges move around the
          Earth about once a day giving two high tides per day. (This is a
          greatly simplified model; actual tides, especially near the coasts,
          are much more complicated.)
        </p>
        <p>
          But the Earth is not completely fluid, either. The Earth’s rotation
          carries the Earth’s bulges slightly ahead of the point directly
          beneath the Moon. This means that the force between the Earth and the
          Moon is not exactly along the line between their centers producing a
          torque on the Earth and an accelerating force on the Moon. This causes
          a net transfer of rotational energy from the Earth to the Moon,
          slowing down the Earth’s rotation by about 1.5 milliseconds/century
          and raising the Moon into a higher orbit by about 3.8 centimetres per
          year. (The opposite effect happens to satellites with unusual orbits
          such as Phobos and Triton).
        </p>
        <p>
          The asymmetric nature of this gravitational interaction is also
          responsible for the fact that the Moon rotates synchronously, i.e. it
          is locked in phase with its orbit so that the same side is always
          facing toward the Earth. Just as the Earth’s rotation is now being
          slowed by the Moon’s influence so in the distant past the Moon’s
          rotation was slowed by the action of the Earth, but in that case the
          effect was much stronger. When the Moon’s rotation rate was slowed to
          match its orbital period (such that the bulge always faced toward the
          Earth) there was no longer an off-center torque on the Moon and a
          stable situation was achieved. The same thing has happened to most of
          the other satellites in the solar system. Eventually, the Earth’s
          rotation will be slowed to match the Moon’s period, too, as is the
          case with Pluto and Charon. Actually, the Moon appears to wobble a bit
          (due to its slightly non-circular orbit) so that a few degrees of the
          far side can be seen from time to time, but the majority of the far
          side (left) was completely unknown until the Soviet spacecraft Luna 3
          photographed it in 1959. (Note: there is no “dark side” of the Moon;
          all parts of the Moon get sunlight half the time (except for a few
          deep craters near the poles). Some uses of the term “dark side” in the
          past may have referred to the far side as “dark” in the sense of
          “unknown” (eg “darkest Africa”) but even that meaning is no longer
          valid today!). The Moon has no atmosphere. But evidence from
          Clementine suggested that there may be water ice in some deep craters
          near the Moon’s south pole which are permanently shaded. This has now
          been reinforced by data from Lunar Prospector. There is apparently ice
          at the north pole as well. The Moon’s crust averages 68 km thick and
          varies from essentially 0 under Mare Crisium to 107 km north of the
          crater Korolev on the lunar far side. Below the crust is a mantle and
          probably a small core (roughly 340 km radius and 2% of the Moon’s
          mass). Unlike the Earth, however, the Moon’s interior is no longer
          active. Curiously, the Moon’s center of mass is offset from its
          geometric center by about 2 km in the direction toward the Earth.
          Also, the crust is thinner on the near side. There are two primary
          types of terrain on the Moon: the heavily cratered and very old
          highlands and the relatively smooth and younger maria. The maria
          (which comprise about 16% of the Moon’s surface) are huge impact
          craters that were later flooded by molten lava. Most of the surface is
          covered with regolith, a mixture of fine dust and rocky debris
          produced by meteor impacts. For some unknown reason, the maria are
          concentrated on the near side. Most of the craters on the near side
          are named for famous figures in the history of science such as Tycho,
          Copernicus, and Ptolemaeus. Features on the far side have more modern
          references such as Apollo, Gagarin and Korolev (with a distinctly
          Russian bias since the first images were obtained by Luna 3). In
          addition to the familiar features on the near side, the Moon also has
          the huge craters South Pole-Aitken on the far side which is 2250 km in
          diameter and 12 km deep making it the the largest impact basin in the
          solar system and Orientale on the western limb (as seen from Earth; in
          the center of the image at left) which is a splendid example of a
          multi-ring crater.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Moon;

// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Herosection from "./components/Herosection";
import Course from "./components/Course";
import Footer from "./components/footer";
import PlanetSection from "./components/PlanetSection/PlanetSection";
import Mercury from "./components/Planetspage/Mercury";
import Venus from "./components/Planetspage/Venus";
import Earth from "./components/Planetspage/Earth";
import Mars from "./components/Planetspage/Mars";
import Jupiter from "./components/Planetspage/Jupiter";
import Saturn from "./components/Planetspage/Saturn";
import Uranus from "./components/Planetspage/Uranus";
import Neptune from "./components/Planetspage/Neptune";
import Ceres from "./components/Planetspage/Ceres";
import Pluto from "./components/Planetspage/Pluto";
import Haumea from "./components/Planetspage/Haumea";
import Makemake from "./components/Planetspage/Makemake";
import Eris from "./components/Planetspage/Eris";
import Sun from "./components/Planetspage/Sun";
import Moon from "./components/Planetspage/Moon";
import Comets from "./components/Planetspage/Comets";
import Asteroid from "./components/Planetspage/Asteroid";
import AsteroidBelt from "./components/Planetspage/AsteroidBelt";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Herosection
                heading={"The Nine Planets"}
                bracket={"(We still love you, Pluto!)"}
                paragraph={
                  "An overview of the history, mythology and current scientific knowledge of the planets, moons and other objects in our solar system."
                }
              />
              <div className="ash-text lato-regular">
                <p>
                  The Nine Planets is an encyclopedic overview with facts and
                  information about mythology and current scientific knowledge
                  of the planets, moons, and other objects in our solar system
                  and beyond.
                </p>
              </div>
              <PlanetSection />
              <Course />
              <Footer />
            </>
          }
        />
        {
          <>
            <Route path="/mercury/" element={<Mercury />} />
            <Route path="/venus/" element={<Venus />} />
            <Route path="/earth/" element={<Earth />} />
            <Route path="/mars/" element={<Mars />} />
            <Route path="/jupiter/" element={<Jupiter />} />
            <Route path="/saturn/" element={<Saturn />} />
            <Route path="/uranus/" element={<Uranus />} />
            <Route path="/neptune" element={<Neptune />} />
            <Route path="/ceres" element={<Ceres />} />
            <Route path="/pluto" element={<Pluto />} />
            <Route path="/haumea" element={<Haumea />} />
            <Route path="/makemake" element={<Makemake />} />
            <Route path="/eris" element={<Eris />} />
            <Route path="/sun" element={<Sun />} />
            <Route path="/moon" element={<Moon />} />
            <Route path="/comet" element={<Comets />} />
            <Route path="/asteroid" element={<Asteroid />} />
            <Route path="/asteroidbelt" element={<AsteroidBelt />} />
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import Herosection from "./components/Herosection";
import Course from './components/Course'
import Footer from './components/footer'
    
function App() {
  return (
    <>
  <Herosection heading={"The Nine Planets"} bracket={"We still love you, Pluto!"} paragraph={"An overview of the history, mythology and current scientific knowledge of the planets, moons and other objects in our solar system. "}/>  
  <Course/>
  <Footer/>
    </>
      );
}

export default App;

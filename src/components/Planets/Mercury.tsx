import './Planets.css'
import '../Herosection'
import Herosection from '../Herosection'
import Navbar from '../Navbar'
import logo from '../assets/PngItem_1076085.png'

// import React from 'react'

const Mercury = () => {
  return (
    <>
    <Navbar src={logo} link1={"Planets"} link2={"Solar System"} link3={"Objects"} link4={"Resources"}        
        />
        <Herosection heading={'Mercury Facts'} paragraph={'The planet closest to the Sun, Mercury is the smallest and fastest planet in the solar system -- whipping around the Sun every 88 Earth days.'}/>
    </>
  )
}

export default Mercury
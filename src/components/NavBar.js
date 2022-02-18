import "./css/NavBar.css";
import React, {useState, useEffect} from 'react'
import { FaAlignJustify } from 'react-icons/fa';

import {Link} from "react-scroll"



function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <>
   <nav>
      {(toggleMenu || screenWidth > 600) && (
      <div className="list">
      <Link className="items" to="introduction" onClick={toggleNav} spy={true} offset={-90} smooth={true} duration={1000}>Home</Link>
      <Link className="items" to="about" onClick={toggleNav} spy={true} offset={-90} smooth={true} duration={2000}>About</Link>
      <Link className="items" to="skills" onClick={toggleNav} spy={true} offset={-90} smooth={true} duration={2000}>Skills</Link>
      <Link className="items" to="projects" onClick={toggleNav} spy={true} offset={-60} smooth={true} duration={2000}>Projects</Link>
      <Link className="items" to="contact" onClick={toggleNav} spy={true} offset={-90} smooth={true} duration={2000}>Contact Me</Link>

      
    </div>
      )}

      <button onClick={toggleNav} className="btn"><FaAlignJustify/></button>
    </nav>
   
 
     <br></br>
     <br></br>
    </>
  );
}

export default NavBar;


{/* <nav className="navbar">
<div className="nav-container">
<Link className="navButtons" to="introduction" spy={true} offset={-90} smooth={true} duration={1000}>Home</Link>
<Link className="navButtons" to="about" spy={true} offset={-90} smooth={true} duration={2000}>About</Link>
<Link className="navButtons" to="skills" spy={true} offset={-90} smooth={true} duration={2000}>Skills</Link>
<Link className="navButtons" to="projects" spy={true} offset={-60} smooth={true} duration={2000}>Projects</Link>
<Link className="navButtons" to="contact" spy={true} offset={-90} smooth={true} duration={2000}>Contact Me</Link>
</div>
</nav> */}
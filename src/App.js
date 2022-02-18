import "./App.css";
import NavBar from "./components/NavBar";
import { Intro } from "./components/introduction";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {HashLink as Link}  from "react-router-hash-link" 

function App() {
  return (
    <>
    <>

    </>
    <div className="App">
    <NavBar/>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;

// <div className="App">
//   <NavBar/>
//   {/* <Intro/>
//   <About/>
//   <Skills/>
//   <Projects/>
//   <Contact/> */}
// </div>

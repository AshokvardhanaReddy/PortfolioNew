import "./App.css";
import NavBar from "./components/NavBar";
import { Intro } from "./components/introduction";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <></>
      <div className="App">
        <NavBar />
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

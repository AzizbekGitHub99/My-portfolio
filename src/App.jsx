import React from "react";
import "./App.scss";
import Navbar from "./common/Navbar/Navbar";
import Home from "./common/Sections/Home";
import Contact from "./common/Sections/Contact";
import MySkills from "./common/Sections/MySkills";
import Portfolio from "./common/Sections/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Home />
        <MySkills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;

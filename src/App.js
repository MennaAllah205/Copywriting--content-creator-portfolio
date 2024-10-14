import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import UnpublishedProjects from "./components/UnpublishedProjects.js";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <About />
      <Projects />
      <UnpublishedProjects />
      <Contact />
    </div>
  );
};

export default App;

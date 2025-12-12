import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ColorTest from "./components/ColorTest";
{
  /*import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";*/
}
import ContactCard from "./components/Contact";
import EducationCard from "./components/EducationCard";

function App() {
  return (
    <div className="bg-background min-h-screen w-full relative overflow-hidden">
        <Hero />
        <ColorTest />
        
  </div>
  );
}

export default App;

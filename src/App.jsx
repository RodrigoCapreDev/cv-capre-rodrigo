import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="bg-background min-h-screen w-full relative overflow-hidden">
        <ScrollToTop />
        <Hero />
        <Skills />
        <Projects />
        <Footer />
  </div>
  );
}

export default App;

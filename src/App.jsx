import React from "react";
import Navbar from "./components/NavBar";
import About from "./components/About";
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
    <div className="bg-background dark:bg-background min-h-screen transition-colors">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <About />
        <Education />
        <ColorTest />
        
        {/*
        
        <Experience />
        <Projects />
        <Skills />*/}
        <ContactCard />
      </div>
  </div>
  );
}

export default App;

{
  /*
function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <div className="text-center mb-4">
                <img src={reactLogo} alt="Foto de perfil" className="rounded-circle mb-2" style={{ width: '120px', height: '120px' }} />
                <h2 className="mb-0">Rodrigo Capre</h2>
                <p className="text-muted">Desarrollador Frontend</p>
              </div>
              <hr />
              <h4>Sobre mí</h4>
              <p>
                Soy un desarrollador frontend apasionado por crear experiencias web modernas y funcionales. Tengo experiencia en React, Vite y Bootstrap.
              </p>
              <h4>Experiencia</h4>
              <ul>
                <li>Desarrollador React en Empresa X (2023-2025)</li>
                <li>Freelancer Frontend (2021-2023)</li>
              </ul>
              <h4>Educación</h4>
              <ul>
                <li>Licenciatura en Informática - Universidad Y</li>
              </ul>
              <h4>Contacto</h4>
              <ul>
                <li>Email: rodrigo@email.com</li>
                <li>LinkedIn: linkedin.com/in/rodrigocapre</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/
}

import React, { useState } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CenteredLayout from "./components/CenteredLayout";
import LoadingSequence from "./components/LoadingSequence";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  return (
    <div className="bg-background min-h-screen w-full relative overflow-hidden">
      <ScrollToTop />

      {!loadingComplete ? (
        <CenteredLayout>
          <div className="min-h-screen flex items-center justify-center">
            <LoadingSequence onComplete={() => setLoadingComplete(true)} />
          </div>
        </CenteredLayout>
      ) : (
        <CenteredLayout>
          <ProfileCard />
          <Skills />
          <Projects />
          <Footer />
        </CenteredLayout>
      )}
    </div>
  );
}

export default App;

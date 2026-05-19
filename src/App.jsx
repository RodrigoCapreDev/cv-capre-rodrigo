import React, { useState } from "react";
import Skills from "./components/SkillsSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CenteredLayout from "./components/CenteredLayout";
import LoadingSequence from "./components/LoadingSequence";
import ProfileCard from "./components/ProfileCard";
import AsideControls from "./components/AsideControls";
import Terminal from "./components/Terminal";
import { SectionProvider, useSection } from "./context/SectionContext";
import SkillsSection from "./components/SkillsSection";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const { activeSection } = useSection();
  return (
    <div className="bg-background min-h-screen w-full relative">
      <ScrollToTop />
      {!loadingComplete ? (
        <CenteredLayout>
          <div className="min-h-screen flex items-center justify-center">
            <LoadingSequence onComplete={() => setLoadingComplete(true)} />
          </div>
        </CenteredLayout>
      ) : (
        <>
          <AsideControls />
          <CenteredLayout>
            <Terminal />
            <ProfileCard />
            <SkillsSection />
            <Projects />
            {/*activeSection === 'help' && <HelpPanel />*/}


            {/*
            <Skills />
            <Projects />
            <Hero />
            
            <Footer />*/}
          </CenteredLayout>
        </>

      )}
    </div>
  );
}

export default App;

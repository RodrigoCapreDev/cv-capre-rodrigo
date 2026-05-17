import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
        <>
          <AsideControls />
          <CenteredLayout>
            <ProfileCard />
            <Skills />
            {/*
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

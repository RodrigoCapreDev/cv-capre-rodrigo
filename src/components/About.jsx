function About() {
  return (
    <section id="about" className="mt-5 pt-16 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-background dark:bg-background border border-muted dark:border-muted rounded-xl shadow-sm p-6 md:p-8 grid md:grid-cols-3 gap-6 items-center">
          {/* Avatar / Intro */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-md">
              RC
            </div>
            <h3 className="mt-4 text-lg font-semibold text-text dark:text-white">Rodrigo Capre</h3>
            <p className="mt-1 text-sm text-secondary dark:text-muted">Frontend Developer · React & Tailwind</p>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-text dark:text-white">Sobre mí</h2>
            <p className="mt-3 text-text dark:text-muted leading-relaxed">
              Estudiante avanzado de Ingeniería en Sistemas con experiencia en desarrollo web.
              Me enfoco en construir interfaces accesibles y mantenibles usando React, Vite y
              Tailwind. Disfruto resolver problemas y aprender nuevas tecnologías para aportar en
              equipos de desarrollo.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <div className="text-xs font-medium text-secondary dark:text-muted mb-2">Frontend</div>
                <div className="h-2 bg-background rounded-full overflow-hidden dark:bg-background">
                  <div className="h-2 bg-primary rounded-full w-4/5" />
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-secondary dark:text-muted mb-2">React / Vite</div>
                <div className="h-2 bg-background rounded-full overflow-hidden dark:bg-background">
                  <div className="h-2 bg-accent rounded-full w-3/4" />
                </div>
              </div>

              <div>
                <div className="text-xs font-medium text-secondary dark:text-muted mb-2">Tailwind / CSS</div>
                <div className="h-2 bg-background rounded-full overflow-hidden dark:bg-background">
                  <div className="h-2 bg-secondary rounded-full w-3/5" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/CV-Rodrigo-Capre.pdf"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md text-sm font-medium shadow-sm hover:opacity-90"
              >
                Descargar CV
              </a>
              <a
                href="#contact"
                className="text-sm text-text dark:text-white underline-offset-2 hover:underline"
              >
                Contactame
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

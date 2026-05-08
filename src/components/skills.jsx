import { useLanguage } from "../context/LanguageContext.jsx";

const SKILLS = [
  {
    category: "stackCore",
    label: "CORE",
    skills: "PYTHON / JS / C# / SQL"
  },
  {
    category: "stackWeb",
    label: "WEB",
    skills: "REACT / HTML / DJANGO"
  },
  {
    category: "stackInfra",
    label: "DEVOPS / INFRA",
    skills: "GIT / GITHUB / DOCKER / AZURE / LINUX"
  }
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-between py-20 px-6 md:px-12 bg-background text-text overflow-hidden" id="skills">
      {/* FONDO */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent_70%)] opacity-10"></div>
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 w-full">
        {/* TÍTULO */}
        <div className="mb-16">
          <h2 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
            [ STACK TECNOLÓGICO ]
          </h2>
          <p className="text-lg md:text-2xl font-light text-text/80">
            Herramientas y tecnologías que uso para construir soluciones
          </p>
        </div>

        {/* GRID DE SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SKILLS.map((skill, idx) => (
            <div
              key={idx}
              className="border border-white/10 p-8 rounded-lg hover:border-primary transition-colors group"
              style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: "backwards" }}
            >
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4 group-hover:text-green-400 transition-colors">
                {skill.label}
              </div>
              <div className="text-lg md:text-xl font-light text-text/80 leading-relaxed">
                {skill.skills}
              </div>
            </div>
          ))}
        </div>

        {/* DESCRIPCIÓN ALTERNATIVA */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                Backend
              </h3>
              <p className="text-text/70 leading-relaxed">
                Especializado en arquitectura de APIs robustas y bases de datos escalables. Experiencia con Python, Django y C#.
              </p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
                Frontend
              </h3>
              <p className="text-text/70 leading-relaxed">
                Desarrollo de interfaces modernas y responsivas con React. Énfasis en UX/UI y performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex justify-between items-end mt-16">
        <a
          href="#proyectos"
          className="group flex items-center gap-4 font-mono text-sm cursor-pointer text-muted hover:text-primary transition-colors"
        >
          <span className="text-xl group-hover:translate-y-1 transition-transform text-primary">
            ↓
          </span>
          Ver proyectos
        </a>
      </div>
    </section>
  );
}

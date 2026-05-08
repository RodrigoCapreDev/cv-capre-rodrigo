export const translations = {
  es: {
    // Header
    systemOnline: "SISTEMA_ONLINE",
    role: "DEVELOPER TRAINEE",
    level: "5TO AÑO ING. EN SISTEMAS",

    // Hero Principal
    title1: "SOFTWARE",
    title2: "DEVELOPER",

    // Ficha Técnica
    labelProfile: "( Perfil Profesional )",
    profileDesc: (
      <>
        Estudiante de 5to año de Ingeniería en Sistemas enfocado en el
        desarrollo Fullstack. Experiencia en la creación de aplicaciones
        integrales con React y Django, con fuerte énfasis en la calidad del
        software y la automatización mediante Docker. Busco aplicar mi
        pensamiento lógico y formación técnica en proyectos desafiantes y
        escalables.
        <span className="text-white font-medium"> Python</span>,
        <span className="text-white font-medium"> JavaScript</span> y
        <span className="text-white font-medium"> Azure</span>.
      </>
    ),

    // Stack labels
    stackCore: "LENGUAJES",
    stackWeb: "WEB STACK",
    stackInfra: "DEVOPS / NUBE",

    // Footer
    cta: "[ VER EXPERIENCIA & PROYECTOS ]",
    langLabel: "IDIOMA",

    projectsTitle: "MÓDULOS_DESARROLLADOS",
    projectsSubtitle: "EXPERIENCIA PRÁCTICA & ARQUITECTURA",

    project1: {
      id: "PROY_01",
      name: "SISTEMA DE GESTIÓN DE CAFES",
      type: "FULLSTACK / INFRA",
      desc: "Desarrollé una plataforma integral para la gestión de productos de cafetería. Implementé una API REST con Django REST Framework, un frontend dinámico con React. El diseño fue construido desde cero utilizando CSS moderno con una arquitectura de variables personalizadas. Logré un entorno de despliegue profesional mediante la contenerización con Docker y la configuración de Nginx como servidor de producción y proxy inverso.",
      tech: ["React", "Django", "PostgreSQL", "Docker", "Azure"],
      status: "EN DESARROLLO - PRÓXIMAMENTE DEPLOY",
      linkCode: "VER CÓDIGO",
      linkDemo: "DEPLOY",
    },
  },

  en: {
    // Header
    systemOnline: "SYSTEM_ONLINE",
    role: "TRAINEE DEV",
    level: "4TH YEAR ENG. STUDENT",

    // Hero Principal
    title1: "SOFTWARE",
    title2: "DEVELOPER",

    // Ficha Técnica
    labelProfile: "( Professional Profile )",
    profileDesc: (
      <>
        Advanced Information Systems Engineering student (UTN FRLP) passionate
        about logic. Merging engineering analysis with practical experience in
        <span className="text-white font-medium"> Python</span>,
        <span className="text-white font-medium"> JavaScript</span>, and
        <span className="text-white font-medium"> Azure</span>.
      </>
    ),

    // Stack labels
    stackCore: "LANGUAGES",
    stackWeb: "WEB STACK",
    stackInfra: "DEVOPS / CLOUD",

    // Footer
    cta: "[ VIEW EXPERIENCE & PROJECTS ]",
    langLabel: "LANGUAGE",

    // NEW SECTION: PROJECTS
    projectsTitle: "DEVELOPED_MODULES",
    projectsSubtitle: "PRACTICAL EXPERIENCE & ARCHITECTURE",

    project1: {
      id: "PROJ_01",
      name: "INVENTORY MANAGEMENT SYSTEM",
      type: "FULLSTACK / INFRA",
      desc: "SPA platform for comprehensive stock management. Designed with decoupled architecture (Frontend/Backend) and cloud deployed.",
      tech: ["React", "Django", "PostgreSQL", "Docker", "Azure"],
      status: "COMPLETED",
      linkCode: "VIEW CODE",
      linkDemo: "DEPLOY",
    },
  },
};

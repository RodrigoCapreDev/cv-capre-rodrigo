export const translations = {
  es: {
    profileCommand: "perfil",
    // Ficha Técnica
    labelProfile: "( Perfil Profesional )",
    profileDesc: (
      <>
        Como estudiante de último año de Ingeniería en Sistemas, 
        disfruto el desafío de resolver problemas complejos. 
        Me enfoco en crear soluciones eficientes, involucrándome desde el análisis de las 
        necesidades del sistema hasta la escritura del código. Mi formación técnica en electrónica 
        me dio una base sólida en lógica y troubleshooting que hoy traslado al desarrollo. 
        Soy metódico por naturaleza, tanto para armar arquitecturas como para organizar mi rutina. 
        Fuera de la pantalla, seguro me encuentres entrenando en el gimnasio, inmerso en algún 
        juego de rol y supervivencia, o investigando sobre nuevas tecnologías.
      </>
    ),

    stackCommand: "stack_tecnologico",
    skillsTitle: "Stack Tecnológico",
    skillsSubtitle: "Herramientas, lenguajes y prácticas que definen mi enfoque de desarrollo.",
    // Stack labels
    stackCore: "LENGUAJES",
    stackWeb: "WEB STACK",
    stackInfra: "DEVOPS / NUBE",
    skillsNote:
      "Trabajo con una mirada de ingenieria: entender el problema, definir la estructura correcta, automatizar lo repetible y dejar el sistema facil de mantener.",
    skillsSignal: "signal over decoration",
    skillsFocus: "engineering first",
    skillAreas: [
      {
        code: "/core-systems",
        label: "CORE SYSTEMS",
        summary: "APIs, reglas de negocio, flujo de datos y estructura backend.",
        skills: ["Python", "Django REST", "SQL", "Testing"],
      },
      {
        code: "/delivery-infra",
        label: "DELIVERY / INFRA",
        summary: "Contenedores, despliegue y administracion de entornos.",
        skills: ["Docker", "Azure", "Linux", "Git"],
      },
      {
        code: "/engineering-practice",
        label: "ENGINEERING PRACTICE",
        summary: "Mantenibilidad, automatizacion y organizacion del codigo.",
        skills: ["Refactoring", "Documentation", "Automation", "Reviews"],
      },
    ],

    // Footer
    cta: "[ /cd stack | ls ]",
    langLabel: "IDIOMA",
    projectsTitle: "MÓDULOS_DESARROLLADOS",
    projectsSubtitle: "EXPERIENCIA PRÁCTICA & ARQUITECTURA",
    projectsCommand: "proyectos",

    project1: {
      id: "PROY_01",
      name: "QUICKSOLUTIONS - GESTIÓN DE SERVICIOS",
      type: "FULLSTACK / SERVERLESS",
      desc: "Desarrollé un sistema integral basado en un motor de máquinas de estados para gestionar solicitudes de servicio técnico de principio a fin, garantizando trazabilidad total del ciclo de vida. Implementé la persistencia de datos en la nube utilizando Supabase y configuré una arquitectura serverless con funciones de AWS Lambda para automatizar notificaciones y eventos del sistema.",
      tech: ["React", "Django REST", "Supabase", "AWS Lambda"],
      status: "COMPLETADO",
      github: "https://github.com/QuickSolutionsUTN/Cloud-QuickSolutions",
    },
    project2: {
      id: "PROY_02",
      name: "SISTEMA DE GESTIÓN DE INVENTARIO",
      type: "FULLSTACK / INFRA",
      desc: "Diseñé y desarrollé una aplicación web CRUD para administrar catálogos de productos, incluyendo un panel de administración y una interfaz pública en tiempo real. Construí la comunicación cliente-servidor mediante una API REST y me encargué de la infraestructura: contenericé el entorno con Docker para mayor portabilidad y realicé el despliegue en un servidor Linux en Microsoft Azure, configurando la red y la seguridad.",
      tech: ["React", "Django REST", "PostgreSQL", "Docker", "Azure"],
      status: "COMPLETADO",
      github: "https://github.com/RodrigoCapreDev/Coffee-Management-System",
    }
  },

  en: {

    profileCommand: "profile",
    // Ficha Técnica
    labelProfile: "( Professional Profile )",
    profileDesc: (
      <>
        As a final-year Information Systems Engineering student, 
        I enjoy the challenge of solving complex problems. 
        I focus on creating efficient solutions, getting involved from analyzing 
        system requirements all the way to writing the code. My technical background in 
        electronics gave me a solid foundation in logic and troubleshooting that 
        I now bring into development. I am methodical by nature, whether I'm building architectures 
        or organizing my routine. Off-screen, you'll likely find me working out at the gym, 
        immersed in a survival RPG, or researching new technologies.
      </>
    ),

    // Stack labels
    stackCommand: "tech_stack",
    skillsTitle: "Technology Stack",
    stackCore: "LANGUAGES",
    stackWeb: "WEB STACK",
    stackInfra: "DEVOPS / CLOUD",
    skillsNote:
      "I work with an engineering mindset: understand the problem, define the right structure, automate repeatable work and keep systems easy to maintain.",
    skillsSignal: "signal over decoration",
    skillsFocus: "engineering first",
    skillAreas: [
      {
        code: "/core-systems",
        label: "CORE SYSTEMS",
        summary: "APIs, business rules, data flow and backend structure.",
        skills: ["Python", "Django REST", "SQL", "Testing"],
      },
      {
        code: "/delivery-infra",
        label: "DELIVERY / INFRA",
        summary: "Containers, deployment paths and environment operations.",
        skills: ["Docker", "Azure", "Linux", "Git"],
      },
      {
        code: "/engineering-practice",
        label: "ENGINEERING PRACTICE",
        summary: "Maintainability, automation and code organization.",
        skills: ["Refactoring", "Documentation", "Automation", "Reviews"],
      },
    ],

    // Footer
    cta: "[ VIEW EXPERIENCE & PROJECTS ]",
    langLabel: "LANGUAGE",

    // NEW SECTION: PROJECTS
    projectsTitle: "DEVELOPED_MODULES",
    projectsSubtitle: "PRACTICAL EXPERIENCE & ARCHITECTURE",
    projectsCommand: "projects",

    project1: {
      id: "PROY_01",
      name: "QUICKSOLUTIONS - SERVICE MANAGEMENT",
      type: "FULLSTACK / SERVERLESS",
      desc: "Developed a comprehensive system based on a state machine engine to manage technical service requests from end to end, ensuring full lifecycle traceability. Implemented cloud data persistence using Supabase and configured a serverless architecture with AWS Lambda functions to automate notifications and system events.",
      tech: ["React", "Django REST", "Supabase", "AWS Lambda"],
      status: "COMPLETED",
      github: "https://github.com/QuickSolutionsUTN/Cloud-QuickSolutions",
    },
    project2: {
      id: "PROY_02",
      name: "INVENTORY MANAGEMENT SYSTEM",
      type: "FULLSTACK / INFRA",
      desc: "Designed and developed a CRUD web application to manage product catalogs, including an admin panel and a real-time public interface. Built client-server communication via a REST API and managed the infrastructure: containerized the environment with Docker for portability and deployed it on a Linux server in Microsoft Azure, configuring networking and security.",
      tech: ["React", "Django REST", "PostgreSQL", "Docker", "Azure"],
      status: "COMPLETED",
      github: "https://github.com/RodrigoCapreDev/Coffee-Management-System",
    }
  },
};

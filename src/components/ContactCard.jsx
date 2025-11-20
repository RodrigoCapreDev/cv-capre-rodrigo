import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactCard() {
  const contacts = [
    { label: "Email", icon: FaEnvelope, value: "cv-capre-rodrigo@example.com", link: "mailto:rodrigocapre@gmail.com" },
    { label: "GitHub", icon: FaGithub, value: "github.com/tu-usuario", link: "https://github.com/rodrigocapredev" },
    { label: "LinkedIn", icon: FaLinkedin, value: "linkedin.com/in/tu-usuario", link: "https://linkedin.com/in/rodrigo-capre" },
  ];

  return (
    <section id="contact" className="flex justify-center items-center py-12 bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contacto</h2>
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition transform duration-200 hover:scale-105 rounded-lg cursor-pointer hover:shadow-md"
            >
              {/* Renderizamos el icono correctamente */}
              {c.icon && <c.icon className="text-xl text-blue-600 dark:text-blue-400" />}
              
              <span className="font-semibold text-gray-700 dark:text-gray-200 w-20">{c.label}:</span>
              <span className="text-gray-900 dark:text-white truncate">{c.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactCard;

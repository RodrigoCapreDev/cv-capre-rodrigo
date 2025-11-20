import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function ContactCard() {
  const contacts = [
    {
      label: "Email",
      icon: FaEnvelope,
      value: "cv-capre-rodrigo@example.com",
      link: "mailto:rodrigocapre@gmail.com",
    },
    {
      label: "GitHub",
      icon: FaGithub,
      value: "github.com/tu-usuario",
      link: "https://github.com/rodrigocapredev",
    },
    {
      label: "LinkedIn",
      icon: FaLinkedin,
      value: "linkedin.com/in/tu-usuario",
      link: "https://linkedin.com/in/rodrigo-capre",
    },
  ];

  return (
    <section
      id="contact"
      className="flex justify-center items-center py-12 bg-gray-100 dark:bg-gray-900"
    >
      <div className="card text-bg-secondary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Secondary card title</h5>
          <p classNames="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactCard;

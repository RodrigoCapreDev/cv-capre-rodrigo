import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import styles from "./socialLinks.module.css";
import { FaLinkedin, FaFileAlt } from "react-icons/fa";
import {IoLogoGithub } from "react-icons/io5";

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
  }),
};

export const links = [
  {
    id: "github",
    href: "https://github.com/rodrigocapredev",
    label: "github.com",
    colorClass: styles.github,
    color: "primary",
    icon: (
      <IoLogoGithub className="w-full h-full" />
    ),
    variants: linkVariants,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/rodrigo-capre",
    label: "linkedin.com",
    colorClass: styles.linkedin,
    color: "secondary",
    icon: (
      <FaLinkedin className="w-full h-full" />
    ),
    variants: linkVariants,
  },
  {
    id: "cv",
    href: "/cv.pdf",
    label: "Descargar CV",
    /*sub: "cv_rodrigo.pdf",*/
    colorClass: styles.cv,
    download: false,
    icon: (
      <FaFileAlt className="w-full h-full" />
    ),
    variants: linkVariants,
  },
];

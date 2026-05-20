import { motion } from "framer-motion";
import styles from "./ProfileLinkButton.module.css";

export default function ProfileLinkButton({
  link_id,
  link_href,
  link_colorClass,
  link_label,
  link_sub,
  link_download,
  link_variants,
  link_icon,
}) {
  return (
    <motion.a
      key={link_id}
      href={link_href}
      target={link_download ? undefined : "_blank"}
      rel={link_download ? undefined : "noreferrer"}
      download={link_download ?? undefined}
      variants={link_variants}
      initial="hidden"
      animate="visible"
      className={`${styles.card} ${link_colorClass ?? ""}`}
    >
      <div className={styles.icon}>{link_icon}</div>
      <span className={styles.label}>{link_label}</span>
      {link_sub ? <span className={styles.sub}>{link_sub}</span> : null}
    </motion.a>
  );
}
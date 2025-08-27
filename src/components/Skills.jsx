import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const skills = [
  { key: "javascript", icon: "fab fa-js", level: 90 },
  { key: "react", icon: "fab fa-react", level: 85 },
  { key: "nextjs", icon: "fab fa-node-js", level: 80 },
  { key: "typescript", icon: "fab fa-js", level: 75 },
  { key: "python", icon: "fab fa-python", level: 80 },
  { key: "django", icon: "fas fa-leaf", level: 70 },
  { key: "tailwindcss", icon: "fab fa-css3-alt", level: 80 },
  { key: "git", icon: "fab fa-git-alt", level: 85 },
];

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <section className="skills-section">
      <h2 className="skills-title">{t("skills.title")}</h2>
      <div className="skills-list">
        {skills.map((skill) => (
          <motion.div
            className="skill-card"
            key={skill.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <i className={skill.icon + " skill-icon"}></i>
            <span className="skill-name">{t(`skills.${skill.key}`)}</span>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: skill.level + "%" }}
              ></div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

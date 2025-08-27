import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {t("projects.title")}
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* پروژه اول */}
        <Link
          to="/project/wikiq"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/wikiq.jpg')" }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            />
            <h3>{t("projects.wikiq.title")}</h3>
            <p>{t("projects.wikiq.desc")}</p>
            <div className="project-tech">
              {t("projects.wikiq.tech", { returnObjects: true })
                .slice(0, 3)
                .map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
            </div>
          </motion.div>
        </Link>

        {/* پروژه دوم */}
        <Link
          to="/project/tastecoffee"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/coffee.jpg')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>{t("projects.tastecoffee.title")}</h3>
            <p>{t("projects.tastecoffee.desc")}</p>
            <div className="project-tech">
              {t("projects.tastecoffee.tech", { returnObjects: true })
                .slice(0, 3)
                .map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
            </div>
          </motion.div>
        </Link>

        {/* پروژه سوم */}
        <Link
          to="/project/stopwatch"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <motion.div
            className="project-card"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              scale: 1.04,
              boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="project-image"
              style={{ backgroundImage: "url('/projects/stopwatch.png')" }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
            <h3>{t("projects.stopwatch.title")}</h3>
            <p>{t("projects.stopwatch.desc")}</p>
            <div className="project-tech">
              {t("projects.stopwatch.tech", { returnObjects: true })
                .slice(0, 3)
                .map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
};

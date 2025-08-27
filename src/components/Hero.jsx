import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
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

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 {t("hero.hello")} </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            {t("hero.title")}
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {t("hero.subtitle")}
          </motion.h2>

          <motion.p className="hero-description" variants={fadeInUp}>
            <p style={{ direction: "rtl", textAlign: "right" }}>
              {t("hero.description")}
            </p>
          </motion.p>
          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.portfolio")}
            </motion.a>
            <motion.a
              href="/resume.pdf"
              className="cta-secondary"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginRight: "8px" }}
            >
              <i className="fas fa-file-download" style={{ marginLeft: "6px" }}></i>
              {t("hero.download_resume")}
            </motion.a>
            <motion.a
              href="tel:+989380200564"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contact_me")}
            </motion.a>
          </motion.div>

          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/ronin1777/" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ho3ein_sy17/#"
              target="_blank"
            >
              <i className="fab fa-instagram"> </i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sayahhosein/"
              target="_blank"
            >
              <i className="fab fa-linkedin"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "Guts",
  origin: "🌍 جایی بین یک کافی‌شاپ و ترمینال",
  role: "Fullstack Developer",
  contact: {
    phone: "09380200564",
    email: "hoseincomiser27@gmail.com",
    github: "https://github.com/ronin1777",
  },
  stack: {
    frontend: ["JavaScript", "TypeScript", "React.js", "Next.js"],
    backend: ["Python", "Django", "DRF"],
    tools: ["Tailwind CSS", "Redux", "React Query", "PostgreSQL", "Docker", "Git"],
  },
  traits: [
    "دقت در جزئیات",
    "مهارت در کار با API",
    "تمرکز بر تجربه کاربری",
    "طرفدار حالت تاریک",
  ],
  missionStatement:
    "ایده‌ها را به رابط‌های کاربردی تبدیل می‌کنم و سیستم‌ها را با کیفیت و کارایی بالا توسعه می‌دهم",
  availability: "آماده همکاری",
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">در حال کار روی یک پروژه جذاب!</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

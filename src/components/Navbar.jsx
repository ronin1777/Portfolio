import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
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

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = (section) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      {menuOpen && (
        <div
          className="navbar-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.div>

        <motion.button
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          whileHover={{ scale: 1.2, rotate: 20 }}
          whileTap={{ scale: 0.9, rotate: -20 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </motion.button>

        <div className="lang-switcher" style={{ display: "flex", gap: "8px", alignItems: "center", marginRight: "12px" }}>
          <button
            onClick={() => i18n.changeLanguage("fa")}
            className={i18n.language === "fa" ? "active-lang" : ""}
            style={{ padding: "4px 10px", borderRadius: "20px", border: "none", background: i18n.language === "fa" ? "#22223b" : "#fff", color: i18n.language === "fa" ? "#fff" : "#22223b", cursor: "pointer", fontWeight: "bold" }}
          >
            فارسی
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={i18n.language === "en" ? "active-lang" : ""}
            style={{ padding: "4px 10px", borderRadius: "20px", border: "none", background: i18n.language === "en" ? "#22223b" : "#fff", color: i18n.language === "en" ? "#fff" : "#22223b", cursor: "pointer", fontWeight: "bold" }}
          >
            EN
          </button>
        </div>

        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? "hamburger active" : "hamburger"}></span>
        </button>

        <motion.ul
          className={`nav-links${menuOpen ? " open" : ""}`}
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => handleNavClick("home")}>
              {t("navbar.home")}
            </Link>
          </motion.li>
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => handleNavClick("projects")}>
              {t("navbar.projects")}
            </Link>
          </motion.li>
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" onClick={() => handleNavClick("contact")}>
              {t("navbar.contact")}
            </Link>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </>
  );
};

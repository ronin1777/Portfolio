import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../App.css";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="notfound-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="notfound-title"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {t("notfound.title")}
      </motion.h1>
      <motion.p
        className="notfound-message"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {t("notfound.message")}
      </motion.p>
      <Link to="/" className="notfound-link">
        {t("notfound.back")}
      </Link>
    </motion.div>
  );
};

export default NotFound;

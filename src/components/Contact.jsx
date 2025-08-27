import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVER_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: t("contact.success"),
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: t("contact.error"),
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        {t("contact.title")}
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.name}
          />
          <motion.input
            type="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.email}
          />
          <motion.textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
            value={formData.message}
          />
          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{
              scale: 1.12,
              boxShadow: "0 8px 32px rgba(124,58,237,0.15)",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 300 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting
              ? t("contact.submitting")
              : t("contact.submit")}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              }`}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

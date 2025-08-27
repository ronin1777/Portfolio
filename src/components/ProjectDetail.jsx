import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projectsData = {
  wikiq: {
    title: "WikiQ: Online testing platform and question bank",
    image: "/projects/wikiq.jpg",
    description:
      "A modern SaaS platform built with Next.js and OpenAI integration, featuring real-time AI-powered content generation and analytics.",
    tech: ["Next.js", "react", "TailwindCSS", "django rest framework"],
    link: "https://wikiq.co/",
    startDate: "2025-01-10",
    endDate: "2025-03-15",
    detailsFa:
      "توصه کامل پنل مدیریت برای پلتفرم . \n بهینه سازی کویری های سنگین و افزایش سرعت بارگزاری سیستم \n ریفکتور کدهای قدیمی برای بهبود پایداری و قابلیت نگهداری. \n نوشتن تست های واحد. \n همکاری در چار چوب Agile Scrum.",
    detailsEn:
      "Complete development of management panel for online exams and question bank.\nOptimizing heavy queries and increasing system speed.\nRefactoring legacy code for better stability and maintainability.\nWriting unit tests.\nCollaboration in Agile Scrum.",
  },
  tastecoffee: {
    title: "tastecoffee: coffee e-commerce platform",
    image: "/projects/coffee.jpg",
    description:
      "Designed, developed, and deployed an online coffee store in a cloud environment, focusing on scalability, performance, and SEO optimization.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://taste-coffee.ir",
    startDate: "2024-09-01",
    endDate: "2024-12-20",
    detailsFa:
      "پیاده‌سازی سیستم احراز هویت با JWT + OTP SMS و یکپارچه‌سازی Amazon S3 برای ذخیره‌سازی رسانه‌ها. \n راه‌اندازی Pipeline کامل برای Deployment و کانتینریزه کردن سرویس‌های فرانت‌اند و بک‌اند. \n توسعه فرانت‌اند با استفاده از Next.js 14 و TailwindCSS با تمرکز بر کامپوننت‌های سرور و روتینگ داینامیک با App Router. \n پیاده‌سازی Infinite Scroll برای نمایش نقد و بررسی محصولات و بهینه‌سازی عملکرد صفحات داینامیک.",
    detailsEn:
      "Implemented authentication with JWT + OTP SMS and integrated Amazon S3 for media storage. \n Set up a complete Deployment Pipeline and containerized both frontend and backend services. \n Developed the frontend using Next.js 14 and TailwindCSS with a focus on server components and dynamic routing using the App Router. \n Implemented infinite scroll for product reviews and optimized performance for dynamic pages.",
  },
  stopwatch: {
    title: "Productivity Timer",
    image: "/projects/stopwatch.png",
    description:
      "A sleek productivity timer application with customizable work sessions, statistics tracking, and dark mode support.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    link: "https://productivity-timer.example.com",
    startDate: "2024-06-05",
    endDate: "2024-07-10",
    detailsFa:
      "تایمر بهره‌وری با قابلیت شخصی‌سازی جلسات کاری، آمار و حالت تاریک.",
    detailsEn:
      "Productivity timer with customizable work sessions, statistics tracking, and dark mode support.",
  },
};

import { motion } from "framer-motion";

export const ProjectDetail = () => {
  const { t, i18n } = useTranslation();
  const { projectId } = useParams();
  // تبدیل projectId به فرمت کلیدهای داده و ترجمه
  const normalizedId = projectId.replace(/-/g, "_");
  const project = projectsData[normalizedId];

  if (!project) {
    return <div>{t("projectDetail.notFound")}</div>;
  }

  // ترجمه اطلاعات پروژه
  const projectTitle = t(`projects.${normalizedId}.title`);
  const projectDesc = t(`projects.${normalizedId}.desc`);
  const projectTechRaw = t(`projects.${normalizedId}.tech`, {
    returnObjects: true,
  });
  const projectTech = Array.isArray(projectTechRaw) ? projectTechRaw : [];
  const projectDetails =
    i18n.language === "fa" ? project.detailsFa : project.detailsEn;
  // اگر توضیحات چند خطی باشد، هر خط را جداگانه نمایش بده
  const detailsList = projectDetails.split("\n");

  return (
    <motion.section
      className="project-detail-modern"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="project-detail-modern-image">
        <motion.img
          src={project.image}
          alt={projectTitle}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
      </div>
      <div className="project-detail-modern-info">
        <motion.h2
          className="project-detail-modern-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {projectTitle}
        </motion.h2>
        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-detail-modern-link"
          whileHover={{ scale: 1.08, color: "var(--primary-color)" }}
        >
          {t("projectDetail.viewProject")}
        </motion.a>
        <div className="project-detail-modern-meta">
          <div>
            <span className="meta-label">{t("projectDetail.startDate")}</span>{" "}
            {project.startDate}
          </div>
          <div>
            <span className="meta-label">{t("projectDetail.endDate")}</span>{" "}
            {project.endDate}
          </div>
        </div>
        <motion.p
          className="project-detail-modern-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {projectDesc}
        </motion.p>
        <motion.div
          className="project-detail-modern-blueprint"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3>{t("projectDetail.descTitle")}</h3>
          <ul
            style={{
              paddingRight: "1.2rem",
              margin: 0,
              direction: i18n.language === "fa" ? "rtl" : "ltr",
              textAlign: i18n.language === "fa" ? "right" : "left",
            }}
          >
            {detailsList.map((item, idx) => (
              <li
                key={idx}
                style={{
                  marginBottom: "0.5rem",
                  lineHeight: "1.7",
                  listStylePosition:
                    i18n.language === "fa" ? "inside" : "outside",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="project-detail-modern-tech"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3>{t("projectDetail.techTitle")}</h3>
          <div className="project-modern-tech-list">
            {projectTech.map((tech) => (
              <motion.span
                key={tech}
                className="project-modern-tech-item"
                whileHover={{
                  scale: 1.12,
                  background: "var(--accent-color)",
                  color: "#fff",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

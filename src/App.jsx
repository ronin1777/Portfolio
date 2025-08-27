import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { AnimatedPage } from "./components/AnimatedPage";
import { Contact } from "./components/Contact";
import { ProjectDetail } from "./components/ProjectDetail";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_ID);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <div className={`app ${isLoaded ? "loaded" : ""}`}>
          <Routes>
            <Route
              path="/"
              element={
                <AnimatedPage>
                  <Hero />
                  <Skills />
                  <Projects />
                  <Contact />
                </AnimatedPage>
              }
            />
            <Route
              path="/project/:projectId"
              element={
                <AnimatedPage>
                  <ProjectDetail />
                </AnimatedPage>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <motion.footer
            className="footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p> &copy; 2025 PedroTech. All rights reserved.</p>
          </motion.footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

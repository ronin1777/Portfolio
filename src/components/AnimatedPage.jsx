import { motion } from "framer-motion";

export const AnimatedPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    style={{ minHeight: "100vh" }}
  >
    {children}
  </motion.div>
);

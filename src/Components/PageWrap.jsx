

import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageWrap = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="min-h-screen bg-white dark:bg-[var(--q9x-black)]"
  >
    {children}
  </motion.div>
);

export default PageWrap;
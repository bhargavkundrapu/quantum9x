

import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const PageWrap = ({ children }) => (
  <motion.div
    key={useLocation().pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="min-h-screen bg-white dark:bg-[var(--q9x-black)] text-slate-900 dark:text-white"
  >
    {children}
  </motion.div>
);

export default PageWrap;
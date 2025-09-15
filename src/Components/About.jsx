
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const About = () => (
  <section id="about" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">About Us</h2>
        <p className="mt-3 text-slate-700 dark:text-white/80 max-w-3xl">
          We are an EdTech focused on outcomes. Our curriculum blends fundamentals with project‑based learning, delivered through live sessions and an active community. We help students transition from theory to real‑world engineering roles.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {["Outcome‑based", "Mentor‑led", "Portfolio‑driven"].map((k, i) => (
            <motion.div key={k} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 p-5">
              <p className="text-slate-900 dark:text-white font-medium">{k}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);


export default About;
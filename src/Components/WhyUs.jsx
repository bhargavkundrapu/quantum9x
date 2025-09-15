
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";

const WhyUs = () => (
  <section id="why" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Why Choose Us</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { h: "Job‑Ready Syllabus", p: "Curated for top product companies with constant updates." },
            { h: "Hands‑on Practice", p: "Weekly assignments, pair programming & code reviews." },
            { h: "Career Services", p: "Resume clinics, mock interviews, and referral network." },
          ].map((f, i) => (
            <motion.div key={f.h} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-[var(--q9x-red)]/20 blur-xl opacity-60 group-hover:opacity-80 transition" />
              <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 p-6 min-h-[160px]">
                <h3 className="text-slate-900 dark:text-white font-semibold">{f.h}</h3>
                <p className="text-slate-700 dark:text-white/80 mt-2 text-sm">{f.p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);

export default WhyUs;
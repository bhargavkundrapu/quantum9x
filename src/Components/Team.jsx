
import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Container from "./Container";

const Team = () => {
  const team = [
    { name: "Alice Rao", role: "Frontend Mentor", img: "https://via.placeholder.com/150", ig: "#" },
    { name: "Rahul Mehta", role: "Backend Architect", img: "https://via.placeholder.com/150", ig: "#" },
    { name: "Sneha Iyer", role: "Career Coach", img: "https://via.placeholder.com/150", ig: "#" },
    { name: "Vikram Shah", role: "DSA Instructor", img: "https://via.placeholder.com/150", ig: "#" },
    { name: "Meera N", role: "Full‑Stack Mentor", img: "https://via.placeholder.com/150", ig: "#" },
    { name: "Harish Gupta", role: "Placement Lead", img: "https://via.placeholder.com/150", ig: "#" },
  ];
  return (
    <section id="team" className="relative">
      <Container className="py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Meet Our Quantum Team</h2>
          <p className="text-slate-700 dark:text-white/80 mt-2">Engineers, coaches, and career experts guiding you to offers.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 text-center">
                <img src={m.img} alt={m.name} className="mx-auto h-24 w-24 rounded-full object-cover" />
                <h3 className="mt-4 text-slate-900 dark:text-white font-semibold">{m.name}</h3>
                <p className="text-slate-700 dark:text-white/70 text-sm">{m.role}</p>
                <a href={m.ig} target="_blank" rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] transition-transform hover:-translate-y-1">
                  <Instagram size={16} className="mr-2"/> 
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;

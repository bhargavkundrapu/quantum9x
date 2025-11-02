import { motion } from "framer-motion";
import Container from "./Container";







const Advantages = () => (
<section id="advantages" className="relative">
<Container className="py-16 lg:py-24">
<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
<h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Our Advantages</h2>
<div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
{[
{ h: "Daily AI Tool Series", p: "Bite‑size tips to stay ahead." },
{ h: "Resume Building", p: "ATS‑friendly, recruiter‑ready." },
{ h: "Hackathon Services", p: "Teams, ideas & mentorship." },
{ h: "Internship Assurance", p: "Practical exposure guaranteed." },
{ h: "Portfolio Builder", p: "Ship projects that stand out." },
].map((f, i) => (
<motion.div key={f.h} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group relative">
<div className="absolute -inset-0.5 rounded-2xl bg-[var(--q9x-red)]/20 blur-xl opacity-60 group-hover:opacity-80 transition" />
<div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 p-6 min-h-[140px]">
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

export default Advantages;
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import HeaderSection from "./Headersection";
import Footer from "./Footer";
import Q9XModal from "./Q9XModal";
import React from "react";
import {} from "react";






const Internship = () => {
const [selected, setSelected] = useState(null);
const internships = [
{
title: "Frontend Internship",
duration: "8 weeks",
note: "React, Tailwind, projects",
details: {
overview: "Work with our mentors to build production‑ready React components and ship a portfolio project.",
responsibilities: [
"Implement responsive UI with React + Tailwind",
"Integrate APIs and handle state",
"Collaborate on code reviews and Git workflow",
],
stipend: "₹8,000 – ₹12,000",
mode: "Remote / Hybrid",
location: "Vizag / Remote",
},
},
{
title: "Backend Internship",
duration: "10 weeks",
note: "Node, MongoDB, APIs",
details: {
overview: "Design and build REST APIs, explore authentication, and deploy serverless functions.",
responsibilities: [
"Build secure endpoints with Node/Express",
"Design MongoDB schemas & aggregations",
"Write tests and monitor logs",
],
stipend: "₹10,000 – ₹15,000",
mode: "Remote / Hybrid",
location: "Vizag / Remote",
},
},
];
return (
<main className="relative">
<HeaderSection heading="Internships" sub="Explore openings. Click a card to see full details." />
<Container className="pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{internships.map((it, i) => (
<motion.div
key={it.title}
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.06 }}
className="group relative"
>
<div className="absolute -inset-0.5 rounded-2xl bg-[var(--q9x-red-600)]/25 opacity-60 blur-xl group-hover:opacity-90 transition" />
<div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 min-h-[200px] flex flex-col">
<h3 className="text-slate-900 dark:text-white font-semibold text-lg">{it.title}</h3>
<p className="text-slate-700 dark:text-white/75 text-sm mt-1">Duration: {it.duration}</p>
<p className="text-slate-700 dark:text-white/75 text-sm">{it.note}</p>


<button
onClick={() => setSelected(it)}
className="mt-auto inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[var(--q9x-red)] px-4 py-2 text-white text-sm hover:translate-y-[-2px] transition"
>
Explore Now
</button>
</div>
</motion.div>
))}
</Container>
<Footer />
<Q9XModal open={!!selected} onClose={() => setSelected(null)} title={selected?.title}>
{selected && (
<div className="space-y-3">
<p className="text-slate-800 dark:text-white/80"><strong>Overview:</strong> {selected.details.overview}</p>
<div>
<p className="font-semibold text-slate-900 dark:text-white">Responsibilities</p>
<ul className="mt-1 list-disc pl-5 text-sm text-slate-700 dark:text-white/75">
{selected.details.responsibilities.map((r) => <li key={r}>{r}</li>)}
</ul>
</div>
<div className="grid sm:grid-cols-3 gap-3 text-sm">
<div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-3"><span className="block text-xs uppercase text-slate-700 dark:text-white/60">Stipend</span><span className="font-medium">{selected.details.stipend}</span></div>
<div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-3"><span className="block text-xs uppercase text-slate-700 dark:text-white/60">Mode</span><span className="font-medium">{selected.details.mode}</span></div>
<div className="rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-3"><span className="block text-xs uppercase text-slate-700 dark:text-white/60">Location</span><span className="font-medium">{selected.details.location}</span></div>
</div>
<div className="flex gap-3 pt-1">
<button onClick={() => setSelected(null)} className="inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 px-4 py-2 text-sm text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5">Close</button>

</div>
</div>
)}
</Q9XModal>
</main>
);
};

export default Internship;
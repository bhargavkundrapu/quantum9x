import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative z-0 overflow-hidden">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--q9x-red)]/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-[var(--q9x-red-600)]/20 blur-3xl" />

      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-[10px] sm:text-xs tracking-widest uppercase text-slate-700 dark:text-white/70">EdTech • Online IT Courses</span>
            <h1 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
              Crack Your <span className="text-[var(--q9x-red-600)]">Software Job</span> Faster
            </h1>
            <p className="mt-4 text-slate-700 dark:text-white/80 max-w-prose">
              Industry‑ready Coding,Programming, Full‑Stack, and Data tracks with live mentorship, job‑oriented projects, and interview prep. Built by engineers. Loved by learners.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => navigate("/courses")}
                className="group relative z-[5] inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-white transition border border-black/10 dark:border-white/10 bg-[var(--q9x-red)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_-12px_rgba(217,4,41,0.6)]">
                Explore Courses <ArrowRight className="transition group-hover:translate-x-1" size={18} />
              </button>
              <a href="#why" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-slate-900 dark:text-white transition border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">Why Choose Us</a>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="grid sm:grid-cols-2 gap-4 relative">
            <InfoCard title="Live Mentorship" text="Doubts cleared 1:1 by senior developers." z="z-30" />
            <InfoCard title="Real Projects" text="Ship capstones that recruiters love." z="z-20" delay={0.05} />
            <InfoCard title="Interview Prep" text="DSA, system design & mock interviews." z="z-10" delay={0.1} />
            <InfoCard title="Placement Training" text="Aptitude,Resume, referrals & career guidance." z="z-0" delay={0.15} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

const InfoCard = ({ title, text, z = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`relative ${z}`}
  >
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[var(--q9x-red-600)]/50 to-transparent opacity-60 blur group-hover:opacity-80 transition" />
    <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 p-5 backdrop-blur-sm hover:bg-black/[.06] dark:hover:bg-white/10 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-slate-900 dark:text-white font-semibold">{title}</h3>
      <p className="text-slate-700 dark:text-white/80 text-sm mt-1">{text}</p>
    </div>
  </motion.div>
);

export default Hero;

import { motion } from "framer-motion";
import Container from "./Container";
import Footer from "./Footer";






const CoursesPage = () => {
  const courses = [
    { title: "React + Vite Mastery", level: "Beginner–Advanced", hrs: 40, badge: "Placement Focus" },
    { title: "Full‑Stack MERN", level: "Intermediate", hrs: 80, badge: "Capstone" },
    { title: "Data Structures & Algos", level: "All Levels", hrs: 50, badge: "Interview" },
    { title: "System Design Essentials", level: "Advanced", hrs: 25, badge: "Interview" },
  ];
  return (
    <main className="relative">
      <HeaderSection heading="Courses" sub="Curated paths to land your software job." />
      <Container className="pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c, idx) => (
          <motion.div key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.06 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-2xl bg-[var(--q9x-red-600)]/25 opacity-60 blur-xl group-hover:opacity-90 transition" />
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 flex flex-col gap-4 min-h-[220px]">
              <div className="flex items-center justify-between">
                <h3 className="text-slate-900 dark:text-white font-semibold text-lg">{c.title}</h3>
                <span className="text-[10px] uppercase tracking-widest rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/50 px-2 py-1 text-slate-700 dark:text-white/80">{c.badge}</span>
              </div>
              <p className="text-slate-700 dark:text-white/75 text-sm">Level: {c.level}</p>
              <p className="text-slate-700 dark:text-white/75 text-sm">Hours: {c.hrs}+</p>
              <button className="mt-auto inline-flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 bg-[var(--q9x-red)] px-4 py-2 text-white text-sm hover:translate-y-[-2px] transition">
                Enroll Now
              </button>
            </div>
          </motion.div>
        ))}
      </Container>
      <Footer />
    </main>
  );
};

const HeaderSection = ({ heading, sub }) => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[var(--q9x-red)]/20 blur-3xl" />
    <Container className="pt-14 pb-10 sm:pt-20 sm:pb-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">{heading}</h1>
        <p className="mt-3 text-slate-700 dark:text-white/80 max-w-2xl">{sub}</p>
      </motion.div>
    </Container>
  </section>
);
export { CoursesPage, HeaderSection };

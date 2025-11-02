import { motion } from "framer-motion";
import Container from "./Container";    
const Achievements = () => (
  <section id="achievements" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Achievements
        </h2>
        <p className="mt-2 text-slate-700 dark:text-white/80">
          Wins from hackathons, batches completed, and learners trained.
        </p>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { h: "Hackathon Wins", v: "12+" },
            { h: "Batches Completed", v: "25+" },
            { h: "Students Trained", v: "1,200+" },
            { h: "Partner Orgs", v: "15+" },
          ].map((s) => (
            <div
              key={s.h}
              className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 text-center"
            >
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-slate-700 dark:text-white/60">
                {s.h}
              </div>
            </div>
          ))}
        </div>

        {/* Simple gallery placeholders */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-video rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 grid place-items-center text-slate-700 dark:text-white/60 text-sm"
            >
              Video/Photo {n}
            </div>
          ))}
        </div>
      </motion.div>
    </Container>
  </section>
);
 export default Achievements;
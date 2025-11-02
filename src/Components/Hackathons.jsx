import { motion } from "framer-motion";
import Container from "./Container";
import HeaderSection from "./Headersection";
import Footer from "./Footer";







const HackathonsPage = () => {
  const list = [
    { title: "Q9X Spring Hack 2026", when: "May 10–12", note: "Team formation, mentors, prizes" },
    { title: "AI Tools Sprint", when: "June 3–4", note: "Build with LLMs & deploy" },
  ];
  return (
    <main className="relative">
      <HeaderSection heading="Hackathons" sub="We upload all upcoming tasks and events here." />
      <Container className="pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6"
          >
            <h3 className="text-slate-900 dark:text-white font-semibold">{h.title}</h3>
            <p className="text-slate-700 dark:text-white/80 text-sm mt-1">{h.when}</p>
            <p className="text-slate-700 dark:text-white/80 text-sm mt-1">{h.note}</p>
            
          </motion.div>
        ))}
      </Container>
      <Footer />
    </main>
  );
};

export default HackathonsPage;
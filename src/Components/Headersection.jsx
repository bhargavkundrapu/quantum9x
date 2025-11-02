import { motion } from "framer-motion";
import Container from "./Container";




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
export default HeaderSection;
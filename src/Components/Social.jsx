import { motion } from "framer-motion";
import React from "react";
import { Instagram, Youtube, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import Container from "./Container";


const Social = () => (
  <section id="social" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Follow Us</h2>
        <p className="text-slate-700 dark:text-white/80 mt-2">Join our community. We share tips, hiring alerts, and live sessions.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <SocialCard icon={<Instagram />} label="Instagram" href="https://www.instagram.com/quantum9x?utm_source=ig_web_button_share_sheet&igsh=MTE2a2s2YjE3eDNybQ=="/>
          <SocialCard icon={<Youtube />} label="YouTube" href="https://www.youtube.com/@Quantum9X"/>
          <SocialCard icon={<Linkedin />} label="LinkedIn" href="#"/>
          <SocialCard icon={<Twitter />} label="X (Twitter)" href="#"/>
          <SocialCard icon={<Facebook />} label="Facebook" href="#"/>
        </div>
      </motion.div>
    </Container>
  </section>
);

const SocialCard = ({ icon, label, href }) => (
  <a href={href} target="_blank" rel="noreferrer"
     className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 flex items-center justify-between hover:bg-white/80 dark:hover:bg-white/10 transition has-[svg]:text-slate-900 dark:has-[svg]:text-white">
    <span className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-medium">{icon} {label}</span>
    <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
  </a>
);
export { Social, SocialCard };

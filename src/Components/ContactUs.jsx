
import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import Container from "./Container";
import Footer from "./Footer";
import { SocialCard } from "./Social";
import { HeaderSection } from "./Courses";




const ContactPage = () => {
  return (
    <main className="relative">
      <HeaderSection headingstart="Contact" heading=" Us" sub="We usually respond within one business day." />
      <Container className="pb-20 grid lg:grid-cols-2 gap-8">
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll reach out soon."); }}
          className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="First Name" id="first" placeholder="Name" />
            <Input label="Last Name" id="last" placeholder="Last Name" />
            <Input label="Email" id="email" type="email" placeholder="you@example.com" className="sm:col-span-2" />
            <Input label="Phone" id="phone" type="tel" placeholder="+91 9xxxxxxxxx" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <Label htmlFor="msg">Message</Label>
              <textarea id="msg" className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--q9x-red-600)]" rows={5} placeholder="Tell us about your goals..." />
            </div>
          </div>
          <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-white/10 bg-[var(--q9x-red)] px-5 py-3 text-white text-sm hover:translate-y-[-2px] transition">
            Send Message
          </button>
        </motion.form>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6">
          <h3 className="text-slate-900 dark:text-white font-semibold text-lg">Reach Us</h3>
          <p className="text-slate-700 dark:text-white/80 mt-2 text-sm">Email:thanushmohan69@gmail.com</p>
          <p className="text-slate-700 dark:text-white/80 text-sm">Phone:+91 8019234832</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <SocialCard icon={<Instagram />} label="Instagram" href="https://www.instagram.com/quantum9x?utm_source=ig_web_button_share_sheet&igsh=MTE2a2s2YjE3eDNybQ==" />
            <SocialCard icon={<Linkedin />} label="LinkedIn" href="#" />
            <SocialCard icon={<Youtube />} label="YouTube" href="https://www.youtube.com/@Quantum9X" />
          </div>
        </motion.div>
      </Container>
      <Footer />
    </main>
  );
};

const Label = (props) => (
  <label className="text-xs uppercase tracking-wide text-slate-700 dark:text-white/70" {...props} />
);
const Input = ({ label, className = "", ...rest }) => (
  <div className={`flex flex-col ${className}`}>
    <Label htmlFor={rest.id}>{label}</Label>
    <input {...rest} className="mt-1 w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black/40 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--q9x-red-600)]" />
  </div>
);
;
export default ContactPage ;
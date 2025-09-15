
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { Menu, X, ChevronRight, Users,DollarSign, Award, BookOpen, Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, Play, Star, Check, ArrowRight, Code, Briefcase, TrendingUp } from 'lucide-react';

const WhyUs = () => (
  <section id="why" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Why Choose Us</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { h: "Expert Instructors", p: "Learn from  top tech members ." , icon: Award },
            { h: "Hands‑on Practice", p: "Weekly assignments, pair programming & code reviews.", icon: Code },
            { h: "Comprehensive Curriculum", p: "Resume clinics and referral network.", icon: BookOpen },
            { h: "Community Support", p: "Join a vibrant community of learners and get help whenever you need it.", icon: Users },
            { h: "Fast-Track Learning", p: "Accelerated learning paths designed to get you job-ready in months, not years.", icon: Zap },
            { h: "Affordable Pricing", p: "High-quality education at afordable Price", icon: DollarSign }
          ].map((f, i) => (
            <motion.div key={f.h} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="group relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-[var(--q9x-red)]/20 blur-xl opacity-60 group-hover:opacity-80 transition" />
              <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-black/[.03] dark:bg-white/5 p-6 min-h-[160px]">
                <f.icon className="w-8 h-8 text-[var(--q9x-red)] mb-4" />
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

export default WhyUs;
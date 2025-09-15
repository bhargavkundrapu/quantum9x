
import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import { Menu, X, ChevronRight, Users, Award, BookOpen, Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Sun, Moon, Play, Star, Check, ArrowRight, Code, Briefcase, TrendingUp } from 'lucide-react';

const About = () => (
  <section id="about" className="relative">
    <Container className="py-16 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">About Us</h2>
        <p className="mt-3 text-slate-700 dark:text-white/80 max-w-3xl">
         We're revolutionizing tech education by bridging the gap between academic learning and industry requirements.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
         <div className="group transform hover:scale-105 transition-all duration-300">
              <div className={`p-6 rounded-2xl bg-black/50 shadow-xl hover:shadow-2xl`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white font-bold ">
                    Industry-Focused Curriculum
                  </h3>
                </div>
                <p className="text-gray-300">
                  Our courses are designed by industry experts and updated regularly to match current market demands.
                </p>
              </div>
          </div>
           <div className="group transform hover:scale-105 transition-all duration-300">
              <div className={`p-6 rounded-2xl bg-black/50 shadow-xl hover:shadow-2xl`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white font-bold ">
                    Personalized Learning
                  </h3>
                </div>
                <p className="text-gray-300">
                  Get one-on-one mentorship and personalized learning paths tailored to your career goals.
                </p>
              </div>
            </div>

            <div className="group transform hover:scale-105 transition-all duration-300">
              <div className={`p-6 rounded-2xl bg-black/50 shadow-xl hover:shadow-2xl`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white font-bold ">
                    Job Placement Support
                  </h3>
                </div>
                <p className="text-gray-300">
                  Comprehensive job placement assistance including resume building, interview prep, and direct company referrals.
                </p>
              </div>
            </div>

        </div>
      </motion.div>
    </Container>
  </section>
);


export default About;
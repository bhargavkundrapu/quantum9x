import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";

const CoursesPage = () => {
  const courses = [
    {
      title: "Python Programming",
      duration: "2 Months",
      level: "Beginner to Advanced",
      price: "₹1,999",
      originalPrice: "₹3,999",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="12" fill="#1e293b" opacity="0.4" />
          <rect x="25" y="15" width="150" height="90" rx="6" fill="#0f172a" stroke="#334155" strokeWidth="2" />
          <circle cx="37" cy="27" r="3" fill="#ef4444" />
          <circle cx="47" cy="27" r="3" fill="#fbbf24" />
          <circle cx="57" cy="27" r="3" fill="#22c55e" />
          <g transform="translate(100, 60) scale(1.1)">
            <path d="M-10 -25 C-25 -25 -25 -10 -25 -10 L-25 -2 C-25 -2 -25 5 -18 5 L-10 5 L-10 -2 C-10 -2 -10 -10 -2 -10 L10 -10 C10 -10 10 -25 -10 -25 Z" fill="#38bdf8" />
            <circle cx="-16" cy="-18" r="1.5" fill="#0f172a" />
            <path d="M10 25 C25 25 25 10 25 10 L25 2 C25 2 25 -5 18 -5 L10 -5 L10 2 C10 2 10 10 2 10 L-10 10 C-10 10 -10 25 10 25 Z" fill="#eab308" />
            <circle cx="16" cy="18" r="1.5" fill="#0f172a" />
          </g>
          <text x="35" y="55" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">&gt;&gt;&gt;</text>
          <text x="35" y="70" fill="#eab308" fontSize="10" fontFamily="monospace">import math</text>
          <text x="35" y="85" fill="#22c55e" fontSize="10" fontFamily="monospace">print("Success")</text>
        </svg>
      ),
      features: ["Python Core & OOPs", "Data Structures & Algorithms", "File Handling & Modules", "Real-world Projects"],
      rating: 4.8,
      students: "120+",
      coursetype: "Programming"
    },
    {
      title: "Artificial Intelligence & ML (AIML)",
      duration: "4 Months",
      level: "Intermediate to Advanced",
      price: "₹5,999",
      originalPrice: "₹9,999",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="12" fill="#1e293b" opacity="0.4" />
          <circle cx="100" cy="60" r="35" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="100" cy="60" r="22" fill="none" stroke="#a855f7" strokeWidth="1" />
          <g stroke="#a855f7" strokeWidth="1.5">
            <line x1="80" y1="45" x2="100" y2="35" />
            <line x1="100" y1="35" x2="120" y2="45" />
            <line x1="120" y1="45" x2="125" y2="60" />
            <line x1="125" y1="60" x2="115" y2="75" />
            <line x1="115" y1="75" x2="100" y2="85" />
            <line x1="100" y1="85" x2="85" y2="75" />
            <line x1="85" y1="75" x2="75" y2="60" />
            <line x1="75" y1="60" x2="80" y2="45" />
            <line x1="100" y1="35" x2="100" y2="85" />
            <line x1="75" y1="60" x2="125" y2="60" />
          </g>
          <circle cx="100" cy="35" r="4.5" fill="#f43f5e" />
          <circle cx="80" cy="45" r="4.5" fill="#6366f1" />
          <circle cx="120" cy="45" r="4.5" fill="#3b82f6" />
          <circle cx="75" cy="60" r="4.5" fill="#10b981" />
          <circle cx="125" cy="60" r="4.5" fill="#eab308" />
          <circle cx="85" cy="75" r="4.5" fill="#a855f7" />
          <circle cx="115" cy="75" r="4.5" fill="#06b6d4" />
          <circle cx="100" cy="85" r="4.5" fill="#ec4899" />
          <path d="M40 60 H70" stroke="#10b981" strokeWidth="2" strokeDasharray="4 2" />
          <path d="M130 60 H160" stroke="#eab308" strokeWidth="2" strokeDasharray="4 2" />
          <circle cx="55" cy="60" r="2" fill="#10b981" />
          <circle cx="145" cy="60" r="2" fill="#eab308" />
        </svg>
      ),
      features: ["Data Analysis & Visualization", "Supervised & Unsupervised Learning", "Neural Networks & TensorFlow", "AI Agent Development"],
      rating: 4.9,
      students: "50+",
      coursetype: "Future Tech"
    },
    {
      title: "Full Stack Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹9,999",
      originalPrice: "₹14,999",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="12" fill="#1e293b" opacity="0.4" />
          <g transform="translate(20, 15)">
            <rect x="0" y="0" width="105" height="58" rx="4" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
            <rect x="5" y="7" width="95" height="44" rx="2" fill="#0f172a" />
            <rect x="10" y="12" width="30" height="15" rx="1.5" fill="#3b82f6" opacity="0.8" />
            <rect x="46" y="12" width="42" height="4" rx="1" fill="#94a3b8" />
            <rect x="46" y="20" width="32" height="4" rx="1" fill="#94a3b8" />
            <circle cx="15" cy="36" r="3.5" fill="#ef4444" />
            <circle cx="25" cy="36" r="3.5" fill="#10b981" />
            <circle cx="35" cy="36" r="3.5" fill="#eab308" />
          </g>
          <g transform="translate(85, 45)">
            <rect x="0" y="0" width="90" height="58" rx="4" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.5" />
            <g transform="translate(48, 10)">
              <ellipse cx="15" cy="8" rx="12" ry="3.5" fill="#f43f5e" />
              <path d="M3 8 V16 C3 18 27 18 27 16 V8" fill="#f43f5e" opacity="0.8" />
              <ellipse cx="15" cy="16" rx="12" ry="3.5" fill="#f43f5e" />
              <path d="M3 16 V24 C3 26 27 26 27 24 V16" fill="#f43f5e" opacity="0.6" />
              <ellipse cx="15" cy="24" rx="12" ry="3.5" fill="#f43f5e" />
            </g>
            <rect x="8" y="14" width="22" height="4" rx="1" fill="#10b981" />
            <rect x="8" y="22" width="28" height="4" rx="1" fill="#6366f1" />
            <rect x="8" y="30" width="18" height="4" rx="1" fill="#94a3b8" />
          </g>
          <path d="M105 45 L95 60" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M120 45 L130 60" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      features: ["React.js & Tailwind CSS", "Node.js & Express APIs", "MongoDB & SQL Databases", "Cloud Deployment & Git"],
      rating: 4.9,
      students: "90+",
      coursetype: "Job Prep"
    },
    {
      title: "Cybersecurity",
      duration: "3 Months",
      level: "Beginner to Intermediate",
      price: "₹3,499",
      originalPrice: "₹6,999",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="12" fill="#1e293b" opacity="0.4" />
          <text x="15" y="30" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">0100101</text>
          <text x="15" y="55" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">1101010</text>
          <text x="15" y="80" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">0011001</text>
          <text x="145" y="30" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">1011011</text>
          <text x="145" y="55" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">0100110</text>
          <text x="145" y="80" fill="#10b981" fontSize="8" fontFamily="monospace" opacity="0.15">1110100</text>
          <g transform="translate(100, 60)">
            <path d="M-22 -28 C-8 -33 8 -33 22 -28 C22 -8 13 14 0 30 C-13 14 -22 -8 -22 -28 Z" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
            <path d="M-17 -22 C-7 -26 7 -26 17 -22 C17 -7 10 11 0 24 C-10 11 -17 -7 -17 -22 Z" fill="#10b981" opacity="0.15" />
            <rect x="-8" y="-5" width="16" height="13" rx="2" fill="#10b981" />
            <path d="M-5 -5 V-10 C-5 -13 -3 -15 0 -15 C3 -15 5 -13 5 -10 V-5" stroke="#10b981" strokeWidth="2" fill="none" />
            <circle cx="0" cy="1" r="1.5" fill="#0f172a" />
            <path d="M0 2.5 V6" stroke="#0f172a" strokeWidth="1" />
          </g>
        </svg>
      ),
      features: ["Network & Web Security", "Ethical Hacking Foundations", "Penetration Testing", "Security Operations & Auditing"],
      rating: 4.7,
      students: "40+",
      coursetype: "Specialized"
    },
    {
      title: "Vibe Coding",
      duration: "1 Month",
      level: "All Levels Welcome",
      price: "₹999",
      originalPrice: "₹2,499",
      illustration: (
        <svg viewBox="0 0 200 120" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="200" height="120" rx="12" fill="#1e293b" opacity="0.4" />
          <path d="M 20 80 Q 50 30 110 50 T 180 30" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <g transform="translate(130, 45) rotate(-25)">
            <rect x="-2" y="-2" width="4" height="40" rx="2" fill="#a855f7" />
            <circle cx="0" cy="-4" r="5" fill="#ec4899" />
          </g>
          <g transform="translate(100, 35)">
            <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#f59e0b" />
          </g>
          <g transform="translate(150, 25)">
            <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#3b82f6" />
          </g>
          <g transform="translate(60, 65)">
            <path d="M0 -6 L1.5 -1.5 L6 0 L1.5 1.5 L0 6 L-1.5 1.5 L-6 0 L-1.5 -1.5 Z" fill="#10b981" />
          </g>
          <g transform="translate(30, 25)">
            <rect x="0" y="0" width="55" height="35" rx="4" fill="#0f172a" stroke="#a855f7" strokeWidth="1.5" />
            <rect x="6" y="8" width="20" height="3" rx="1.5" fill="#ec4899" />
            <rect x="6" y="15" width="38" height="3" rx="1.5" fill="#3b82f6" />
            <rect x="6" y="22" width="28" height="3" rx="1.5" fill="#10b981" />
          </g>
        </svg>
      ),
      features: ["AI Code Assistant Mastery", "Prompt Engineering for Devs", "Agentic Code Workflows", "Build & Ship Apps in Minutes"],
      rating: 5.0,
      students: "150+",
      coursetype: "Trending Tech"
    }
  ];

  return (
    <main className="relative">
      <HeaderSection headingstart="Our" heading=" Courses" sub="MSME Certified training & internship programs designed to get you hired at top tech companies with live mentor support." />
      <Container className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 group-hover:border-red-500/20">
                {/* Course Image / Illustration */}
                <div className="h-40 bg-slate-900/50 flex items-center justify-center relative overflow-hidden border-b border-gray-800/50 p-2">
                  <div className="w-full transform group-hover:scale-105 transition-transform duration-300">
                    {course.illustration}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 dark:bg-white/10 backdrop-blur-sm text-yellow-500 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.coursetype}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <span className="text-gray-400">
                      ⏱️ {course.duration}
                    </span>
                    <span className="text-gray-400">
                      📊 {course.level}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {course.rating} ({course.students} students)
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-red-600">{course.price}</span>
                      <span className="ml-2 text-sm line-through text-gray-500">
                        {course.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Link to="/contact">
                    <button className="w-full py-3 bg-yellow-500 text-grey-500 font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 cursor-pointer">
                      Enroll Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
};

const HeaderSection = ({ headingstart ,heading, sub }) => (
  <section className="relative overflow-hidden">
    <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-[var(--q9x-red)]/20 blur-3xl" />
    <Container className="pt-14 pb-10 sm:pt-20 sm:pb-16">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white"><span className="text-[var(--q9x-red-600)]">{headingstart}</span>{heading}</h1>
        <p className="mt-3 text-slate-700 dark:text-white/80 max-w-2xl">{sub}</p>
      </motion.div>
    </Container>
  </section>
);

export { CoursesPage, HeaderSection };

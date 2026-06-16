import { useState } from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import Footer from "./Footer";
import Q9XModal from "./Q9xModal";

const Internship = () => {
  const [selected, setSelected] = useState(null);

  const internships = [
    {
      title: "Web Development",
      duration: "8 weeks",
      note: "React, Tailwind, API Integration",
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="30" y="20" width="140" height="90" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="3" className="dark:fill-slate-900/40 dark:stroke-slate-800" />
          <rect x="38" y="28" width="124" height="66" rx="4" fill="#0F172A" />
          <rect x="80" y="110" width="40" height="15" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2" className="dark:fill-slate-800 dark:stroke-slate-700" />
          <ellipse cx="100" cy="125" rx="35" ry="5" fill="#E2E8F0" className="dark:fill-slate-800" />
          {/* Code lines */}
          <rect x="46" y="38" width="30" height="6" rx="3" fill="#EF233C" />
          <rect x="82" y="38" width="45" height="6" rx="3" fill="#10B981" />
          <rect x="46" y="50" width="70" height="6" rx="3" fill="#3B82F6" />
          <rect x="46" y="62" width="40" height="6" rx="3" fill="#F59E0B" />
          {/* Floating window/components */}
          <g transform="translate(105, 55)">
            <rect x="0" y="0" width="50" height="35" rx="4" fill="#FFFFFF" stroke="#3B82F6" strokeWidth="1.5" className="dark:fill-slate-800" />
            <circle cx="6" cy="6" r="2" fill="#EF233C" />
            <circle cx="12" cy="6" r="2" fill="#F59E0B" />
            <circle cx="18" cy="6" r="2" fill="#10B981" />
            <path d="M8 24 L18 16 L28 22 L42 14" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      ),
      details: {
        overview: "Work with our mentors to build production‑ready React components and ship a portfolio project.",
        responsibilities: [
          "Implement responsive UI with React + Tailwind CSS",
          "Integrate backend APIs and manage global state",
          "Collaborate on version control using Git workflows",
        ],
        stipend: "₹8,000 – ₹12,000",
        mode: "Remote / Hybrid",
        location: "Vizag / Remote",
      },
    },
    {
      title: "Android Development",
      duration: "8 weeks",
      note: "Kotlin, XML, Android SDK",
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="65" y="15" width="70" height="120" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="3" className="dark:fill-slate-900/40 dark:stroke-slate-800" />
          <rect x="71" y="25" width="58" height="96" rx="6" fill="#0F172A" />
          <circle cx="100" cy="20" r="2.5" fill="#94A3B8" />
          {/* Layout blocks inside phone */}
          <rect x="77" y="32" width="46" height="22" rx="3" fill="#EF233C" opacity="0.85" />
          <rect x="77" y="60" width="20" height="20" rx="3" fill="#10B981" opacity="0.85" />
          <rect x="103" y="60" width="20" height="20" rx="3" fill="#F59E0B" opacity="0.85" />
          <circle cx="100" cy="95" r="8" fill="#3B82F6" />
          {/* Floating settings / tools gear */}
          <g transform="translate(125, 75)">
            <circle cx="0" cy="0" r="14" fill="#3B82F6" opacity="0.9" />
            <circle cx="0" cy="0" r="5" fill="#FFFFFF" className="dark:fill-slate-900" />
          </g>
        </svg>
      ),
      details: {
        overview: "Dive into native mobile development. Build robust, high-performance Android applications from scratch.",
        responsibilities: [
          "Design clean native Android layouts with XML or Jetpack Compose",
          "Manage background services, storage, and asynchronous API calls",
          "Debug, write unit tests, and prepare release builds",
        ],
        stipend: "₹8,000 – ₹12,000",
        mode: "Remote / Hybrid",
        location: "Vizag / Remote",
      },
    },
    {
      title: "Data Science",
      duration: "10 weeks",
      note: "Python, SQL, Machine Learning",
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 30 115 L 170 115" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-slate-800" />
          <path d="M 30 30 L 30 115" stroke="#E2E8F0" strokeWidth="2.5" className="dark:stroke-slate-800" />
          {/* Bar Charts */}
          <rect x="42" y="75" width="18" height="40" rx="2" fill="#3B82F6" opacity="0.85" />
          <rect x="66" y="55" width="18" height="60" rx="2" fill="#EF233C" opacity="0.85" />
          <rect x="90" y="35" width="18" height="80" rx="2" fill="#10B981" opacity="0.85" />
          {/* Line Graph */}
          <path d="M51 95 L75 60 L99 80 L123 45 L147 65 L171 30" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="171" cy="30" r="5" fill="#F59E0B" />
          {/* Pie Chart */}
          <circle cx="145" cy="85" r="22" fill="none" stroke="#E2E8F0" strokeWidth="8" className="dark:stroke-slate-800" />
          <circle cx="145" cy="85" r="22" fill="none" stroke="#EF233C" strokeWidth="8" strokeDasharray="65 130" strokeDashoffset="15" />
          <circle cx="145" cy="85" r="22" fill="none" stroke="#3B82F6" strokeWidth="8" strokeDasharray="45 130" strokeDashoffset="80" />
        </svg>
      ),
      details: {
        overview: "Extract valuable insights from complex data. Build predictive models and create highly interactive visualizations.",
        responsibilities: [
          "Preprocess, clean, and analyze structured and unstructured datasets",
          "Train and fine-tune machine learning and statistical models",
          "Build dashboards and present findings through data storytelling",
        ],
        stipend: "₹10,000 – ₹15,000",
        mode: "Remote / Hybrid",
        location: "Vizag / Remote",
      },
    },
    {
      title: "UI/UX Design",
      duration: "8 weeks",
      note: "Figma, Wireframing, Prototyping",
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="150" height="100" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2.5" className="dark:fill-slate-900/40 dark:stroke-slate-800" />
          {/* Design Wireframe circles & layout */}
          <rect x="38" y="32" width="60" height="42" rx="4" fill="#3B82F6" opacity="0.15" stroke="#3B82F6" strokeWidth="1" />
          <circle cx="68" cy="53" r="10" fill="#3B82F6" opacity="0.85" />
          {/* Vector Pen tool & bezier curve */}
          <circle cx="130" cy="52" r="18" fill="none" stroke="#EF233C" strokeWidth="2" />
          <path d="M110 32 L150 72 M150 32 L110 72" stroke="#EF233C" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="127" cy="31" width="6" height="6" fill="#EF233C" />
          <rect x="127" cy="69" width="6" height="6" fill="#EF233C" />
          <rect x="109" cy="49" width="6" height="6" fill="#EF233C" />
          <rect x="147" cy="49" width="6" height="6" fill="#EF233C" />
          {/* Color palette circles */}
          <circle cx="45" cy="98" r="9" fill="#EF233C" />
          <circle cx="70" cy="98" r="9" fill="#3B82F6" />
          <circle cx="95" cy="98" r="9" fill="#10B981" />
          <circle cx="120" cy="98" r="9" fill="#F59E0B" />
        </svg>
      ),
      details: {
        overview: "Master user-centric design. Create intuitive wireframes, interactive high-fidelity prototypes, and modern interface designs.",
        responsibilities: [
          "Conduct user research, design personas, and map user journeys",
          "Design wireframes, component systems, and UI mockups in Figma",
          "Build interactive prototypes and conduct usability testing",
        ],
        stipend: "₹8,000 – ₹12,000",
        mode: "Remote / Hybrid",
        location: "Vizag / Remote",
      },
    },
    {
      title: "Java Programming",
      duration: "8 weeks",
      note: "Core Java, OOPs, Data Structures",
      illustration: (
        <svg viewBox="0 0 200 150" className="w-full h-36 mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mug representing Java */}
          <rect x="62" y="55" width="60" height="60" rx="8" fill="#F59E0B" stroke="#D97706" strokeWidth="3" />
          <path d="M122 70 C132 70 142 75 142 85 C142 95 132 100 122 100" stroke="#D97706" strokeWidth="3.5" strokeLinecap="round" />
          {/* Steam waves */}
          <path d="M75 42 Q80 28 75 18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M92 42 Q97 28 92 18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M109 42 Q114 28 109 18" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Curly braces */}
          <text x="25" y="75" fill="#EF233C" fontSize="36" fontWeight="bold" fontFamily="monospace">{"{"}</text>
          <text x="150" y="110" fill="#EF233C" fontSize="36" fontWeight="bold" fontFamily="monospace">{"}"}</text>
          <rect x="35" y="125" width="130" height="5" rx="2" fill="#E2E8F0" className="dark:fill-slate-800" />
        </svg>
      ),
      details: {
        overview: "Build a solid foundation in backend programming. Master object-oriented concepts, core data structures, and multi-threading in Java.",
        responsibilities: [
          "Implement high-performance algorithms and custom data structures",
          "Develop clean desktop or enterprise-level Java applications",
          "Write robust unit tests and maintain clean, documented codebases",
        ],
        stipend: "₹6,000 – ₹10,000",
        mode: "Remote / Hybrid",
        location: "Vizag / Remote",
      },
    },
  ];



  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-[#0b0d10] py-12 transition-colors duration-300">
      <Container className="pb-20">
        {/* Centered Heading Layout matching codsoft screenshot theme */}
        <div className="text-center mb-16 mt-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl font-extrabold tracking-wide text-[#0f3460] dark:text-white uppercase"
          >
            INTERNSHIPS WE OFFER!
          </motion.h1>
          <div className="h-1 w-20 bg-[var(--q9x-red)] mx-auto mt-3 rounded-full" />
          <p className="text-slate-600 dark:text-white/60 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            Kickstart your tech career with real-world exposure, practical mentors, and industry-grade projects.
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelected(it)}
              className="cursor-pointer flex flex-col rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 p-6 shadow-md hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
            >
              {/* Card Illustration */}
              <div className="flex-grow flex items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl mb-6 group-hover:bg-slate-100 dark:group-hover:bg-slate-800/60 transition-colors">
                {it.illustration}
              </div>

              {/* Title Centered */}
              <div className="text-center mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white group-hover:text-[var(--q9x-red)] transition-colors">
                  {it.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-white/50 mt-1">
                  {it.duration} • {it.note}
                </p>
              </div>

              {/* Apply Button Pill */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTvtIc-p3qDqjv2V6cYceD2GZtQMGLwkd2ZbUgYUBYAMpCAw/viewform"
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-full py-2.5 px-6 rounded-full font-semibold text-white bg-sky-500 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-500 shadow-sm active:scale-95 transition-all duration-200 text-center block"
              >
                Apply
              </a>
            </motion.div>
          ))}
        </div>
      </Container>

      <Footer />

      {/* Modal with application details and forms */}
      <Q9XModal open={!!selected} onClose={() => { setSelected(null); }} title={selected?.title}>
        {selected && (
          <div className="space-y-5">
            <div className="bg-slate-50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-200/50 dark:border-white/5">
              <p className="text-slate-800 dark:text-white/80 text-sm leading-relaxed">
                <strong>Overview:</strong> {selected.details.overview}
              </p>
              <div className="mt-3">
                <p className="font-semibold text-sm text-slate-900 dark:text-white">Responsibilities:</p>
                <ul className="mt-1 list-disc pl-5 text-xs text-slate-700 dark:text-white/70 space-y-1">
                  {selected.details.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-2.5 text-center">
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 dark:text-white/50">Stipend</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selected.details.stipend}</span>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-2.5 text-center">
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 dark:text-white/50">Mode</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selected.details.mode}</span>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 p-2.5 text-center">
                <span className="block text-[10px] uppercase tracking-wider text-slate-500 dark:text-white/50">Location</span>
                <span className="font-semibold text-slate-800 dark:text-white">{selected.details.location}</span>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/10 pt-4 flex justify-end gap-3">
              <button
                onClick={() => setSelected(null)}
                className="px-5 py-2.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-white/80"
              >
                Close
              </button>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTvtIc-p3qDqjv2V6cYceD2GZtQMGLwkd2ZbUgYUBYAMpCAw/viewform"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-sky-500 dark:bg-sky-600 hover:bg-sky-600 dark:hover:bg-sky-500 text-white shadow text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </Q9XModal>
    </main>
  );
};

export default Internship;
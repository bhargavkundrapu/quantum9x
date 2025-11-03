import { motion } from "framer-motion";
import Container from "./Container";
import Footer from "./Footer";
import { Star, Check ,Airplay} from "lucide-react";

import React from "react";





const CoursesPage = () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      duration: "6 Months",
      level: "Beginner to Advanced",
      price: "₹9,999",
      originalPrice: "₹14,999",
      image: Airplay,
      features: ["React.js & Node.js", "MongoDB & PostgreSQL", "Deployment", "Real Projects"],
      rating: 4.9,
      students: "20+",
      coursetype:"Job Preparation"

    },
    {
      title: "Python Programming",
      duration: "2 Months",
      level: "Advanced",
      price: "₹1,999",
      originalPrice: "₹3,999",
      image: "🧮",
      features: ["Problem Solving", "Interview Prep", "Competitive Programming", "Data Structures"],
      rating: 4.8,
      students: "80+",
      coursetype:"Job Preparation"
    },
    {
      title: "Java Programming",
      duration: "2 Months",
      level: "Beginner to Advanced",
      price: "₹1,999",
      originalPrice: "₹3,999",
      image: "📱",
      features: ["Programming Basics", "Data Structures", "Object-Oriented Programming", "Projects"],
      rating: 4.7,
      students: "60",
      coursetype:"Job Preparation"
    },
    {
      title: "C & C++ Programming",
      duration: "2 Months",
      level: "Advanced",
      price: "₹1,999",
      originalPrice: "₹3,999",
      image: "☁️",
      features: ["C Programming", "C++ Programming", "Data Structures", "Algorithms"],
      rating: 4.8,
      students: "50+",
      coursetype:"Job Preparation"
    },
    
      
  ];
  return (
    <main className="relative">
      <HeaderSection headingstart="Our" heading=" Courses" sub="Choose from our comprehensive range of industry-focused courses designed to get you hired at top tech companies." />
      <Container className="">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group transform hover:scale-105 hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800border border-gray-800 group-hover:border-red-500/20`}>
                {/* Course Image */}
                <div className={`h-40 bg-transparent flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-6xl mt-15"><Airplay color="#d2042d" lab className="w-30 h-30 text-gray-400" /></div>
                  <div className="absolute top-4 mb-4 right-2  bg-black-600 text-yellow-500 px-3 py-1 rounded-full text-sm font-semibold">
                    {course.coursetype}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 text-white`}>
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm">
                    <span className={`text-gray-400`}>
                      ⏱️ {course.duration}
                    </span>
                    <span className={`text-gray-400`}>
                      📊 {course.level}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className={`text-sm text-gray-400`}>
                      {course.rating} ({course.students} students)
                    </span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className={`text-sm text-gray-300`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-red-600">{course.price}</span>
                      <span className={`ml-2 text-sm line-through text-gray-500`}>
                        {course.originalPrice}
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-yellow-500 text-grey-500 font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300">
                    Enroll Now
                  </button>
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

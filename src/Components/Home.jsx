

import React from "react";
import Hero from "./Hero";
import About from "./About";
import WhyUs from "./WhyUs";
import Team from "./Team";
import { Social } from "./Social";
import Footer from "./Footer";



const HomePage = () => (
  <main className="relative">
    <Hero />
    <About />
    <WhyUs />
    <Team />
    <Social />
    <Footer />
  </main>
);
export default HomePage;
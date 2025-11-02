

import React from "react";
import Hero from "./Hero";
import About from "./About";
import WhyUs from "./WhyUs";
import Team from "./Team";
import Achievements from "./Achivements";
import Advantages from "./Advantages";
import { Social } from "./Social";

import Footer from "./Footer";



const HomePage = () => (
  <>
    <Hero />
    <About />
    <WhyUs />
    <Advantages />
    
    <Achievements />
    <Team />
    <Social />
    <Footer />
  </>
);
export default HomePage;
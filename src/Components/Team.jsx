
import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Container from "./Container";
import thanush from '../assets/thanush.jpg';

const Team = () => {
  const team = [
    
    
    { name: "ThanushMohan Chalamala", role: "Founder",text:"Driving inovation in educational technology with a passion for quantum-speed learning and ai-explorer", img: thanush , ig: "https://www.instagram.com/simply_bittu?utm_source=ig_web_button_share_sheet&igsh=MTBuNmxieG05aTE3OA==" },
    { name: "Phani Pilaka ", role: "Co-Founder",text:"Empowering the next generation of tech leaders through mentorship and guidance", img: "https://res.cloudinary.com/da2wrgabu/image/upload/v1762142250/WhatsApp_Image_2025-11-02_at_19.06.03_a24cf430_n159rk.jpg", ig: "https://www.instagram.com/quantum9x/" },
    { name: "Bhargav Kundrapu", role: "Web Developer",text:"Deriving innovative solutions through code", img: "https://res.cloudinary.com/da2wrgabu/image/upload/v1697385769/Screenshot_2023-06-30_130823_k8v5mo.png", ig: "https://www.instagram.com/bhargav_kundrapu/" },
     { name: "Siva Kalyan", role: "Tech Lead",text:"Leading the charge in tech innovation and development", img: "https://res.cloudinary.com/da2wrgabu/image/upload/v1762142250/WhatsApp_Image_2025-11-02_at_19.21.58_0c54ba17_zgwsqg.jpg", ig: "https://www.instagram.com/siva_kalyan_2005?igsh=MWk2N21nMWo5emwyaQ==" },
      { name: "Tummala Srija", role: "Mentor",text:"teaching the future of technology", img: "https://res.cloudinary.com/da2wrgabu/image/upload/v1762142256/ChatGPT_Image_Nov_3_2025_09_25_20_AM_rbqdc1.png", ig: "https://www.instagram.com/_sri__211?igsh=aTJpZDdoeGI4a2ht" },
  ];
  return (
    <section id="team" className="relative">
      <Container className="py-16 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Meet Our Quantum Team</h2>
          <p className="text-slate-700 dark:text-white/80 mt-2">Engineers, coaches, and career experts guiding you to offers.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group relative rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 text-center">
                <img src={m.img} alt={m.name} className="mx-auto h-30 w-30 rounded-full object-cover" />
                <h3 className="mt-4 text-slate-900 dark:text-white font-semibold">{m.name}</h3>
                <p className="text-slate-700 dark:text-white/70 text-sm">{m.role}</p>
                <p className="text-slate-700 dark:text-white/70 text-lg">{m.text}</p>
                <a href={m.ig} target="_blank" rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-large text-white bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#4f5bd5] transition-transform hover:-translate-y-1">
                  
                 <div className="flex items-center gap-0">
                  <Instagram size={28} className=" w-18"/> 
                  <p className="text-sm m-0">Follow on Instagram</p> 
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;

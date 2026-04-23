import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutIntro from "../components/About/AboutIntro";
import EducationTimeline from "../components/About/EducationTimeline";
import Interests from "../components/About/Interests";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="min-h-screen bg-black py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900 to-black pointer-events-none"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
                   initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                   className="text-center mb-20"
                >
                  <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20 pb-2">
                    {t("about.header")}
                  </h1>
                </motion.div>

        <div className="space-y-12">
          <AboutIntro />
          
          <div className="flex justify-center">
            <motion.a
              href="/my-portfolio-site-react/resume_suphamethee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-orange-500 text-black font-bold rounded-full text-lg hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              {t("about.resume")}
            </motion.a>
          </div>

          <EducationTimeline />
          <Interests />
        </div>
      </div>
    </section>
  );
}

export default About;
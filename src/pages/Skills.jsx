import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Frontend from "../components/Skills/Frontend";
import Backend from "../components/Skills/Backend";
import Database from "../components/Skills/Database";
import Tools from "../components/Skills/Tools";
import Other from "../components/Skills/Other";
import Languages from "../components/Skills/Languages";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="min-h-screen bg-black py-20 relative">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-zinc-900 to-black pointer-events-none"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
           className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20 pb-2">
            {t("skills.header")}
          </h1>
        </motion.div>

        <div className="space-y-20">
          <Frontend />
          <Backend />
          <Database />
          <Tools />
          <Other />
          <Languages />
        </div>
      </div>
    </section>
  );
}
export default Skills;
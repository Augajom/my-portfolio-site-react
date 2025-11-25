import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaUsers, FaLightbulb, FaRobot, FaCode } from "react-icons/fa";
import { RiOpenSourceFill } from "react-icons/ri";
import { SiFuturelearn } from "react-icons/si";

function Interests() {
  const { t } = useTranslation();
  const interests = [
    { icon: <FaLaptopCode />, title: t("about.interests.web") },
    { icon: <FaRobot />, title: t("about.interests.ai") },
    { icon: <FaLightbulb />, title: t("about.interests.opensource") },
    { icon: <FaCode />, title: t("about.interests.competition") },
  ];
  const softSkills = [
    { icon: <FaUsers />, title: t("about.skills.teamwork"), desc: t("about.skills.teamwork_desc") },
    { icon: <RiOpenSourceFill />, title: t("about.skills.problem"), desc: t("about.skills.problem_desc") },
    { icon: <FaUsers />, title: t("about.skills.communication"), desc: t("about.skills.communication_desc") },
    { icon: <SiFuturelearn />, title: t("about.skills.adapt"), desc: t("about.skills.adapt_desc") },
  ];

  const Card = ({ icon, title, desc }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-zinc-900 border border-white/5 p-6 rounded-xl text-center hover:border-orange-500/50 transition-colors duration-300 group"
    >
      <div className="text-4xl text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      {desc && <p className="text-sm text-gray-400">{desc}</p>}
    </motion.div>
  );

  return (
     <section className="py-16">
       <h2 className="text-3xl font-bold text-white mb-8 text-center">{t("about.interests.header")}</h2>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {interests.map((item, idx) => <Card key={idx} {...item} />)}
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {softSkills.map((item, idx) => <Card key={idx} {...item} />)}
       </div>
     </section>
  )
}
export default Interests;
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaCss3Alt, FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoVue, IoLogoJavascript } from "react-icons/io5";
import { TbBrandNextjs, TbBrandFramerMotion } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const SkillCard = ({ icon, title, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.05 }}
    whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.5)" }}
    className="flex flex-col items-center p-6 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 group"
  >
    <div className="text-4xl text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <span className="text-xs font-mono text-gray-500 border border-white/5 px-2 py-1 rounded-md">{level}</span>
  </motion.div>
);

function Frontend() {
  const { t } = useTranslation();

  const renderSection = (titleKey, items) => (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
        <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
        {t(titleKey)}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <SkillCard 
            key={idx} 
            delay={idx}
            icon={item.icon}
            title={t(`skills.frontend.items.${item.key}.title`)}
            level={t(`skills.frontend.items.${item.key}.level`)}
          />
        ))}
      </div>
    </div>
  );

  const data = {
    framework: [
      { icon: <IoLogoVue />, key: "Vue.js" },
      { icon: <FaReact />, key: "React.js" },
      { icon: <TbBrandNextjs />, key: "Next.js" },
    ],
    styling: [
      { icon: <FaCss3Alt />, key: "CSS" },
      { icon: <FaBootstrap />, key: "Bootstrap" },
      { icon: <RiTailwindCssFill />, key: "Tailwind" },
    ],
    html: [
      { icon: <FaHtml5 />, key: "HTML5" },
      { icon: <FaCss3Alt />, key: "CSS3" },
      { icon: <IoLogoJavascript />, key: "JavaScript" },
      { icon: <SiTypescript />, key: "TypeScript" },
    ],
    animation: [
      { icon: <TbBrandFramerMotion />, key: "Framer Motion" },
    ],
  };

  return (
    <div className="border-l border-white/10 pl-4 md:pl-10">
      <h2 className="text-4xl font-bold text-white mb-10 opacity-20 absolute -left-4 -top-10 rotate-90 origin-bottom-left md:block hidden">
        FRONTEND
      </h2>
      {renderSection("skills.frontend.framework", data.framework)}
      {renderSection("skills.frontend.styling", data.styling)}
      {renderSection("skills.frontend.html", data.html)}
      {renderSection("skills.frontend.animation", data.animation)}
    </div>
  );
}

export default Frontend;
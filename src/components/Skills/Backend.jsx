import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { FaKeycdn } from "react-icons/fa6";

const SkillCard = ({ icon, title, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.05 }}
    whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.5)" }}
    className="flex flex-col items-center p-6 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 group hover:bg-zinc-800/50"
  >
    <div className="text-4xl text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
    <span className="text-[10px] font-mono text-gray-500 border border-white/5 px-2 py-0.5 rounded-md uppercase tracking-wider">
      {level}
    </span>
  </motion.div>
);

function Backend() {
  const { t } = useTranslation();

  const renderSection = (titleKey, items) => (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center gap-3 uppercase tracking-wider opacity-90">
        <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
        {t(titleKey)}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <SkillCard
            key={idx}
            delay={idx}
            icon={item.icon}
            title={t(`skills.backend.items.${item.key}.title`)}
            level={t(`skills.backend.items.${item.key}.level`)}
          />
        ))}
      </div>
    </div>
  );

  const data = {
    backend: [
      { icon: <FaNodeJs />, key: "Node.js" },
      { icon: <SiExpress />, key: "Express.js" },
    ],
    authentication: [
      { icon: <TbBrandOauth />, key: "Google OAuth2" },
      { icon: <FaKeycdn />, key: "JWT" },
    ],
  };

  return (
    <div className="border-l border-white/10 pl-4 md:pl-10 relative">
      {/* Label ด้านข้างสำหรับตกแต่ง */}
      <h2 className="text-4xl font-bold text-white mb-10 opacity-20 absolute -left-4 -top-6 rotate-90 origin-bottom-left md:block hidden tracking-widest">
        BACKEND
      </h2>

      {renderSection("skills.backend.backend", data.backend)}
      {renderSection("skills.backend.authentication", data.authentication)}
    </div>
  );
}

export default Backend;
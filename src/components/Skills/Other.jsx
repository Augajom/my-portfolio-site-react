import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import { FaFigma } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiCanva, SiAdobepremierepro } from "react-icons/si";
import { FaFlutter, FaDartLang } from "react-icons/fa6";

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

function Other() {
  const { t } = useTranslation();

  const iconsMap = {
    Figma: <FaFigma />,
    Photoshop: <DiPhotoshop />,
    Canva: <SiCanva />,
    Flutter: <FaFlutter />,
    Dart: <FaDartLang />,
    "Premiere Pro": <SiAdobepremierepro />,
  };

  const items = Object.keys(t("skills.other.items", { returnObjects: true }));

  return (
    <div className="border-l border-white/10 pl-4 md:pl-10 relative mt-10">
      {/* Sidebar Label */}
      <h2 className="text-4xl font-bold text-white mb-10 opacity-20 absolute -left-4 -top-6 rotate-90 origin-bottom-left md:block hidden tracking-widest">
        OTHER
      </h2>

      <div className="mb-12">
        <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center gap-3 uppercase tracking-wider opacity-90">
          <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
          {t("skills.other.title")}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((key, idx) => (
            <SkillCard
              key={idx}
              delay={idx}
              icon={iconsMap[key]}
              title={t(`skills.other.items.${key}.title`)}
              level={t(`skills.other.items.${key}.level`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Other;
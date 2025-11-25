import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// icons
import {
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaLinux,
  FaTerminal,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm, SiPostman, SiGithubactions } from "react-icons/si";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsWindows } from "react-icons/bs";
import { DiNginx } from "react-icons/di";

const ToolCard = ({ icon, title, level, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.05 }}
    whileHover={{ y: -5, borderColor: "rgba(249, 115, 22, 0.5)" }}
    className="flex flex-col items-center p-5 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-sm transition-all duration-300 group hover:bg-zinc-800/50"
  >
    <div className="text-4xl text-gray-400 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mb-3">
      {icon}
    </div>
    <h3 className="text-base font-bold text-white mb-1">{title}</h3>
    <span className="text-[10px] font-mono text-gray-500 border border-white/5 px-2 py-0.5 rounded-md uppercase tracking-wider">
      {level}
    </span>
  </motion.div>
);

function Tools() {
  const { t } = useTranslation();

  // Icon Mapping
  const iconsMap = {
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Docker: <FaDocker />,
    "Docker Compose": <FaDocker />,
    Linux: <FaLinux />,
    Window: <BsWindows />,
    SSH: <FaTerminal />,
    "GitHub Actions": <SiGithubactions />,
    VSCode: <VscVscode />,
    Webstorm: <SiWebstorm />,
    "Thunder Client": <AiFillThunderbolt />,
    Postman: <SiPostman />,
    AWS: <FaAws />,
    Nginx: <DiNginx />,
  };

  const categories = ["vControl", "container", "ide", "api", "deploy"];

  const renderCategory = (category, categoryIdx) => {
    // Filter logic
    const items = Object.keys(t(`skills.tools.items`, { returnObjects: true }))
      .filter((key) => {
        if (category === "vControl") return ["Git", "GitHub"].includes(key);
        if (category === "container")
          return [
            "Docker",
            "Docker Compose",
            "Linux",
            "Window",
            "SSH",
            "GitHub Actions",
          ].includes(key);
        if (category === "ide") return ["VSCode", "Webstorm"].includes(key);
        if (category === "api")
          return ["Thunder Client", "Postman"].includes(key);
        if (category === "deploy") return ["AWS", "Nginx"].includes(key);
        return false;
      });

    return (
      <div key={category} className="mb-12">
        <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center gap-3 uppercase tracking-wider opacity-90">
           <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
           {t(`skills.tools.${category}`)}
        </h3>
        
        {/* ปรับ Grid ให้ uniform มากขึ้น */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((key, idx) => (
            <ToolCard
              key={key}
              delay={idx + (categoryIdx * 2)}
              icon={iconsMap[key]}
              title={t(`skills.tools.items.${key}.title`)}
              level={t(`skills.tools.items.${key}.level`)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="border-l border-white/10 pl-4 md:pl-10 mt-10 relative">
      {/* Sidebar Label */}
      <h2 className="text-4xl font-bold text-white mb-10 opacity-20 absolute -left-4 -top-6 rotate-90 origin-bottom-left md:block hidden tracking-widest">
        TOOLS
      </h2>
      
      {categories.map((cat, idx) => renderCategory(cat, idx))}
    </div>
  );
}

export default Tools;
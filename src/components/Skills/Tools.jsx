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
import { FaGitlab } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";
import { SiWebstorm, SiPostman, SiGithubactions, SiProxmox } from "react-icons/si";
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

function Tools() {
  const { t } = useTranslation();

  const renderSection = (titleKey, items) => (
    <div className="mb-12">
      <h3 className="text-xl font-bold text-orange-500 mb-6 flex items-center gap-3 uppercase tracking-wider opacity-90">
        <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
        {t(titleKey)}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item, idx) => (
          <ToolCard
            key={idx}
            delay={idx}
            icon={item.icon}
            title={t(`skills.tools.items.${item.key}.title`)}
            level={t(`skills.tools.items.${item.key}.level`)}
          />
        ))}
      </div>
    </div>
  );

  const data = {
    vControl: [
      { icon: <FaGitAlt />, key: "Git" },
      { icon: <FaGithub />, key: "GitHub" },
      { icon: <FaGitlab />, key: "GitLab" },
    ],
    container: [
      { icon: <FaDocker />, key: "Docker" },
      { icon: <FaDocker />, key: "Docker Compose" },
      { icon: <SiProxmox />, key: "Proxmox" },
      { icon: <FaLinux />, key: "Linux" },
      { icon: <BsWindows />, key: "Window" },
      { icon: <FaTerminal />, key: "SSH" },
      { icon: <SiGithubactions />, key: "GitHub Actions" },
    ],
    ide: [
      { icon: <VscVscode />, key: "VSCode" },
      { icon: <SiWebstorm />, key: "Webstorm" },
    ],
    api: [
      { icon: <AiFillThunderbolt />, key: "Thunder Client" },
      { icon: <SiPostman />, key: "Postman" },
    ],
    deploy: [
      { icon: <FaAws />, key: "AWS" },
      { icon: <DiNginx />, key: "Nginx" },
    ],
  };

  return (
    <div className="border-l border-white/10 pl-4 md:pl-10 mt-10 relative">
      {/* Sidebar Label */}
      <h2 className="text-4xl font-bold text-white mb-10 opacity-20 absolute -left-2 -top-10 rotate-90 origin-bottom-left md:block hidden tracking-widest">
        TOOLS
      </h2>
      
      {renderSection("skills.tools.vControl", data.vControl)}
      {renderSection("skills.tools.container", data.container)}
      {renderSection("skills.tools.ide", data.ide)}
      {renderSection("skills.tools.api", data.api)}
      {renderSection("skills.tools.deploy", data.deploy)}
    </div>
  );
}

export default Tools;
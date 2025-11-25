import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import img1 from "../assets/projects/1.png";
import img2 from "../assets/projects/2.png";
import img3 from "../assets/projects/3.png";
import img4 from "../assets/projects/4.png";
import img5 from "../assets/projects/5.png";
import img6 from "../assets/projects/6.png";

function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });
  const projectKeys = Object.keys(projects);

  const media = {
    p1: { img: img1, video: "https://youtu.be/H5nEBMcURt0" },
    p2: { img: img2, video: "https://youtu.be/RtTKnKYdfDw?si=VG6XTcAPnn3TVfKH" },
    p3: { img: img3, video: "https://youtu.be/FTlZHSAH0-Q?si=t_6kKYPGXuSp1Wtl" },
    p4: { img: img4, video: "https://youtu.be/bLke_rMmeRM?si=snq4zvZ0KJCsCGbK" },
    p5: { img: img5, video: "https://youtu.be/gZ8i-XTpJQ0?si=l-b-VTFPaiLVY9Wd" },
    p6: { img: img6, video: "https://youtu.be/GuFJY_pf-BY" },
  };

  return (
    <section id="projects" className="min-h-screen bg-black py-20 relative">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/10 via-black to-black"></div>
       
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{t("projects.header")}</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectKeys.map((key, idx) => {
            const project = projects[key];
            const { img, video } = media[key] || {};
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative h-64 overflow-hidden">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   
                   {video && (
                     <a href={video} target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 z-20 bg-black/70 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-red-600 transition-colors">
                        <FaYoutube /> Watch Demo
                     </a>
                   )}
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{project.title}</h2>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-orange-400 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
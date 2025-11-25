import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import highschool from "../../assets/highschool.png";
import university from "../../assets/university.jpg";

function EducationTimeline() {
  const { t } = useTranslation();
  const timelineData = [
    { year: "2019 - 2022", title: t("about.edu.highschool"), desc: t("about.edu.highschool_desc"), img: highschool },
    { year: "2022 - " + t("about.edu.present"), title: t("about.edu.university"), desc: t("about.edu.university_desc"), img: university },
  ];

  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center"><span className="text-orange-500">Education</span> Journey</h2>
      <div className="relative space-y-8">
        {/* Vertical Line */}
        <div className="absolute left-1/2 w-0.5 bg-gradient-to-b from-orange-500 to-transparent h-full -translate-x-1/2 hidden md:block opacity-30"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 w-full">
               <div className="relative group overflow-hidden rounded-2xl border border-white/10">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img src={item.img} alt={item.title} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" />
               </div>
            </div>
            
            <div className="md:w-12 md:h-12 rounded-full bg-black border-4 border-orange-500 z-10 hidden md:block shadow-[0_0_20px_rgba(249,115,22,0.5)]"></div>
            
            <div className="flex-1 w-full text-center md:text-left bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
              <span className="text-orange-500 font-mono text-sm tracking-widest">{item.year}</span>
              <h3 className="text-2xl font-bold text-white mt-2 mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
export default EducationTimeline;
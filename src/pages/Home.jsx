import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";
import profile from "../assets/profile.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-orange-400 text-xs font-bold tracking-wide uppercase">Open for Work</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
              {t("home.hi")} {""}
              <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
                {t("home.name")}
              </span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold text-gray-400 mb-6 h-12">
              {t("home.iam")}&nbsp;
              <span className="text-white">
                <Typewriter
                  words={t("home.roles", { returnObjects: true })}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>

            <p className="text-gray-400 text-lg max-w-xl mb-8 leading-relaxed">
              {t("home.desc")}
            </p>

            <div className="flex gap-4">
              {[
                { Icon: FaGithub, href: "https://github.com/Augajom" },
                { Icon: SiGmail, href: "mailto:suphamethee.au@gmail.com" },
                { Icon: FaFacebook, href: "https://www.facebook.com/suphamethee.au/" },
                { Icon: RiInstagramFill, href: "https://www.instagram.com/sp_rea1s/" }
              ].map(({ Icon, href }, idx) => (
                <motion.a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-full border border-white/10 bg-white/5 hover:bg-orange-500 hover:border-orange-500 text-white hover:text-black transition-all duration-300"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
               <div className="absolute inset-0 bg-orange-500 rounded-full blur-[60px] opacity-40 group-hover:opacity-40 transition-opacity duration-500"></div>
               <img
                  src={profile}
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-full border-2 border-white/10 shadow-2xl group-hover:transition-all duration-500"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Home;
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiGmail } from "react-icons/si";
import { IoLocation } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const contactInfo = [
    { icon: <IoLocation size={40} />, title: t("contact.items.address.title"), desc: t("contact.items.address.desc") },
    { icon: <HiOutlineMailOpen size={40} />, title: t("contact.items.email.title"), desc: t("contact.items.email.desc") },
    { icon: <LuPhoneCall size={40} />, title: t("contact.items.phone.title"), desc: t("contact.items.phone.desc") },
  ];

  const SocialBtn = ({ href, Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group p-4 bg-zinc-900 rounded-full border border-white/10 hover:bg-orange-500 hover:text-black hover:scale-110 transition-all duration-300">
      <Icon className="text-2xl text-gray-400 group-hover:text-black transition-colors" />
    </a>
  );

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black"></div>
      
      <div className="container max-w-6xl mx-auto px-6 relative z-10 text-center">
        <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{t("contact.header")}</h1>
                </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 border border-white/5 p-10 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-orange-500 mb-6 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-400 whitespace-pre-line">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-6">
          <SocialBtn href="https://github.com/Augajom" Icon={FaGithub} />
          <SocialBtn href="mailto:suphamethee.au@gmail.com" Icon={SiGmail} />
          <SocialBtn href="https://www.facebook.com/suphamethee.au/" Icon={FaFacebook} />
          <SocialBtn href="https://www.instagram.com/sp_rea1s/" Icon={RiInstagramFill} />
        </div>
        
        <footer className="mt-20 text-gray-600 text-sm">
           © {new Date().getFullYear()} Suphamethee Intharalib. All rights reserved.
        </footer>
      </div>
    </section>
  );
}

export default Contact;
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AboutIntro() {
  const { t } = useTranslation();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm text-center md:text-left relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6">
        {t("about.intro.title")}
      </h1>
      <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
        <p>
          {t("about.intro.greeting")} <span className="text-white font-semibold">{t("about.intro.name")}</span>
        </p>
        <p className="whitespace-pre-line">{t("about.intro.study")}</p>
        <p>{t("about.intro.internship")}</p>
        <p className="text-white/60 text-base mt-4 border-l-4 border-orange-500 pl-4 italic">
          "{t("about.intro.goal")}"
        </p>
      </div>
    </motion.div>
  )
}
export default AboutIntro;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useTranslation } from "react-i18next";

//image imports
import img1 from "../assets/experiences/1.png";
import img2 from "../assets/experiences/2.png";
import img3 from "../assets/experiences/3.png";
import img4 from "../assets/experiences/4.png";
import img5 from "../assets/experiences/5.png";
import img6 from "../assets/experiences/6.png";
import img7 from "../assets/experiences/7.png";
import img8 from "../assets/experiences/8.png";
import img9 from "../assets/experiences/9.jpg";
import img10 from "../assets/experiences/10.jpg";
import img11 from "../assets/experiences/11.jpg";
import img12 from "../assets/experiences/12.jpg";
import img13 from "../assets/experiences/13.jpg";

function Experience() {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState([]); 

  const experiences = t("experience.items", { returnObjects: true });
  const expKeys = Object.keys(experiences);
  
  const media = {
    exp1: [
      img1, img2, img3, img4, img5, img6, img7, 
      img8, img9, img10, img11, img12, img13,
    ],
  };

  return (
    <section id="experience" className="min-h-screen bg-black py-20 relative">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">{t("experience.header")}</h1>
        </motion.div>

        <div className="space-y-16 relative">
           {/* Connecting Line */}
           <div className="absolute left-0 md:left-1/2 w-1 h-full bg-white/5 -translate-x-1/2 hidden md:block"></div>

          {expKeys.map((key, idx) => {
            const exp = experiences[key];
            const images = media[key] || [];
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-zinc-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm hover:border-orange-500/30 transition-colors"
              >
                <div className="grid grid-cols-1 gap-8 items-center">
                  {/* Slider Section */}
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={10} slidesPerView={1} loop autoplay={{ delay: 5000 }}
                        pagination={{ clickable: true }} navigation={true}
                        className="w-full aspect-video"
                        style={{ "--swiper-navigation-color": "#f97316", "--swiper-pagination-color": "#f97316" }}
                      >
                        {images.map((img, i) => (
                          <SwiperSlide key={i}>
                            <div 
                                className="w-full h-full relative group cursor-default md:cursor-pointer" 
                                onClick={() => { 
                                    if (window.innerWidth >= 768) {
                                        setCurrentSlides(images);
                                        setCurrentIndex(i); 
                                        setLightboxOpen(true); 
                                    }
                                }}
                            >
                              <img src={img} alt="Experience" className="w-full h-full object-cover" />
                              
                              {/* แก้ตรงนี้: ซ่อน Overlay (View) บนมือถือ (hidden) แสดงเฉพาะ md ขึ้นไป (md:flex) */}
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center pointer-events-none">
                                <span className="text-white bg-black/50 px-3 py-1 rounded-full text-sm">View</span>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                  </div>

                  {/* Text Section */}
                  <div className="text-left">
                    <h2 className="text-2xl font-bold text-white">{exp.title}</h2>
                    <h3 className="text-xl text-orange-500 font-medium mb-4">{exp.company} | {exp.period}</h3>
                    <p className="text-gray-400 leading-relaxed whitespace-pre-line">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Lightbox Component */}
        <Lightbox 
            open={lightboxOpen} 
            close={() => setLightboxOpen(false)} 
            slides={currentSlides.map((src) => ({ src }))} 
            index={currentIndex} 
        />
      </div>
    </section>
  );
}
export default Experience;
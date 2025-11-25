import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const menu = ["home", "about", "skills", "projects", "experience", "contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    setOpen(false);
    const element = document.getElementById(elementId);
    if (!element) return;

    const navbarHeight = 100;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setActive(elementId);
      }
    };

    requestAnimationFrame(animation);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        "fixed top-4 left-0 right-0 z-[999] mx-auto w-[95%] max-w-5xl transition-all duration-500",
        scrolled || open
          ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-8">
        {/* Logo */}
        <div 
          className="text-2xl font-bold tracking-tighter cursor-pointer text-white"
          onClick={() => smoothScrollTo("home")}
        >
          S<span className="text-orange-500">.</span>AU
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5">
          {menu.map((section) => (
            <li key={section}>
              <button
                onClick={() => smoothScrollTo(section)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden",
                  active === section
                    ? "text-black bg-orange-500 shadow-lg shadow-orange-500/25"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                )}
              >
                {t(`menu.${section}`)}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side (Lang + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2 text-xs font-bold bg-white/5 p-1 rounded-lg border border-white/5">
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={cn("px-2 py-1 rounded transition-colors", i18n.language === "en" ? "bg-white/10 text-orange-500" : "text-gray-500 hover:text-white")}
            >EN</button>
            <button
              onClick={() => i18n.changeLanguage("th")}
              className={cn("px-2 py-1 rounded transition-colors", i18n.language === "th" ? "bg-white/10 text-orange-500" : "text-gray-500 hover:text-white")}
            >TH</button>
          </div>

          <div className="lg:hidden text-white cursor-pointer" onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-transparent"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-lg border-t border-white/10 mt-2">
              {menu.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => smoothScrollTo(section)}
                    className={cn(
                      "transition-colors",
                      active === section ? "text-orange-500 font-bold" : "text-gray-400"
                    )}
                  >
                    {t(`menu.${section}`)}
                  </button>
                </li>
              ))}
              <div className="flex gap-4 pt-4">
                 <button onClick={() => i18n.changeLanguage("en")} className={cn(i18n.language === "en" ? "text-orange-500" : "text-gray-500")}>EN</button>
                 <button onClick={() => i18n.changeLanguage("th")} className={cn(i18n.language === "th" ? "text-orange-500" : "text-gray-500")}>TH</button>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
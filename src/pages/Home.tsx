import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import { getLocalImageUrl } from "../utils/images";
import Orbit from "../components/home/orbit";
import { navLinks } from "../utils/nav_links";

export default function Home() {
  const { t } = useTranslation();
  const [typedText, setTypedText] = useState("");
  const fullText = t(TranslationKey.softwareEngineer);
  
  const surroundingImages = useMemo(() => 
    Object.values(data.planet), 
    [data.planet]
  );
  
  const centerImage = getLocalImageUrl("profile.jpeg");

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [fullText]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div id={navLinks.home.destination} className="relative min-h-screen flex items-center justify-center bg-app_color overflow-hidden">
      <div className="absolute inset-0 star-field"></div>
      
      <motion.div 
        className="relative z-10 container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-lg text-cyan-400 mb-2 retro-text">
                {t(TranslationKey.hi)} 👋
              </h1>
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4">
                {t(TranslationKey.iAmJoseph)}
              </h2>
              <div className="text-2xl sm:text-3xl text-gradient font-semibold h-12 flex items-center justify-center lg:justify-start">
                {typedText}
                <span className="animate-pulse ml-1">|</span>
              </div>
            </motion.div>

            <motion.p 
              className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              {t(TranslationKey.homeSubtitle)}. {t(TranslationKey.homeDescription)}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-100}
                className="professional-button cursor-pointer inline-flex items-center justify-center"
              >
                {t(TranslationKey.viewMyWork)}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-100}
                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-medium rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
              >
                {t(TranslationKey.letsChat)}
              </Link>
            </motion.div>

            <motion.div 
              className="mt-8 flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              {Object.entries(data.logos).slice(0, 3).map(([key, social]) => (
                <a
                  key={key}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group"
                >
                  <img
                    src={social.logo}
                    alt={key}
                    className="h-8 w-8 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110 glow-on-hover"
                  />
                </a>
              ))}
            </motion.div>
          </motion.div>

                    <motion.div 
            className="flex-1 flex justify-center items-center"
            variants={itemVariants}
          >
            <Orbit 
              centerImage={centerImage} 
              surroundingImages={surroundingImages}
              width={500}
              height={500}
            />
          </motion.div>

        </div>
        <motion.div 
          className="text-center mt-16"
          variants={itemVariants}
        >
          <Link
            to={navLinks.expertise.destination}
            smooth={true}
            duration={500}
            offset={-100}
            className="cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <p className="text-sm mt-2">{t(TranslationKey.scrollToExplore)}</p>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
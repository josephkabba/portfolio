import React from "react";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";
import data from "../data/personal.json";
import { openEmailClient } from "../utils/email";
import { navLinks } from "../utils/nav_links";
import InfoCard from "../components/contact/infoCard";
import image from "../images/project.svg";

function Contact() {
  const { t } = useTranslation();
  const personalInfo = Object.entries(data.personal_info);

  return (
    <div id={navLinks.contact.destination} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-300 retro-text">
        {t(TranslationKey.contact)}
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
        <InfoCard personalInfo={personalInfo} />
        <div className="flex flex-col items-center justify-center w-full lg:w-1/2 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-8">
          <img className="w-44 h-44 mb-6" src={image} alt="Contact" />
          <h2 className="text-2xl font-bold text-cyan-300 mb-6 retro-text">
            {t(TranslationKey.letsWork)}
          </h2>
          <button
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full transition-colors duration-300 shadow-lg hover:shadow-cyan-500/50"
            onClick={(e) => openEmailClient(data.personal_info.email, e)}
          >
            {t(TranslationKey.letsChat)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
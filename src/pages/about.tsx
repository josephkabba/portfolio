import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import { getLocalImageUrl } from "../utils/images";

export default function About() {
  const [about] = useState(data.about);
  const coder = getLocalImageUrl("coder.gif");
  const { t } = useTranslation();

  return (
    <div className="relative w-full bg-app_color text-slate-300 overflow-hidden">
      <div className="absolute inset-0 star-field"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-cyan-300 text-center retro-text">
          {t(TranslationKey.aboutMe)}
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <img 
            className={twMerge(
              "rounded-full w-64 h-64 object-cover",
              "border-4 border-cyan-300 transition-transform duration-300 ease-in-out",
              "hover:scale-105 hover:border-cyan-200"
            )}
            src={coder} 
            alt="coder" 
          />
          <div className={twMerge(
            "bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-8 max-w-2xl",
            "border border-cyan-300 transition-all duration-300 ease-in-out",
            "hover:border-cyan-200 retro-box"
          )}>
            {about.map((text, key) => (
              <p key={key} className="mb-4 text-lg text-slate-300 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { ExperienceModel } from "../../data/models";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../localization";

interface ExpSectionProps {
  companyName: string;
  data: ExperienceModel;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExpSection({ companyName, data, isOpen, onToggle }: ExpSectionProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300">
      <div 
        className="p-6 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors duration-300"
        onClick={onToggle}
      >
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
            <h2 className="text-xl font-bold text-cyan-300 mb-1 sm:mb-0">{data.title}</h2>
            <span className="text-cyan-400 font-medium text-sm bg-cyan-400 bg-opacity-10 px-3 py-1 rounded-full">
              {data.duration}
            </span>
          </div>
          <h3 className="text-lg text-slate-300 font-medium">{companyName}</h3>
          <p className="text-slate-400 text-sm mt-1">{data.area}</p>
        </div>
        <button className="ml-4 text-cyan-300 hover:text-cyan-400 transition-colors duration-300 text-xl">
          {isOpen ? '▲' : '▼'}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 pb-6"
          >
            <div className="border-t border-slate-600 pt-4">
              <p className="text-slate-300 mb-4 leading-relaxed">{data.description}</p>
              <div className="space-y-2">
                <p className="text-slate-400 font-medium text-sm">{t(TranslationKey.technologiesAndTools)}</p>
                <div className="flex flex-wrap gap-2">
                  {data.tech.map((item: any, index: number) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-400 bg-opacity-20 rounded-full border border-cyan-400 border-opacity-30 hover:border-opacity-60 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
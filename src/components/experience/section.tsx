import React from "react";
import { ExperienceModel } from "../../data/models";
import { motion, AnimatePresence } from "framer-motion";

interface ExpSectionProps {
  companyName: string;
  data: ExperienceModel;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExpSection({ companyName, data, isOpen, onToggle }: ExpSectionProps) {
  return (
    <div className="bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors duration-300"
        onClick={onToggle}
      >
        <div>
          <h2 className="text-xl font-bold text-cyan-300">{`${data.title} at ${companyName}`}</h2>
          <p className="text-slate-300">{data.duration}</p>
        </div>
        <button className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300">
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
            className="px-4 pb-4"
          >
            <p className="text-slate-400 mb-2">{data.area}</p>
            <p className="text-slate-300 mb-4">{data.description}</p>
            <div className="flex flex-wrap gap-2">
              {data.tech.map((item: any, index: number) => (
                <span key={index} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-400 bg-opacity-20 rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
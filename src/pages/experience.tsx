import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ExpSection from "../components/experience/section";
import personal from "../data/personal.json";
import { workToList } from "../utils/experience_helpers";
import { navLinks } from "../utils/nav_links";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";

function Experience() {
  const { t } = useTranslation();
  const data = useMemo(() => workToList(personal.experience), []);
  const [activeId, setActiveId] = useState(0);
  const [filter, setFilter] = useState("all");

  const toggleSection = (id: number) => {
    setActiveId(activeId === id ? -1 : id);
  };

  const filteredData = useMemo(() => {
    if (filter === "all") return data;
    return data.filter(([_, experience]) => 
      experience.tech.some(tech => 
        tech.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [data, filter]);

  const techStack = useMemo(() => {
    const allTech = data.flatMap(([_, exp]) => exp.tech);
    const uniqueTech = [...new Set(allTech)];
    return uniqueTech;
  }, [data]);

  return (
    <div id={navLinks.experience.destination} className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-cyan-300 retro-text">
          {t(TranslationKey.experience)}
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {t(TranslationKey.experienceSubtitle)}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-cyan-300 mb-4">{t(TranslationKey.filterByTechnology)}</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === "all" 
                  ? "bg-cyan-500 text-white" 
                  : "bg-slate-700 text-slate-300 hover:bg-slate-600"
              }`}
            >
              {t(TranslationKey.allRoles)}
            </button>
            {techStack.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === tech 
                    ? "bg-cyan-500 text-white" 
                    : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <p className="text-slate-400 text-sm">
            {filteredData.length} of {data.length} {t(TranslationKey.showingPositions)}
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-6"
      >
        {filteredData.map(([companyName, experience], index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ExpSection
              isOpen={activeId === experience.id}
              data={experience}
              companyName={companyName}
              onToggle={() => toggleSection(experience.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {filteredData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-slate-400 text-lg">{t(TranslationKey.noPositionsFound)} "{filter}" technology.</p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-colors duration-300"
          >
            {t(TranslationKey.showAllPositions)}
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default Experience;
import React, { useState, useMemo } from "react";
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

  const toggleSection = (id: number) => {
    setActiveId(activeId === id ? -1 : id);
  };

  return (
    <div id={navLinks.experience.destination} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-300 retro-text">
        {t(TranslationKey.experience)}
      </h1>
      <div className="space-y-6">
        {data.map(([companyName, experience]) => (
          <ExpSection
            key={experience.id}
            isOpen={activeId === experience.id}
            data={experience}
            companyName={companyName}
            onToggle={() => toggleSection(experience.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
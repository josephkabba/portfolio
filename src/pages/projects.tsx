import { useState } from "react";
import data from "../data/personal.json";
import { navLinks } from "../utils/nav_links";
import { Project } from "../utils/projects";
import EaseInAnimation from "../components/motion/ease_in_animation";
import FeaturedProjectCard from "../components/projects/featured_project_card";
import OtherProjectCard from "../components/projects/other_project_card";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";
const variant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

function Projects() {
  const { t } = useTranslation();
  const [projects] = useState(() => {
    const featured: Project[] = data.projects
      .filter((value) => value.featured === true)
      .sort();
    const silent: Project[] = data.projects
      .filter((value) => value.featured === false)
      .sort();

    return {
      featured: featured,
      silent: silent,
    };
  });

  
  return (
    <div id={navLinks.project.destination} className="layer">
      <h1 className="heading">{ t(TranslationKey.projects) }</h1>
      <div className="flex  sm:mx-5 sm:p-10 flex-col w-full ">
        {projects.featured.map((project, key) => (
          <EaseInAnimation
            key={key}
            className="mt-4"
          >
            <FeaturedProjectCard data={project} />
          </EaseInAnimation>
        ))}
        <EaseInAnimation className="flex w-full mt-24 flex-row items-center">
          <hr className="grow bg-white rounded " />
          <h1 className="mx-10 text-center text-xl">{ t(TranslationKey.otherProjects) }</h1>
          <hr className="grow bg-white rounded " />
        </EaseInAnimation>
        <div className="grid sm:gap-6 sm:grid-cols-3 grid-cols-1 mt-10">
          {projects.silent.map((project, key) => (
            <EaseInAnimation
              key={key}
              className="mt-4"
            >
              <OtherProjectCard data={project} />
            </EaseInAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

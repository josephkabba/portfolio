import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import EaseInAnimation from "../components/motion/ease_in_animation";
import FeaturedProjectCard from "../components/projects/featuredProjectCard";
import OtherProjectCard from "../components/projects/otherProjectCard";
import { Project } from "../data/models";
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import { navLinks } from "../utils/nav_links";

function Projects() {
  const { t } = useTranslation();
  const projects = useMemo(() =>
  {
    //ts-ignore
      const featured = data.projects
        .filter((value) => value.featured === true)
        .sort((a, b) => a.id - b.id);
    //ts-ignore
      const silent = data.projects
        .filter((value) => value.featured === false)
        .sort((a, b) => a.id - b.id);

      return { featured, silent };
  }, [data.projects]);

  return (
    <div id={navLinks.project.destination} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-300 retro-text">
        {t(TranslationKey.projects)}
      </h1>
      <div className="space-y-12">
        {projects.featured.map((project, index) => (
          <EaseInAnimation key={project.name} className="mt-4">
            <FeaturedProjectCard data={project as Project} index={index} />
          </EaseInAnimation>
        ))}
        <EaseInAnimation className="flex items-center">
          <hr className="flex-grow border-t border-cyan-400" />
          <h2 className="mx-4 text-xl text-cyan-300 retro-text">
            {t(TranslationKey.otherProjects)}
          </h2>
          <hr className="flex-grow border-t border-cyan-400" />
        </EaseInAnimation>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.silent.map((project, index) => (
            <EaseInAnimation key={project.name} className="h-full">
              <OtherProjectCard data={project as Project} index={index} />
            </EaseInAnimation>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
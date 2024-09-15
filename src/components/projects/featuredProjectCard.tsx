import React, {useState} from "react";
import { Project } from "../../data/models";
import dataset from "../../data/personal.json";
import { getLocalImageUrl } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../localization";
import { twMerge } from "tailwind-merge";
import ProjectDialog from "../common/ProjectDialog";


interface FeaturedProjectCardProps {
  data: Project;
  index: number;
}

export default function FeaturedProjectCard({ data, index }: FeaturedProjectCardProps) {
  const { t } = useTranslation();
  const image = getLocalImageUrl(data.image);
  const logos = dataset.logos;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <div 
        className={twMerge(
          "flex flex-col md:flex-row items-stretch bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden",
          "transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer",
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        )}
        onClick={openDialog}
      >
        <div className="w-full md:w-1/2 relative group overflow-hidden">
          <img 
            src={image} 
            alt={data.name} 
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-cyan-400 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 ease-in-out" />
        </div>
        <div className="w-full md:w-1/2 p-6 space-y-4 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-cyan-300 retro-text">
            {data.name}
          </h2>
          <p className="text-slate-300"><span className="font-semibold text-cyan-400">{t(TranslationKey.technology)}:</span> {data.mainTech}</p>
          <p className="text-slate-300">{data.description}</p>
          <div className="flex flex-wrap gap-2">
            {data.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-400 bg-opacity-20 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {data.repo && (
              <a href={data.repo} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                <img src={logos.githubTo.logo} alt="GitHub" className="w-6 h-6" />
              </a>
            )}
            {data.link && (
              <a href={data.link} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300" onClick={(e) => e.stopPropagation()}>
                <img src={logos.linkTo.logo} alt="External Link" className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
      <ProjectDialog isOpen={isDialogOpen} onClose={closeDialog} project={data} />
    </>
  );
}
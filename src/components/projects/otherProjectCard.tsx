import { useTranslation } from "react-i18next";
import { Project } from "../../data/models";
import dataset from "../../data/personal.json";
import { TranslationKey } from "../../localization";
import { twMerge } from "tailwind-merge";
import React, { useState } from "react";
import ProjectDialog from "../common/ProjectDialog";

interface OtherProjectCardProps {
  data: Project;
  index: number;
}

export default function OtherProjectCard({ data, index }: OtherProjectCardProps) {
  const { t } = useTranslation();
  const logos = dataset.logos;
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <div
        className={twMerge(
          "flex flex-col h-full bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-6",
          "transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-cyan-400/20 cursor-pointer",
          "border border-cyan-400 border-opacity-20 hover:border-opacity-50"
        )}
        onClick={openDialog}
      >
        <h2 className="text-xl font-bold text-cyan-300 retro-text mb-4">
          {data.name}
        </h2>
        <p className="text-slate-300 mb-2"><span className="font-semibold text-cyan-400">{t(TranslationKey.technology)}:</span> {data.mainTech}</p>
        <p className="text-slate-300 flex-grow">{data.description}</p>
        <div className="mt-4 flex justify-end space-x-4">
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
      <ProjectDialog isOpen={isDialogOpen} onClose={closeDialog} project={data} />
    </>
  );
}

import React from "react";
import { Project } from "../../data/models";
import { getLocalImageUrl } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../localization";
import dataset from "../../data/personal.json";

interface ProjectDialogProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

export default function ProjectDialog({ isOpen, onClose, project }: ProjectDialogProps) {
  const { t } = useTranslation();
  const image = project.featured ? getLocalImageUrl(project.image) : null;
  const logos = dataset.logos;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold text-cyan-300 retro-text">{project.name}</h2>
            <button title="." type="button" onClick={onClose} className="text-cyan-300 hover:text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {image && (
            <img src={image} alt={project.name} className="w-full h-64 object-cover rounded-lg" />
          )}
          <p className="text-slate-300"><span className="font-semibold text-cyan-400">{t(TranslationKey.technology)}:</span> {project.mainTech}</p>
          <p className="text-slate-300">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="px-2 py-1 text-xs font-medium text-cyan-300 bg-cyan-400 bg-opacity-20 rounded">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300">
                <img src={logos.githubTo.logo} alt="GitHub" className="w-6 h-6" />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-400 transition-colors duration-300">
                <img src={logos.linkTo.logo} alt="External Link" className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export interface ExpertiseModel {
  name: string;
  icon: string;
  detail: string[] | string;
  architectures: string[];
  libraries: string[];
}

export type Project = {
  name: string;
  id: number;
  featured: boolean;
  mainTech: string;
  type: string;
  image: string;
  tech: string[];
  description: string;
  link: string;
  repo: string;
};

export type ExperienceModel = {
  id: number;
  title: string;
  description: string;
  duration: string;
  area: string;
  tech: string[];
};
import { t } from "i18next";
import { resume as resumeURL, } from "../data/personal.json";
import { TranslationKey } from "../localization";

type Link = {
  name: string;
  destination: string;
};

export const navLinks: { [index: string]: Link } = {
  home: { name: `//${t(TranslationKey.home)}`, destination: "/" },
  expertise: { name: `//${t(TranslationKey.expertise)}`, destination: "expertise" },
  project: { name: `//${t(TranslationKey.projects)}`, destination: "projects" },
  experience: { name: `//${t(TranslationKey.experience)}`, destination: "experience" },
  contact: { name: `//${t(TranslationKey.contact)}`, destination: "contact" },
  resume: {
    name: `//${t(TranslationKey.resume)}`,
    destination: resumeURL,
  },
};

export function getNavLinks(): Link[] {
  const entries = Object.entries(navLinks).map((value) => value[1]);
  return entries;
}

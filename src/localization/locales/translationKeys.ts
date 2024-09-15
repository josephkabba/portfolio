import { EnumDictionary } from "../../data/enum";

export type Translation = EnumDictionary<TranslationKey, string>;

export enum TranslationKey {
  site = 'site',
  hi = 'hi',
  iAmJoseph = 'iAmJoseph',
  softwareEngineer = 'softwareEngineer',
  homeSubtitle = 'homeSubtitle',
  technology = 'technology',
  home = 'home',
  expertise = 'expertise',
  projects = 'projects',
  experience = 'experience',
  contact = 'contact',
  resume = 'resume',
  about = 'about',
  aboutMe = 'aboutMe',
  letsWork = 'letsWork',
  letsChat = 'letsChat',
  siteCreator = 'siteCreator',
  copyRight = 'copyRight',
  otherProjects = 'otherProjects',
}

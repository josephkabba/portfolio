import { ExperienceModel } from "../data/models";

export function workToList(data: {
  [index: string]: any;
}): [string, ExperienceModel][] {
  const entries = Object.entries(data);
  return entries;
}

type Link = {
  name: string;
  destination: string;
};

export const navLinks: { [index: string]: Link } = {
  home: { name: "//Home", destination: "/" },
  expertise: { name: "//Expertise", destination: "expertise" },
  project: { name: "//Projects", destination: "projects" },
  experience: { name: "//Experience", destination: "experience" },
  contact: { name: "//Contact", destination: "contact" },
  resume: { name: "//Resume", destination: "" },
};

export function getNavLinks(): Link[] {
  const entries = Object.entries(navLinks).map((value) => value[1]);
  return entries;
}

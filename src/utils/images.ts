export const getLocalImageUrl = (file: string): string => {
  return new URL(`/src/images/${file}`, import.meta.url).href;
};
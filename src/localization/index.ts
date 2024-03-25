import { default as i18n, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources, TranslationKey } from './locales';
import LanguageDetector from 'i18next-browser-languagedetector';

const options = {
  order: ['navigator'],
}

const initConfig = {
  detection: options,
  fallbackLng: 'en',
  resources,
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(initConfig);

export default i18n;

export type TranslationFunction = TFunction<TranslationKey>;

export { TranslationKey } from './locales/translationKeys';

export { TranslationProvider } from './Provider';
import { ReactNode } from 'react';
import i18n from '.';
import { I18nextProvider } from 'react-i18next';

interface TranslationProviderProps {
  children: ReactNode;
}

export function TranslationProvider({ children }: TranslationProviderProps) {
  return <I18nextProvider i18n={ i18n }>{ children }</I18nextProvider>
}

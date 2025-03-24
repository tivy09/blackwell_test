'use client';

import { ReactNode, useEffect, useState } from 'react';
import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

let isInitialized = false;

const I18nProvider = ({ children }: { children: any }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      i18n
        .use(HttpBackend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
          fallbackLng: 'en',
          supportedLngs: ['en', 'zh'],
          debug: false,
          interpolation: {
            escapeValue: false,
          },
          backend: {
            loadPath: '/locales/{{lng}}/common.json',
          },
        })
        .then(() => {
          isInitialized = true;
          setReady(true); 
        });
    } else {
      setReady(true); 
    }
  }, []);

  if (!ready) return null; 

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18nProvider;

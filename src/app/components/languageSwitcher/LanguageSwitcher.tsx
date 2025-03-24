'use client';

import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const LANGUAGES = {
  en: { label: 'English', icon: '🇬🇧' },
  zh: { label: '中文', icon: '🇨🇳' },
} as const;

type Language = keyof typeof LANGUAGES;

const LanguageSwitcher = () => {
  const { i18n: i18nInstance } = useTranslation();
  const currentLang = i18nInstance.language as Language;

  const handleChangeLanguage = (lang: Language) => {
    if (lang !== currentLang) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        border: '1px solid #ccc',
        borderRadius: '9999px',
        padding: '4px',
        backgroundColor: '#f0f0f0',
      }}
    >
      {(Object.entries(LANGUAGES) as [Language, { label: string; icon: string }][]).map(
        ([langKey, { icon, label }]) => {
          const isSelected = currentLang === langKey;

          return (
            <button
              key={langKey}
              onClick={() => handleChangeLanguage(langKey)}
              style={{
                padding: '6px 10px',
                borderRadius: '9999px',
                backgroundColor: isSelected ? '#007bff' : 'transparent',
                color: isSelected ? '#fff' : '#000',
                border: 'none',
                fontSize: '16px',
                cursor: isSelected ? 'default' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease-in-out',
              }}
              disabled={isSelected}
            >
              <span>{icon}</span>
              <span style={{ fontSize: '13px' }}>{label}</span>
            </button>
          );
        }
      )}
    </div>
  );
};

export default LanguageSwitcher;

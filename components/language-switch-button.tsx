'use client';

import React, { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState<'en' | 'es'>('en');

  // On mount, read locale from sessionStorage (or default to 'en')
  useEffect(() => {
    const storedLocale = sessionStorage.getItem('NEXT_LOCALE') as 'en' | 'es' | null;
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en';
    sessionStorage.setItem('NEXT_LOCALE', newLocale);
    window.dispatchEvent(new Event('locale-change'));

    setLocale(newLocale);
    // Optional: you can trigger a page reload or refresh here if needed
  };

  return (
    <button onClick={toggleLocale}>
      {locale === 'en' ? 'Español' : 'English'}
    </button>
  );
}

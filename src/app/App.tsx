import { useEffect, useMemo, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Manifesto } from './components/Manifesto';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { siteCopy, type Locale } from './i18n';

const LOCALE_PREFERENCE_KEY = 'portfolio-locale-preference';

const getStoredLocale = (): Locale | null => {
  const value = window.localStorage.getItem(LOCALE_PREFERENCE_KEY);
  return value === 'en' || value === 'kr' ? value : null;
};

const detectBrowserLocale = (): Locale => {
  const languages = navigator.languages ?? [];
  const primaryLanguage = navigator.language ?? '';
  const allLanguages = [...languages, primaryLanguage].filter(Boolean).map((value) => value.toLowerCase());
  const hasKoreanLanguage = allLanguages.some((value) => value.startsWith('ko'));
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const isKoreanTimezone = timezone === 'Asia/Seoul';
  return hasKoreanLanguage || isKoreanTimezone ? 'kr' : 'en';
};

const resolveInitialLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return 'en';
  }
  return getStoredLocale() ?? detectBrowserLocale();
};

export default function App() {
  const [locale, setLocale] = useState<Locale>(resolveInitialLocale);

  const copy = useMemo(() => siteCopy[locale], [locale]);

  const toggleLocale = () => {
    setLocale((prev) => {
      const nextLocale = prev === 'en' ? 'kr' : 'en';
      window.localStorage.setItem(LOCALE_PREFERENCE_KEY, nextLocale);
      return nextLocale;
    });
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'ko';
  }, [locale]);

  useEffect(() => {
    let isCancelled = false;

    if (getStoredLocale()) {
      return () => {
        isCancelled = true;
      };
    }

    const detectByLocation = async () => {
      try {
        const response = await fetch('/api/locale', { cache: 'no-store' });
        if (!response.ok) {
          return;
        }
        const payload = (await response.json()) as { isKoreanCountry?: boolean };
        if (!isCancelled && payload.isKoreanCountry) {
          setLocale('kr');
        }
      } catch {
        return;
      }
    };

    detectByLocation();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFBF5] font-sans selection:bg-[#FF5C28] selection:text-white">
      <Navbar locale={locale} copy={copy.navbar} onToggleLocale={toggleLocale} />
      <main>
        <Hero locale={locale} copy={copy.hero} />
        <Manifesto locale={locale} copy={copy.manifesto} />
        <Projects locale={locale} copy={copy.projects} />
        <Capabilities locale={locale} copy={copy.capabilities} />
        <FAQ locale={locale} copy={copy.faq} />
        <Introduction locale={locale} copy={copy.introduction} />
        <ContactSection locale={locale} copy={copy.contactSection} />
      </main>
      <Footer copy={copy.footer} />
      <ScrollToTopButton locale={locale} />
    </div>
  );
}

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

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');

  const copy = useMemo(() => siteCopy[locale], [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'kr' : 'en'));
  };

  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'ko';
  }, [locale]);

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

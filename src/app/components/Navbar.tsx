import { type MouseEvent } from 'react';
import { motion } from 'motion/react';
import type { Locale, SiteCopy } from '../i18n';

interface NavbarProps {
  locale: Locale;
  copy: SiteCopy['navbar'];
  onToggleLocale: () => void;
}

export function Navbar({ locale, copy, onToggleLocale }: NavbarProps) {
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) {
      return;
    }

    const navOffset = 120;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
    window.history.replaceState(null, '', `#${targetId}`);
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-4 rounded-full border border-[#333] bg-[#111111] px-4 py-3 text-[#FFFBF5] shadow-lg md:gap-8 md:px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#FF5C28] text-xl font-bold tracking-tighter text-black">P</div>

        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#projects" onClick={(event) => handleNavClick(event, 'projects')} className="transition-colors hover:text-[#FF5C28]">
            {copy.projects}
          </a>
          <a href="#capabilities" onClick={(event) => handleNavClick(event, 'capabilities')} className="transition-colors hover:text-[#FF5C28]">
            {copy.capabilities}
          </a>
          <a href="#about" onClick={(event) => handleNavClick(event, 'about')} className="transition-colors hover:text-[#FF5C28]">
            {copy.about}
          </a>
          <a href="#faq" onClick={(event) => handleNavClick(event, 'faq')} className="transition-colors hover:text-[#FF5C28]">
            {copy.faq}
          </a>
        </div>

        <button
          type="button"
          onClick={onToggleLocale}
          aria-label="Toggle language"
          className="rounded-full border border-[#555] px-3 py-1.5 text-xs font-bold tracking-wide text-[#FFFBF5] transition-colors hover:border-[#FF5C28]"
        >
          <span className={locale === 'en' ? 'text-[#FF5C28]' : 'opacity-70'}>EN</span>
          <span className="mx-1 opacity-60">/</span>
          <span className={locale === 'kr' ? 'text-[#FF5C28]' : 'opacity-70'}>KR</span>
        </button>

        <a
          href="#contact"
          onClick={(event) => handleNavClick(event, 'contact')}
          className="rounded-full bg-[#B2FF59] px-4 py-1.5 text-sm font-bold text-black transition-transform hover:scale-105"
        >
          {copy.contact}
        </a>
      </div>
    </motion.nav>
  );
}

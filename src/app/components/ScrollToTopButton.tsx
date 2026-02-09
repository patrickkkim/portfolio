import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import type { Locale } from '../i18n';

interface ScrollToTopButtonProps {
  locale: Locale;
}

export function ScrollToTopButton({ locale }: ScrollToTopButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const label = locale === 'kr' ? '맨위로' : 'TOP';

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          key="scroll-to-top"
          type="button"
          aria-label={locale === 'kr' ? '맨 위로 이동' : 'Go to top'}
          initial={{ opacity: 0, y: 16, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.92 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 z-[80] flex items-center gap-2 rounded-full border-2 border-black bg-[#111111] px-4 py-3 text-sm font-extrabold tracking-wide text-[#FFFBF5] shadow-[6px_6px_0px_0px_rgba(255,92,40,1)] transition-transform hover:scale-105 md:right-12 md:bottom-12"
        >
          <ArrowUp size={16} />
          <span>{label}</span>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

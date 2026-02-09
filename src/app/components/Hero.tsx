import { motion } from 'motion/react';
import type { Locale, SiteCopy } from '../i18n';

interface HeroProps {
  locale: Locale;
  copy: SiteCopy['hero'];
}

export function Hero({ locale, copy }: HeroProps) {
  const isKorean = locale === 'kr';
  const highlightPhrase = copy.highlightPhrase;

  const renderHeadline = () => {
    if (!highlightPhrase) {
      return copy.headline;
    }

    const index = copy.headline.indexOf(highlightPhrase);
    if (index === -1) {
      return copy.headline;
    }

    const before = copy.headline.slice(0, index);
    const after = copy.headline.slice(index + highlightPhrase.length);

    return (
      <>
        {before}
        <span className="font-extrabold text-[#FF5C28]">{highlightPhrase}</span>
        {after}
      </>
    );
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden rounded-b-[40px] bg-[#FFFBF5] px-4 pt-32 pb-20 text-[#111111] md:px-8">
      <div className="relative z-10 mx-auto w-full max-w-[90vw]">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="relative">
          <h1
            className={`mb-4 text-[13vw] font-black ${
              isKorean ? 'leading-[0.98] tracking-[-0.02em] break-keep' : 'leading-[0.8] tracking-tighter uppercase'
            }`}
          >
            {copy.line1} <br />
            {copy.line2} <br />
            <span className="flex flex-wrap items-center gap-2 md:gap-6">
              <span className="relative inline-block">
                {copy.craft}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="absolute -right-4 top-2 z-[-1] h-12 w-12 rounded-full bg-[#FF5C28] md:-right-12 md:top-4 md:h-24 md:w-24"
                />
              </span>
              <motion.div initial={{ width: 0 }} animate={{ width: 'auto' }} className="mx-2 inline-block aspect-square h-[0.7em] rotate-12 rounded-2xl bg-[#6C63FF] align-middle" />
            </span>
          </h1>
        </motion.div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-[90vw] flex-col items-start justify-between gap-8 md:flex-row md:items-start">
        <div className="max-w-md">
          <p className="mb-4 text-3xl leading-[1.15] font-extrabold tracking-tight md:text-4xl">{copy.prompt}</p>
        </div>

        <div className="max-w-xl text-right md:text-left">
          <h3 className="mb-6 text-2xl leading-tight font-medium tracking-tight md:text-4xl">{renderHeadline()}</h3>
          <p className="mb-8 text-lg opacity-80">{copy.subtext}</p>
        </div>
      </div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute right-8 bottom-8 hidden h-24 w-24 items-center justify-center rounded-full bg-black text-xs font-bold tracking-widest text-[#FFFBF5] uppercase md:flex"
      >
        <div className="text-center">
          {copy.scrollTop}
          <br />
          {copy.scrollBottom}
        </div>
      </motion.div>
    </section>
  );
}

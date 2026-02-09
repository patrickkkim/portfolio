import { motion } from 'motion/react';
import type { Locale, SiteCopy } from '../i18n';

interface ManifestoProps {
  locale: Locale;
  copy: SiteCopy['manifesto'];
}

export function Manifesto({ locale, copy }: ManifestoProps) {
  const isKorean = locale === 'kr';

  return (
    <section id="manifesto" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#111111] px-4 py-32 text-[#FFFBF5] md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-start gap-4">
            <div className="rotate-3 rounded-lg bg-[#B2FF59] p-2 text-black">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className={`text-3xl font-bold md:text-5xl ${isKorean ? 'leading-[1.12] tracking-[-0.01em] break-keep' : 'leading-tight'}`}>
              <span className="mx-1 inline-block -rotate-2 rounded-lg bg-[#6C63FF] px-2">{copy.highlight}</span>
              {copy.statement}
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-2xl font-bold">{copy.changeTitle}</p>
              <p className="text-xl leading-relaxed opacity-70">{copy.changeBody}</p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#FF5C28] to-[#6C63FF] opacity-20 blur-xl" />
              <div className="relative rounded-2xl border border-[#333] bg-[#222] p-8">
                <p className="text-lg font-mono">
                  &lt;div className="future"&gt;
                  <br />
                  &nbsp;&nbsp;{'{ '}
                  {copy.codeExpression}
                  {' }'}
                  <br />
                  &lt;/div&gt;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

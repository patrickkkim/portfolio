import { motion } from 'motion/react';
import type { Locale, SiteCopy } from '../i18n';

interface FAQProps {
  locale: Locale;
  copy: SiteCopy['faq'];
}

export function FAQ({ locale, copy }: FAQProps) {
  const isKorean = locale === 'kr';

  return (
    <section id="faq" className="relative z-30 -mt-10 flex min-h-screen flex-col items-center rounded-t-[40px] bg-[#FF5C28] px-4 py-24 text-[#111111] md:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-20 text-center">
          <p className={`mb-4 text-sm font-bold ${isKorean ? 'tracking-normal' : 'tracking-widest uppercase'}`}>{copy.eyebrow}</p>
          <h2
            className={`text-[12vw] font-black md:text-8xl ${
              isKorean ? 'leading-[1.02] tracking-[-0.01em] break-keep' : 'leading-[0.85] tracking-tighter'
            }`}
          >
            {copy.titleLine1} <br /> {copy.titleLine2}
          </h2>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {copy.items.map((faq, index) => (
            <div key={index} className="flex w-full max-w-2xl flex-col items-center">
              <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="mb-4 inline-block self-start rounded-full bg-[#111111] px-8 py-4 text-white shadow-lg">
                <h3 className="text-lg font-bold">{faq.question}</h3>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0, x: 20 }}
                whileInView={{ scale: 1, opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative w-full rounded-[32px] rounded-tl-none border-2 border-black bg-[#FFFBF5] p-8 text-[#111111] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              >
                <p className="text-lg leading-relaxed font-medium">{faq.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Locale, SiteCopy } from '../i18n';

interface CapabilitiesProps {
  locale: Locale;
  copy: SiteCopy['capabilities'];
}

export function Capabilities({ locale, copy }: CapabilitiesProps) {
  const isKorean = locale === 'kr';
  const titleColors = ['text-[#FF8A5B]', 'text-[#B2FF59]', 'text-[#7C75FF]', 'text-[#5DD6FF]', 'text-[#FFD166]', 'text-[#FF6FB5]'];
  const capabilitiesHeadline = isKorean ? (
    <>
      <span className="inline-block rounded-[12px] bg-[#FF8A5B] px-3 py-1 text-[#111111]">프로덕트 엔지니어링</span>부터{' '}
      <span className="inline-block rounded-[12px] bg-[#5DD6FF] px-3 py-1 text-[#111111]">데이터 파이프라인</span>까지, 설계부터 운영까지 엔드투엔드로 수행합니다.
    </>
  ) : (
    copy.sectionHeadline
  );

  return (
    <section id="capabilities" className="relative z-[25] rounded-t-[40px] bg-[#111111] px-4 py-28 text-[#FFFBF5] md:px-8">
      <div className="mx-auto max-w-[90vw]">
        <div className="mb-14">
          <h2 className="mb-4 text-xl font-medium text-[#B2FF59]">{copy.sectionTitle}</h2>
          <p
            className={`max-w-5xl text-4xl font-black md:text-7xl ${
              isKorean ? 'leading-[1.08] tracking-[-0.01em] break-keep' : 'leading-[0.95] tracking-tighter'
            }`}
          >
            {capabilitiesHeadline}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.cards.map((card, index) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-[#3A3A3A] bg-[#161616] p-7 shadow-sm"
            >
              <h3 className={`mb-4 text-2xl font-extrabold ${titleColors[index % titleColors.length]} ${isKorean ? 'break-keep leading-tight tracking-normal' : 'tracking-tight'}`}>
                {card.title}
              </h3>
              <p className={`text-lg text-[#E8E3D8] ${isKorean ? 'break-keep leading-[1.7]' : 'leading-relaxed'}`}>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

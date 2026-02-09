import type { Locale, SiteCopy } from '../i18n';
import profilePhoto from '../../assets/profile-photo.jpeg';

interface IntroductionProps {
  locale: Locale;
  copy: SiteCopy['introduction'];
}

export function Introduction({ locale, copy }: IntroductionProps) {
  const isKorean = locale === 'kr';
  const profileAlt = isKorean ? 'Patrick 프로필 이미지' : 'Profile image of Patrick';
  const primaryName = isKorean ? '김승훈' : 'Seung Hoon Kim';
  const secondaryName = 'Patrick';

  return (
    <section id="about" className="relative z-[8] -mt-10 rounded-t-[40px] bg-[#FFFBF5] px-4 py-28 text-[#111111] md:px-8">
      <div className="mx-auto max-w-[90vw]">
        <div className="mb-14 grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:items-start">
          <div>
            <p className={`mb-4 text-sm font-bold text-[#FF5C28] ${isKorean ? 'tracking-normal' : 'tracking-widest uppercase'}`}>{copy.sectionTitle}</p>
            <h2
              className={`max-w-5xl text-4xl font-black md:text-7xl ${
                isKorean ? 'leading-[1.08] tracking-[-0.01em] break-keep' : 'leading-[0.95] tracking-tighter'
              }`}
            >
              {copy.headline}
            </h2>
            <p className={`mt-8 max-w-4xl text-xl text-[#2A2A2A] ${isKorean ? 'break-keep leading-[1.7]' : 'leading-relaxed'}`}>{copy.body}</p>
            <p className={`mt-6 max-w-5xl text-lg text-[#2A2A2A] ${isKorean ? 'break-keep leading-[1.8]' : 'leading-relaxed'}`}>{copy.detail}</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="h-52 w-52 overflow-hidden rounded-full border-4 border-black bg-[#B2FF59] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:h-72 md:w-72">
              <img src={profilePhoto} alt={profileAlt} className="h-full w-full object-cover object-center" />
            </div>
            <p className={`mt-4 text-center text-3xl leading-none font-black md:text-4xl ${isKorean ? 'tracking-normal' : 'tracking-tight'}`}>
              <span className="text-[#FF5C28]">{primaryName}</span>
              <span className="mx-1 text-[#111111]">/</span>
              <span className="text-[#6C63FF]">{secondaryName}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

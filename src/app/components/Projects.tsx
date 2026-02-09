import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { Locale, SiteCopy } from '../i18n';
import onceadayAppEn from '../../assets/onceaday-app-en.png';
import onceadayFeedEn from '../../assets/onceaday-feed-en.png';
import onceadayCoachEn from '../../assets/onceaday-coach-en.png';
import onceadayAppKo from '../../assets/onceaday-app-ko.png';
import onceadayFeedKo from '../../assets/onceaday-feed-ko.png';
import onceadayCoachKo from '../../assets/onceaday-coach-ko.png';
import onceadayLandingEn from '../../assets/onceaday-landing-en.png';
import onceadayLandingKo from '../../assets/onceaday-landing-ko.png';
import tridgeDataEngineering from '../../assets/tridge-dataengineering.png';
import newOvertureLanding from '../../assets/new-overture-landing.png';

interface ProjectsProps {
  locale: Locale;
  copy: SiteCopy['projects'];
}

interface ProjectCard {
  id: number;
  image?: string;
  imagesByLocale?: Record<Locale, string[]>;
  color: string;
  textColor?: string;
  span: string;
  link?: string;
}

const projectCards: ProjectCard[] = [
  {
    id: 1,
    imagesByLocale: {
      en: [onceadayAppEn, onceadayFeedEn, onceadayCoachEn],
      kr: [onceadayAppKo, onceadayFeedKo, onceadayCoachKo]
    },
    color: 'bg-[#FF5C28]',
    span: 'col-span-1 md:col-span-2',
    link: 'https://play.google.com/store/apps/details?id=com.onequestion.fox'
  },
  {
    id: 2,
    imagesByLocale: {
      en: [onceadayLandingEn],
      kr: [onceadayLandingKo]
    },
    color: 'bg-[#FFFBF5]',
    span: 'col-span-1',
    link: 'https://onceaday.app'
  },
  {
    id: 3,
    image: tridgeDataEngineering,
    color: 'bg-[#111111]',
    textColor: 'text-white',
    span: 'col-span-1',
    link: 'https://tridge.com'
  },
  {
    id: 4,
    image: newOvertureLanding,
    color: 'bg-[#6C63FF]',
    span: 'col-span-1 md:col-span-2'
  }
];

export function Projects({ locale, copy }: ProjectsProps) {
  const isKorean = locale === 'kr';
  const projectsHeadline = isKorean ? (
    <>
      <span className="inline-block rounded-[12px] bg-[#FF5C28] px-3 py-1 text-[#111111]">디자인</span>과{' '}
      <span className="inline-block rounded-[12px] bg-[#6C63FF] px-3 py-1 text-[#F5F5F5]">코드</span>의 교차점을 탐색합니다.
    </>
  ) : (
    <>
      Navigating the intersection of <span className="inline-block rounded-[12px] bg-[#FF5C28] px-3 py-1 text-[#111111]">design</span> and{' '}
      <span className="inline-block rounded-[12px] bg-[#6C63FF] px-3 py-1 text-[#F5F5F5]">code</span>.
    </>
  );

  return (
    <section id="projects" className="relative z-20 -mt-10 rounded-t-[40px] bg-[#00D656] px-4 py-24 text-[#111111] md:px-8">
      <div className="mx-auto max-w-[90vw]">
        <div className="mb-16">
          <h2 className="mb-4 text-xl font-medium">{copy.sectionTitle}</h2>
          <p
            className={`max-w-4xl text-5xl font-black md:text-7xl ${
              isKorean ? 'leading-[1.02] tracking-[-0.01em] break-keep' : 'leading-[0.9] tracking-tighter'
            }`}
          >
            {projectsHeadline}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projectCards.map((project, index) => {
            const cardClass = `${project.span} ${project.color} ${project.textColor || 'text-black'} group relative flex min-h-0 md:min-h-[400px] ${project.link ? 'cursor-pointer' : 'cursor-default'} flex-col overflow-hidden rounded-[32px] p-6`;
            const localeImages = project.imagesByLocale?.[locale];

            const cardContent = (
              <>
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <h3 className={`text-2xl font-bold ${isKorean ? 'tracking-normal leading-tight break-keep' : 'tracking-tight'}`}>{copy.items[index].title}</h3>
                    <p className="font-medium opacity-70">{copy.items[index].category}</p>
                  </div>
                  {project.link ? (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-current transition-colors group-hover:bg-white group-hover:text-black">
                      <ArrowUpRight size={20} />
                    </div>
                  ) : null}
                </div>

                <div className="relative mt-6 h-[260px] w-full overflow-hidden rounded-[20px] shadow-2xl sm:h-[320px] md:absolute md:inset-0 md:top-24 md:mx-auto md:h-auto md:w-[85%] md:rounded-t-[20px] md:transition-transform md:duration-500 md:group-hover:-translate-y-[10px]">
                  {localeImages ? (
                    localeImages.length === 1 ? (
                      <div className="h-full bg-[#0D0D0D] p-3">
                        <div className="h-full overflow-hidden rounded-[16px] border border-[#222]">
                          <img src={localeImages[0]} alt={`${copy.items[index].title} screenshot`} className="h-full w-full object-contain object-top md:object-cover" />
                        </div>
                      </div>
                    ) : (
                      <div className="grid h-full grid-cols-3 gap-3 bg-[#0D0D0D] p-3">
                        {localeImages.map((src, imageIndex) => (
                          <div key={src} className={`overflow-hidden rounded-[16px] border border-[#222] ${imageIndex === 1 ? 'scale-[1.02]' : ''}`}>
                            <img src={src} alt={`${copy.items[index].title} screenshot ${imageIndex + 1}`} className="h-full w-full object-contain object-top md:object-cover" />
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    <img src={project.image} alt={copy.items[index].title} className="h-full w-full object-contain object-top md:object-cover" />
                  )}
                </div>
              </>
            );

            if (project.link) {
              return (
                <motion.a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 0.98 }}
                  className={cardClass}
                >
                  {cardContent}
                </motion.a>
              );
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 0.98 }}
                className={cardClass}
              >
                {cardContent}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

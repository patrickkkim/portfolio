import type { SiteCopy } from '../i18n';

interface FooterProps {
  copy: SiteCopy['footer'];
}

export function Footer({ copy }: FooterProps) {
  return (
    <footer className="relative z-40 border-t border-[#333] bg-[#111111] px-8 py-12 text-[#FFFBF5]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="select-none text-[10vw] leading-none font-black text-[#222] md:text-8xl">PORTFOLIO</div>

        <div className="flex gap-6">
          <a href="#" className="transition-colors hover:text-[#FF5C28]">
            {copy.twitter}
          </a>
          <a href="#" className="transition-colors hover:text-[#FF5C28]">
            {copy.github}
          </a>
          <a href="#" className="transition-colors hover:text-[#FF5C28]">
            {copy.linkedin}
          </a>
          <a href="#" className="transition-colors hover:text-[#FF5C28]">
            {copy.email}
          </a>
        </div>
      </div>
      <div className="mt-12 text-center text-sm opacity-40">{copy.copyright}</div>
    </footer>
  );
}

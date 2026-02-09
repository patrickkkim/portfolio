import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import type { SiteCopy } from '../i18n';

interface FooterProps {
  copy: SiteCopy['footer'];
}

export function Footer({ copy }: FooterProps) {
  const socialLinks = [
    {
      label: copy.linkedin,
      href: 'https://www.linkedin.com/in/patrick-kim97/',
      icon: Linkedin
    },
    {
      label: copy.github,
      href: 'https://github.com/patrickkkim',
      icon: Github
    },
    {
      label: copy.email,
      href: 'mailto:patkim97@gmail.com',
      icon: Mail
    },
    {
      label: copy.instagram,
      href: 'https://www.instagram.com/s_h_kim_0/',
      icon: Instagram
    }
  ] as const;

  return (
    <footer className="relative z-40 border-t border-[#333] bg-[#111111] px-8 py-12 text-[#FFFBF5]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:justify-end">
        <div className="flex flex-wrap justify-center gap-3 md:justify-end">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            const isExternal = !item.href.startsWith('mailto:');
            return (
              <a
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer noopener' : undefined}
                aria-label={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#3A3A3A] bg-[#161616] px-4 py-2 text-sm font-bold transition-colors hover:border-[#FF5C28] hover:text-[#FF5C28]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
      <div className="mt-12 text-center text-sm opacity-40">{copy.copyright}</div>
    </footer>
  );
}

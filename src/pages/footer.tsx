import { useTranslation } from "react-i18next";
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import { openEmailClient } from "../utils/email";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
  onClick?: (e: any) => void;
}

const SocialLink = ({ href, src, alt, onClick = () => {} }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="group"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="h-8 w-8 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
    />
  </a>
);

export default function Footer() {
  const { t } = useTranslation();
  const { logos, personal_info } = data;

  return (
    <footer className="bg-slate-900 text-slate-300 py-8 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm">{t(TranslationKey.siteCreator)}</p>
          <p className="text-sm mt-1">{t(TranslationKey.copyRight)}</p>
        </div>
        <div className="flex space-x-4">
          <SocialLink href={logos.github.link} src={logos.github.logo} alt="GitHub" />
          <SocialLink href={logos.linkedIn.link} src={logos.linkedIn.logo} alt="LinkedIn" />
          <SocialLink 
            href={logos.gmail.link} 
            src={logos.gmail.logo} 
            alt="Email"
            onClick={(e) => openEmailClient(personal_info.email, e)}
          />
        </div>
      </div>
      <div className="container mx-auto mt-4 pt-4 border-t border-slate-700 text-center text-xs text-slate-500">
        <p>Built with React, Vite, Tailwind CSS, and lots of coffee ☕</p>
      </div>
    </footer>
  );
}
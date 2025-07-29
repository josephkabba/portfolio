import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
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
    className="group p-2 rounded-lg hover:bg-slate-800 transition-all duration-300"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="h-6 w-6 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-110"
    />
  </a>
);

export default function Footer() {
  const { t } = useTranslation();
  const { logos, personal_info } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 retro-text mb-4">{t(TranslationKey.brandName)}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t(TranslationKey.footerDescription)}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4">{t(TranslationKey.quickLinks)}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  to="expertise" 
                  smooth={true} 
                  duration={500} 
                  offset={-100}
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {t(TranslationKey.expertise)}
                </Link>
              </li>
              <li>
                <Link 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  offset={-100}
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {t(TranslationKey.projects)}
                </Link>
              </li>
              <li>
                <Link 
                  to="experience" 
                  smooth={true} 
                  duration={500} 
                  offset={-100}
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {t(TranslationKey.experience)}
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-100}
                  className="text-slate-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer"
                >
                  {t(TranslationKey.contact)}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-300 mb-4">{t(TranslationKey.connect)}</h4>
            <div className="flex space-x-2 mb-4">
              <SocialLink href={logos.github.link} src={logos.github.logo} alt="GitHub" />
              <SocialLink href={logos.linkedIn.link} src={logos.linkedIn.logo} alt="LinkedIn" />
              <SocialLink 
                href={logos.gmail.link} 
                src={logos.gmail.logo} 
                alt="Email"
                onClick={(e) => openEmailClient(personal_info.email, e)}
              />
            </div>
            <p className="text-slate-400 text-sm">
              {t(TranslationKey.collaborateMessage)}
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-sm text-slate-400">
                © {currentYear} Kabba Joseph Timothy. {t(TranslationKey.allRightsReserved)}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {t(TranslationKey.madeWithLove)}
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs text-slate-500">
                {t(TranslationKey.buildTag)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
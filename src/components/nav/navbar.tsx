import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../localization";
import useWindowDimensions from "../../hooks/window_size";
import "../../styles/navbar.css";
import { getNavLinks } from "../../utils/nav_links";

function NavBar() {
  const [links] = useState(getNavLinks());
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { width } = useWindowDimensions();
  const { t } = useTranslation();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (width >= 768) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [width]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={twMerge(
      "fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300",
      scrolled 
        ? "bg-slate-900 bg-opacity-95 backdrop-filter backdrop-blur-md border-b border-cyan-400 shadow-lg shadow-cyan-400/10" 
        : "bg-opacity-75 backdrop-filter backdrop-blur-sm border-b border-cyan-400 border-opacity-50"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          spy={true}
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-cyan-300 retro-nav-text cursor-pointer hover:text-cyan-400 transition-colors duration-300"
        >
                    {t(TranslationKey.brandName)}
        </Link>

        <button
          onClick={toggleNavBar}
          className="md:hidden text-cyan-400 focus:outline-none hover:text-green-400 transition-colors duration-300 p-2"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <ul className={twMerge(
          "md:flex md:items-center md:space-x-8",
          isOpen ? "block" : "hidden",
          "md:space-y-0 space-y-4 md:static absolute md:bg-transparent bg-slate-900 bg-opacity-95 md:w-auto w-full left-0 md:top-0 top-full",
          "md:border-0 border-t border-cyan-400 md:p-0 p-6 transition-all duration-300 ease-in-out md:backdrop-blur-none backdrop-blur-md"
        )}>
          {links.map((navLink, index) => (
            <li key={index} className="relative group">
              {navLink.name === "//Resume" || navLink.name === "//CV" ? (
                <a
                  href={navLink.destination}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 text-cyan-300 hover:text-white transition-all duration-300 retro-nav-text rounded-md hover:bg-cyan-500 hover:bg-opacity-20 border border-transparent hover:border-cyan-400"
                >
                  {navLink.name}
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : (
                <Link
                  activeClass="active"
                  to={navLink.destination}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="inline-block px-4 py-2 text-cyan-300 hover:text-green-300 transition-all duration-300 cursor-pointer retro-nav-text rounded-md hover:bg-green-500 hover:bg-opacity-10 relative"
                  onClick={() => width < 768 && setIsOpen(false)}
                >
                  {navLink.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
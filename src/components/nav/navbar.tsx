import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { twMerge } from "tailwind-merge";
import useWindowDimensions from "../../hooks/window_size";
import "../../styles/navbar.css";
import { getNavLinks } from "../../utils/nav_links";

function NavBar() {
  const [links] = useState(getNavLinks());
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-opacity-75 backdrop-filter backdrop-blur-sm border-b border-cyan-400">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={toggleNavBar}
          className="md:hidden text-cyan-400 focus:outline-none hover:text-green-400 transition-colors duration-300"
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
        <ul
          className={twMerge(
            "md:flex md:items-center md:space-x-6",
            isOpen ? "block" : "hidden",
            "md:space-y-0 space-y-4 md:static absolute md:bg-transparent bg-opacity-90 md:w-auto w-full left-0 md:top-0 top-full md:border-0 border-t border-cyan-400 md:p-0 p-4 transition-all duration-300 ease-in-out"
          )}
        >
          {links.map((navLink, index) => (
            <li key={index}>
              {navLink.name === "//Resume" || navLink.name === "//CV" ? (
                <a
                  href={navLink.destination}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:text-green-300 transition-colors duration-300 retro-nav-text"
                >
                  {navLink.name}
                </a>
              ) : (
                <Link
                  activeClass="active"
                  to={navLink.destination}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-cyan-300 hover:text-green-300 transition-colors duration-300 cursor-pointer retro-nav-text"
                >
                  {navLink.name}
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
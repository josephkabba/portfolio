import { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { getNavLinks } from "../../utils/nav_links";
import "../../styles/navbar.css";
import useWindowDimensions from "../../hooks/window_size";

function NavBar() {
  const [links] = useState(getNavLinks());
  const [isOpen, setIsOpen] = useState(true);
  const { width } = useWindowDimensions();

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (width >= 600) {
      setIsOpen(true);
    }
  }, [width]);

  return (
    <nav className="flex z-10 fixed top-0 left-0 right-0  sm:flex-row flex-col items-start justify-start sm:items-center sm:justify-center">
      <button
        onClick={toggleNavBar}
        className="sm:invisible visible bg-blur mx-5 mt-5 rounded-full p-2 border border-cyan-400"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-cyan-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-cyan-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <ul
        className={`flex text-base bg-blur ${
          isOpen ? "visible" : "hidden"
        } z-20 p-4 mx-5 mt-5 rounded-xl border sm:visible shadow border-cyan-400 text-cyan-500 sm:flex-row flex-col justify-center`}
      >
        {links.map((navLink, index) => (
          <li
            className="ml-3 hover:text-green-400 sm:text-base text-xl mt-4 sm:mt-0 cursor-pointer mr-3"
            key={index}
          >
            {navLink.name === "//Resume" || navLink.name === "//CV" ? (
              (navLink.name === "//Resume" && (
                <a href={navLink.destination} target="_blank">
                  {navLink.name}
                </a>
              )) ||
              (navLink.name === "//CV" && (
                <a href={navLink.destination} target="_blank">
                  {navLink.name}
                </a>
              ))
            ) : (
              <Link
                activeClass="active"
                to={navLink.destination}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {navLink.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;

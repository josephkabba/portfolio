import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Orbit from "../components/home/orbit";
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import "../styles/home.css";
import { getLocalImageUrl } from "../utils/images";
import { navLinks } from "../utils/nav_links";

function Home() {
  const { t } = useTranslation();
  const surroundingImages = useMemo(() => 
  Object.values(data.planet),
  [data.planet]
);
  
  const centerImage = getLocalImageUrl("profile.jpeg");
  return (
    <div id={navLinks.home.destination} className="flex flex-col group-responsive-full-screen h-screen">
      <div className="layer image items-center text-white bg-transparent w-full justify-between flex sm:flex-row flex-col">
        <div className="sm:text-left text-center flex flex-col ml-5">
          <h1 className="font-semibold text-5xl sm:text-6xl">
            {t(TranslationKey.hi)}, <br /> {t(TranslationKey.iAmJoseph)} <br />
            {t(TranslationKey.softwareEngineer)}.
          </h1>

          <h1 className="mt-10 text-xl opacity-75 italic">
            {"<h1>"}
            <br />
            &emsp;{t(TranslationKey.homeSubtitle)}.
            <br />
            {"</h1>"}
          </h1>
        </div>

        <div className="flex flex-col h-full justify-end p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 mt-3 h-7 border animate-bounce border-green-400 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
              />
            </svg>
          </div>

        <Orbit 
          centerImage={centerImage} 
          surroundingImages={surroundingImages}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Home;

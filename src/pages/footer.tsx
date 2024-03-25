import { useState } from "react";
import data from "../data/personal.json";
import { openEmailClient } from "../utils/email";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";

export default function Footer() {
  const [logos] = useState(data.logos);
  const { t } = useTranslation();
  return (
    <div className="layer px-20 pb-10 flex sm:flex-row flex-col sm:justify-between text-center justify-center">
      <div className="w-full">
        <h1 className="w-full sm:text-left">
          {t(TranslationKey.siteCreator)}
        </h1>

        <h1 className="w-full sm:text-left">{t(TranslationKey.copyRight)}</h1>
      </div>
      <div className="w-full flex flex-row sm:justify-end justify-center">
        <a href={logos.github.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            src={logos.github.logo}
          />
        </a>
        <a href={logos.linkedIn.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            src={logos.linkedIn.logo}
          />
        </a>
        <a href={logos.gmail.link} target="_blank">
          <img
            alt="svgImg"
            className="m-2 h-10 w-10 cursor-pointer"
            onClick={(e) => {
              openEmailClient(data.personal_info.email, e);
            }}
            src={logos.gmail.logo}
          />
        </a>
      </div>
    </div>
  );
}

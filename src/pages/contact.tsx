import { useState } from "react";
import image from "../../public/images/project.svg";
import InfoCard from "../components/contact/infoCard";
import data from "../data/personal.json";
import "../styles/contact.css";
import { openEmailClient } from "../utils/email";
import { navLinks } from "../utils/nav_links";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";

function Contact() {
  const [personalInfo, _] = useState(Object.entries(data.personal_info));
  const { t } = useTranslation();
  return (
    <div id={navLinks.contact.destination} className="layer">
      <h1 className="heading">{ t(TranslationKey.contact) }</h1>
      <div className="rounded-xl sm:m-5 p-10 flex sm:justify-between justify-center flex-col sm:flex-row">
        
          <InfoCard personalInfo={personalInfo} />
       

        <div className="flex flex-col justify-center items-center w-full sm:ml-2">
          <img className="w-44 h-44" src={image} />
          <h1 className="text-center font-medium text-2xl">
            { t(TranslationKey.letsWork) }.
          </h1>

          <button
            className="shadow mt-6 button-background rounded-xl text-lg p-6 font-bold text-white hover:bg-green-700 cursor-pointer border border-green-700"
            onClick={(e) => {
              openEmailClient(data.personal_info.email, e);
            }}
          >
            { t(TranslationKey.letsChat) }.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;

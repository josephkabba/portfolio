import { useState } from "react";
import ExpSection from "../components/experience/section";
import personal from "../data/personal.json";
import "../styles/experience.css";
import { workToList } from "../utils/experience_helpers";
import { navLinks } from "../utils/nav_links";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../localization";

function Experience() {
  //@ts-ignore
  const [data] = useState(workToList(personal.experience));
  const [reRender, setReRender] = useState(false);
  const { t } = useTranslation();
  const [copMap] = useState(() => {
    const map = new Map<number, boolean>();
    data.forEach(([_, experience]) => {
      if (experience.id === 0) {
        map.set(experience.id, true);
      } else {
        map.set(experience.id, false);
      }
    });
    return map;
  });

  const getState = (id: number): boolean => {
    const res = copMap.get(id);
    if (res === undefined) {
      return false;
    }
    return res;
  };

  const flipCopMapStateById = (id: number) => {
    copMap.forEach((value, key) => {
      if (key === id) {
        copMap.set(key, !value);
        setReRender(!reRender);
      } else {
        copMap.set(key, false);
      }
    });
  };
  return (
    <div id={navLinks.experience.destination} className="layer">
      <h1 className="heading">{ t(TranslationKey.experience) }</h1>
      <div className="sm:m-5 sm:p-10">
        {data.map((value, key) => (
          <div key={key} className="pt-4">
            <ExpSection
              state={getState(value[1].id)}
              data={value[1]}
              openOrClose={flipCopMapStateById}
              companyName={value[0]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;

import { useTranslation } from "react-i18next";
import EaseInAnimation from "../components/motion/ease_in_animation";
import data from "../data/personal.json";
import findListLastItem from "../utils/find_list_last_item";
import { navLinks } from "../utils/nav_links";
import { TranslationKey } from "../localization";

function Expertise() {
  const expertiseData = data.expertise;
  const { t } = useTranslation();

  const isLast = (list: string[], counter: number): boolean => {
    const [lastIndex, _] = findListLastItem(list);
    return lastIndex === counter;
  };
  return (
    <div id={navLinks.expertise.destination} className="layer">
      <h1 className="heading">{ t(TranslationKey.expertise) }</h1>

      <div className="sm:m-5 sm:p-10 flex flex-col sm:flex-row">
        <EaseInAnimation duration={1.4} className="grow px-5">
          <div className="flex flex-row">
            <img className="w-14 h-14 mr-3" src={expertiseData.android.icon} />
            <h1 className="text-2xl font-bold text-green-600">
              {expertiseData.android.name}
            </h1>
          </div>

          <p className="pt-3">{expertiseData.android.detail}</p>
          <p className="pt-3">
            Concepts:{" "}
            {expertiseData.android.architectures.map((value, index) =>
              isLast(expertiseData.android.architectures, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
          <p className="pt-3">
            Libraries:{" "}
            {expertiseData.android.libraries.map((value, index) =>
              isLast(expertiseData.android.libraries, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
        </EaseInAnimation>
        <EaseInAnimation
          duration={1.5}
          className="bg-white w-3 sm:visible invisible float-none rounded mx-4"
        ></EaseInAnimation>
        <EaseInAnimation duration={1.6} className="grow px-5 sm:mt-0 mt-10">
          <div className="flex flex-row">
            <img className="w-14 h-14 mr-3" src={expertiseData.software.icon} />
            <h1 className="text-2xl font-bold text-yellow-600">
              {expertiseData.software.name}
            </h1>
          </div>

          <p className="pt-3">{expertiseData.software.detail}</p>
          <p className="pt-3">
            Concepts:{" "}
            {expertiseData.software.architectures.map((value, index) =>
              isLast(expertiseData.software.architectures, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
          <p className="pt-3">
            Languages:{" "}
            {expertiseData.software.libraries.map((value, index) =>
              isLast(expertiseData.software.libraries, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
        </EaseInAnimation>
        <EaseInAnimation
          duration={1.7}
          className="bg-white w-3 sm:visible invisible float-none rounded mx-4"
        ></EaseInAnimation>
        <EaseInAnimation duration={1.8} className="grow px-5 sm:mt-0 mt-10">
          <div className="flex flex-row">
            <img className="w-14 h-14 mr-3" src={expertiseData.frontend.icon} />
            <h1 className="text-2xl font-bold text-blue-300">
              {expertiseData.frontend.name}
            </h1>
          </div>

          <p className="pt-3">{expertiseData.frontend.detail}</p>
          <p className="pt-3">
            Concepts:{" "}
            {expertiseData.frontend.architectures.map((value, index) =>
              isLast(expertiseData.frontend.architectures, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
          <p className="pt-3">
            Tools:{"  "}
            {expertiseData.frontend.libraries.map((value, index) =>
              isLast(expertiseData.frontend.libraries, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
        </EaseInAnimation>
        <EaseInAnimation
          duration={1.9}
          className="bg-white w-3 sm:visible invisible float-none rounded mx-4"
        ></EaseInAnimation>
        <EaseInAnimation duration={2} className="grow px-5 sm:mt-0 mt-10">
          <div className="flex flex-row">
            <img className="w-14 h-14 mr-3" src={expertiseData.backend.icon} />
            <h1 className="text-2xl font-bold text-red-400">
              {expertiseData.backend.name}
            </h1>
          </div>

          <p className="pt-3">{expertiseData.backend.detail}</p>
          <p className="pt-3">
            Concepts:{" "}
            {expertiseData.backend.architectures.map((value, index) =>
              isLast(expertiseData.backend.architectures, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
          <p className="pt-3">
            Tools:{" "}
            {expertiseData.backend.libraries.map((value, index) =>
              isLast(expertiseData.backend.libraries, index)
                ? `${value}`
                : `${value}, `
            )}
          </p>
        </EaseInAnimation>
      </div>
    </div>
  );
}

export default Expertise;

import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import EaseInAnimation from "../components/motion/ease_in_animation";
import data from "../data/personal.json";
import { TranslationKey } from "../localization";
import { navLinks } from "../utils/nav_links";
import { ExpertiseModel } from "../data/models";

interface ExpertiseCardProps {
  expertise: ExpertiseModel;
  index: number;
}

const ExpertiseCard = ({ expertise, index }: ExpertiseCardProps) => {
  const colorClasses = [
    "text-green-400 border-green-400",
    "text-yellow-400 border-yellow-400",
    "text-cyan-400 border-cyan-400",
    "text-red-400 border-red-400",
    "text-cyan-400 border-cyan-400"
  ];

  const joinItems = (items: string[]) => items.join(", ");

  return (
    <EaseInAnimation duration={1.4 + index * 0.2} className="w-full sm:w-1/2 lg:w-1/4 p-4">
      <div className={twMerge(
        "h-full p-6 rounded-lg border-2 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm",
        "transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105",
        colorClasses[index]
      )}>
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 mr-4" src={expertise.icon} alt={expertise.name} />
          <h2 className={twMerge(`text-2xl font-bold, ${colorClasses[index].split(' ')[0]}`)}>
            {expertise.name}
          </h2>
        </div>
        <p className="mb-4 text-slate-300">{expertise.detail}</p>
        <div className="mb-2">
          <span className="font-semibold text-slate-200">Concepts: </span>
          <span className="text-slate-300">{joinItems(expertise.architectures)}</span>
        </div>
        <div>
          <span className="font-semibold text-slate-200">
            {expertise.name === "Software Engineering" ? "Languages" : "Tools"}: 
          </span>
          <span className="text-slate-300">{joinItems(expertise.libraries)}</span>
        </div>
      </div>
    </EaseInAnimation>
  );
};

function Expertise() {
  const expertiseData = data.expertise;
  const { t } = useTranslation();

  return (
    <div id={navLinks.expertise.destination} className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-cyan-300 retro-text">
        {t(TranslationKey.expertise)}
      </h1>
      <div className="flex flex-wrap -mx-4">
        {Object.values(expertiseData).map((expertise, index) => (
          <ExpertiseCard key={expertise.name} expertise={expertise} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Expertise;
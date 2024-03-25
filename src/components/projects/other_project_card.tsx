import { Project } from "../../utils/projects";
import dataset from "../../data/personal.json";
import { useState } from "react";
import { TranslationKey } from "../../localization";
import { useTranslation } from "react-i18next";

export default function OtherProjectCard({ data }: { data: Project }) {
  const [logos] = useState(dataset.logos);
  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col grow w-full h-full space-y-4 p-5 shadow-2xl rounded">
      {data.link === "" ? (
        <h1 className="capitalize text-green-400 text-xl font-semibold">
          {data.name}
        </h1>
      ) : (
        <a href={data.link} target="_blank">
          <h1 className="capitalize cursor-pointer hover:opacity-70 text-green-400 text-xl font-semibold">
            {data.name}
          </h1>
        </a>
      )}

      <h1 className="font-medium">{ t(TranslationKey.technology) }: &emsp; {data.mainTech}</h1>
      <p className="font-light">{data.description}</p>

      <div className="w-full flex flex-row h-full items-end sm:justify-end">
        {data.repo && (
          <a href={data.repo} target="_blank">
            <img
              alt="svgImg"
              className="mx-2 h-8 w-8 hover:opacity-70 cursor-pointer"
              src={logos.githubTo.logo}
            />
          </a>
        )}

        {data.link && (
          <a href={data.link} target="_blank">
            <img
              alt="svgImg"
              className="mx-2 h-8 w-8 hover:opacity-70 cursor-pointer"
              src={logos.linkTo.logo}
            />
          </a>
        )}
      </div>
    </div>
  );
}

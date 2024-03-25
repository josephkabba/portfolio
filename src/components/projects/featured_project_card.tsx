import { Project } from "../../utils/projects";
import dataset from "../../data/personal.json";
import { useState } from "react";
import { getLocalImageUrl } from "../../utils/images";
import { useTranslation } from "react-i18next";
import { TranslationKey } from "../../localization";

export default function FeaturedProjectCard({ data }: { data: Project }) {
  const [logos] = useState(dataset.logos);
  const image = getLocalImageUrl(data.image);
  const { t } = useTranslation();

  return (
    <div className="flex text-left flex-col items-center sm:flex-row  w-full p-3">
      {data.link === "" ? (
        <img
          src={image}
          className="rounded w-[30rem] h-52 sm:shrink sm:mr-10"
        />
      ) : (
        <a href={data.link} target="_blank">
          <img
            src={image}
            className="rounded cursor-pointer hover:opacity-70 sm:shrink w-[30rem] h-52 sm:mr-10"
          />
        </a>
      )}

      <div className="flex sm:ml-4 flex-col grow w-full space-y-4 p-5 shadow-2xl rounded">
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
        <div className="flex flex-col sm:flex-row">
          {data.tech.map((name, key) => (
            <h1
              key={key}
              className="text-green-400 border border-green-400 p-2 m-2 text-center"
            >
              {name}
            </h1>
          ))}
        </div>
        <div className="w-full flex flex-row sm:justify-end">
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
    </div>
  );
}

import { useState } from "react";
import data from "../data/personal.json";
import { getLocalImageUrl } from "../utils/images";

export default function About() {
  const [about, _] = useState(data.about);
  const coder = getLocalImageUrl("coder.gif");
  return (
    <div className="layer">
      <h1 className="heading">A little about me</h1>
      <div className="sm:m-5 pt-5 flex sm:flex-row flex-col justify-center items-center">
        <img className="rounded w-80 h-80 sm:mr-10" src={coder} />
        <div className="p-5 shadow-2xl relative sm:max-w-lg rounded">
          {about.map((text, key) => (
            <p key={key}>
              {text}
              <br />
              <br />
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

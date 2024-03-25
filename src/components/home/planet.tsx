import "../../styles/planet.css";
import data from "../../data/personal.json";
import { useState } from "react";
import { getLocalImageUrl } from "../../utils/images";

export default function Planet() {
  const [images, _] = useState(data.planet);
  const profile_image = getLocalImageUrl("profile.jpeg");
  return (
    <div className="pt-16 flex flex-col sm:px-0 px-10 justify-center items-center flex-grow">
      <div className="circle spinning-circle">
        <img
          className="rounded-full  side-image h-6 w-6"
          alt="svgImg"
          src={images.imageOne}
        />
        <div className="circle-1 spinning-circle">
          <img
            className="rounded-full  side-image-1 h-6 w-6"
            alt="svgImg"
            src={images.imageTwo}
          />
          <div className="circle-2 spinning-circle">
            <img
              className="rounded-full  side-image-2 h-6 w-6"
              alt=""
              src={images.imageThree}
            />
            <div className="circle-3 spinning-circle">
              <img
                alt="svgImg"
                className="rounded-full  side-image-3  h-6 w-6"
                src={images.imageFour}
              />
              <div className="circle-4 spinning-circle">
                <img
                  className="rounded-full  side-image-4 h-6 w-6"
                  alt="svgImg"
                  src={images.imageFive}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="rounded-full -translate-y-[17rem] h-36 w-36"
        src={profile_image}
      />
    </div>
  );
}

import { ExperienceModel } from "../../utils/experience_helpers";
import Animate from "../motion/ease_in_animation";

export default function ExpSection({
  companyName,
  data,
  state,
  openOrClose,
}: {
  companyName: string;
  data: ExperienceModel;
  openOrClose: Function;
  state: boolean;
}) {
  const onCLick = () => {
    openOrClose(data.id);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-white rounded-xl text-xl sm:max-w-4xl justify-between w-full py-3 px-5 background-header flex flex-col sm:flex-row">
        <h1>{`${data.title} at ${companyName}`}</h1>
        <div className="flex flex-col sm:flex-row">
          <h1>{data.duration}</h1>
          <div className="ml-2 cursor-pointer" onClick={onCLick}>
            {!state ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {state && (
        <Animate>
          <div className="text-white background rounded-xl py-5 sm:max-w-4xl px-10 mt-4 mb-6 flex flex-col">
            <h1 className="opacity-60">{data.area}</h1>
            <p className="mt-2">{data.description}</p>
            <div className="flex sm:flex-row flex-col overflow-x-auto mt-2">
              {data.tech.map((item, key) => (
                <h1
                  key={key}
                  className="bg-green-700 sm:line-clamp-1 mr-4 sm:mt-0 mt-4 opacity-80 py-1 px-4 rounded-2xl"
                >
                  {item}
                </h1>
              ))}
            </div>
          </div>
        </Animate>
      )}
    </div>
  );
}

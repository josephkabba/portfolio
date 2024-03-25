import capitalize from "../../utils/capitalize";

export default function InfoCard({
  personalInfo,
}: {
  personalInfo: [string, string][];
}) {
  const brackets: string[] = ["{", "}"];
  return (
    <div className="sm:flex flex-col sm:ml-10 shadow-xl w-full hidden bg-purple-800  rounded-xl transition-grow">
      <div className="flex flex-row p-3 justify-start">
        <div className="rounded-full shadow w-4 h-4 mr-2 bg-red-400"></div>
        <div className="rounded-full shadow w-4 h-4 mr-2 bg-orange-400"></div>
        <div className="rounded-full shadow w-4 h-4 bg-green-400"></div>
      </div>
      <hr className="bg-white mt-1" />
      <div className="text-white p-6 font-bold">
        <h1>{brackets[0]}</h1>
        <ul className="ml-4">
          {personalInfo.map((value, key) => (
            <li key={key} className="mb-2 sm:line-clamp-1">
              {capitalize(value[0])}: &emsp;
              {value[1].includes("http") ? (
                <a className="hover:underline" target="_blank" href={value[1]}>
                  {value[1]}
                </a>
              ) : (
                value[1]
              )}
            </li>
          ))}
        </ul>
        <h1>{brackets[1]}</h1>
      </div>
    </div>
  );
}

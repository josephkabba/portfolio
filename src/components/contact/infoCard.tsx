import React from "react";
import capitalize from "../../utils/capitalize";

interface InfoCardProps {
  personalInfo: [string, string][];
}

export default function InfoCard({ personalInfo }: InfoCardProps) {
  return (
    <div className="w-full lg:w-1/2 bg-slate-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
      <div className="flex items-center space-x-2 p-3 bg-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
      </div>
      <div className="p-6 font-mono text-sm">
        <p className="text-cyan-300">&#123;</p>
        <div className="ml-4">
          {personalInfo.map(([key, value]) => (
            <p key={key} className="mb-2">
              <span className="text-purple-300">{capitalize(key)}:</span>{" "}
              <span className="text-green-300">
                {value.includes("http") ? (
                  <a
                    className="hover:underline"
                    target="_blank"
                    href={value}
                    rel="noreferrer"
                  >
                    "{value}"
                  </a>
                ) : (
                  `"${value}"`
                )}
              </span>
              ,
            </p>
          ))}
        </div>
        <p className="text-cyan-300">&#125;</p>
      </div>
    </div>
  );
}
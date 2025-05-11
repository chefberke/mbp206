import Link from "next/link";
import React from "react";

import japan from "@/assets/japonishi.jpeg";
import redkeys from "@/assets/redkeys.jpg";

function Projeler() {
  const projeler = [
    {
      id: 1,
      name: "Japonishi",
      description: "Japon marka araba galerisi",
      image: japan,
      link: "https://github.com",
      techs: ["HTML", "CSS", "PHP"],
    },
    {
      id: 2,
      name: "Redkeys",
      description: "Müzik şirketi web sitesi",
      image: redkeys,
      link: "https://github.com",
      techs: ["HTML", "CSS", "JS"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h1 className="text-3xl font-bold text-neutral-100 mb-12 text-center">
        Projeler
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {projeler.map((proje) => (
          <div
            key={proje.id}
            className="bg-neutral-800/50 backdrop-blur-sm rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-800/70"
          >
            <div className="flex flex-col space-y-4">
              <div className="w-full h-48 bg-neutral-700 rounded-xl overflow-hidden">
                {proje.image && (
                  <img
                    src={
                      typeof proje.image === "string"
                        ? proje.image
                        : proje.image.src
                    }
                    alt={proje.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-neutral-100">
                  {proje.name}
                </h2>
                <p className="text-neutral-400">{proje.description}</p>
                <div className="flex flex-wrap gap-2">
                  {proje.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-neutral-700/50 rounded-full text-sm text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projeler/${proje.id}`}
                  className="inline-flex items-center space-x-2 bg-neutral-700 hover:bg-neutral-600 text-neutral-100 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <span>İncele</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projeler;

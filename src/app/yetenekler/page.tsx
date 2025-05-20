import React from "react";

function Yetenekler() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 70 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 50 },
        { name: "Tailwind CSS", level: 50 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "PHP", level: 70 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      category: "Diğer",
      items: [
        { name: "Git", level: 80 },
        { name: "GitHub", level: 85 },
        { name: "VS Code", level: 90 },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <h1 className="text-3xl font-bold text-neutral-100 mb-12 text-center">
        Yeteneklerim
      </h1>
      <div className="space-y-12 px-4">
        {skills.map((category) => (
          <div key={category.category} className="space-y-6">
            <h2 className="text-2xl font-semibold text-neutral-100">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-neutral-300">{skill.name}</span>
                    <span className="text-neutral-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Yetenekler;

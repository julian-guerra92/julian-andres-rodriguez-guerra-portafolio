import { SkillBar } from "@/components/molecules/SkillBar";
import { Divider } from "@/components/atoms/Divider";

export const SkillsSection = () => {
  const languages = [
    { name: "Inglés", percentage: 70 }
  ];
  
  const technologies = [
    { name: "JS / TS", percentage: 80 },
    { name: "Node.js", percentage: 75 },
    { name: "React", percentage: 80 },
    { name: "MySQL / PostgreSQL", percentage: 70 },
    { name: "MongoDB", percentage: 75 },
    { name: "Java", percentage: 70 },
    { name: "Spring", percentage: 65 },
    { name: "Docker", percentage: 70 },
  ];

  return (
    <div className="px-4 w-full">
      <h3 className="text-base font-bold text-gray-800 mb-4 pl-1">Idiomas</h3>
      {languages.map((lang, index) => (
        <SkillBar key={`lang-${index}`} name={lang.name} percentage={lang.percentage} />
      ))}
      
      <Divider />
      
      <h3 className="text-base font-bold text-gray-800 mb-4 pl-1 mt-2">Tecnologías</h3>
      {technologies.map((tech, index) => (
        <SkillBar key={`tech-${index}`} name={tech.name} percentage={tech.percentage} />
      ))}
    </div>
  );
};

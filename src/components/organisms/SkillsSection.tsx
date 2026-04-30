import { SkillBar } from "@/components/molecules/SkillBar";
import { Divider } from "@/components/atoms/Divider";

export const SkillsSection = () => {
  const languages = [
    { name: "Inglés", percentage: 65 }
  ];
  
  const technologies = [
    { name: "JS / TS", percentage: 90 },
    { name: "Node.js", percentage: 90 },
    { name: "React", percentage: 80 },
    { name: "MySQL / PostgreSQL", percentage: 80 },
    { name: "MongoDB", percentage: 80 },
    { name: "Java", percentage: 85 },
    { name: "Spring", percentage: 85 },
    { name: "Docker", percentage: 85 },
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

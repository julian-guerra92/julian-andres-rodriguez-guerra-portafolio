import { ExtraSkillItem } from "@/components/molecules/ExtraSkillItem";

export const ExtraSkillsList = () => {
  const skills = [
    "Desarrollo de aplicaciones web modernas",
    "Integración de aplicaciones en la nube",
    "Comunicación oral y escrita",
    "Organización y trabajo en equipo",
    "Creatividad y pensamiento lógico",
    "Manejo de BD relacionales y no relacionales",
    "Apasionado por nuevos conocimientos"
  ];

  return (
    <div className="px-4 w-full">
      <h3 className="text-base font-bold text-gray-800 mb-4 pl-1">Habilidades Extra</h3>
      <div className="flex flex-col gap-1.5 w-full">
        {skills.map((skill, index) => (
          <ExtraSkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

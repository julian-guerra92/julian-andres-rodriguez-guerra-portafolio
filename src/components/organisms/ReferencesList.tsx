import { ReferenceItem } from "@/components/molecules/ReferenceItem";

export const ReferencesList = () => {
  const references = [
    {
      name: "Daniel Lópes Lopera",
      role: "Financial Manager",
      company: "Shappi Inc",
      phone: "+34 604 36 77 51",
      email: "daniellopezlo7@hotmail.com"
    },
    {
      name: "Marcos Bruges R.",
      role: "Jefe de Planta",
      company: "Cooperativa Colanta",
      phone: "+57 311 305 9136",
      email: "marcosbr@colanta.com.co"
    },
    {
      name: "Jhon Alexander Rodríguez G.",
      role: "Ssr Advanced Software Developer",
      company: "Scotiabank Colpatria",
      phone: "+57 300 737 9875",
      email: "ing.jhonarg@gmail.com"
    }
  ];

  return (
    <div className="px-4 w-full">
      <h3 className="text-base font-bold text-gray-800 mb-4 pl-1">Referencias Personales</h3>
      <div className="flex flex-col w-full">
        {references.map((ref, index) => (
          <ReferenceItem key={index} {...ref} />
        ))}
      </div>
    </div>
  );
};

import { ContactItem } from "@/components/molecules/ContactItem";

export const ContactsList = () => {
  const contacts = [
    { label: "Residencia", value: "Itagüí - Antioquia" },
    { label: "Teléfono", value: "+57 321 766 8210" },
    { label: "Correo", value: "julianguerra92@gmail.com" },
  ];

  return (
    <div className="flex flex-col gap-2.5 px-4 w-full">
      {contacts.map((contact, index) => (
        <ContactItem key={index} label={contact.label} value={contact.value} />
      ))}
    </div>
  );
};

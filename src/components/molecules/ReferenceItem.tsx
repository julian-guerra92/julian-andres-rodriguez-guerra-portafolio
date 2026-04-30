interface ReferenceItemProps {
  name: string;
  role: string;
  company: string;
  phone: string;
  email: string;
}

export const ReferenceItem = ({ name, role, company, phone, email }: ReferenceItemProps) => {
  return (
    <div className="flex flex-col py-3 px-2 border-b border-gray-100 last:border-b-0">
      <span className="text-[13px] font-bold text-gray-800">{name}</span>
      <span className="text-[13px] font-medium text-gray-600">{role}</span>
      <span className="text-[12px] text-gray-500 italic mb-2">{company}</span>
      <span className="text-[11px] font-semibold text-gray-700 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded w-fit mb-1">
        {phone}
      </span>
      <span className="text-[11px] font-semibold text-gray-700 bg-yellow-50 border border-yellow-200 px-2 py-0.5 rounded w-fit truncate max-w-full">
        {email}
      </span>
    </div>
  );
};

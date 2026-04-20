interface ContactItemProps {
  label: string;
  value: string;
}

export const ContactItem = ({ label, value }: ContactItemProps) => {
  return (
    <div className="flex justify-between items-center text-xs py-1.5 px-1">
      <span className="bg-yellow-400 text-gray-900 px-2.5 py-0.5 rounded shadow-sm font-semibold tracking-wide">
        {label}
      </span>
      <span className="text-gray-700 font-medium text-right max-w-[60%] truncate" title={value}>
        {value}
      </span>
    </div>
  );
};

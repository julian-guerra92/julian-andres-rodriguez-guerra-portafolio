import { HiOutlineDocumentDuplicate } from "react-icons/hi";

interface ExtraSkillItemProps {
  skill: string;
}

export const ExtraSkillItem = ({ skill }: ExtraSkillItemProps) => {
  return (
    <div className="flex items-start gap-3 py-1.5 px-2">
      <HiOutlineDocumentDuplicate className="text-yellow-400 text-xl flex-shrink-0 mt-0.5" />
      <span className="text-[13px] font-medium text-gray-600 leading-snug">
        {skill}
      </span>
    </div>
  );
};

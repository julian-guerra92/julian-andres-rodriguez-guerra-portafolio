import { ProgressBar } from "@/components/atoms/ProgressBar";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export const SkillBar = ({ name, percentage }: SkillBarProps) => {
  return (
    <div className="py-2.5 w-full pr-1 pl-1">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-gray-600 font-medium tracking-wide">{name}</span>
        <span className="text-gray-500 font-medium">{percentage}%</span>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

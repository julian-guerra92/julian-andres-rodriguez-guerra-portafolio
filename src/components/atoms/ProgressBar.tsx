interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden border border-gray-300">
      <div
        className="bg-yellow-400 h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

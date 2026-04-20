import { Avatar } from "@/components/atoms/Avatar";

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col flex-wrap text-center items-center py-4 px-2">
      <Avatar src="/foto-profiel-1.png" alt="Julián Andrés Rodríguez G." />
      <h2 className="mt-6 text-lg font-bold tracking-wide text-gray-800">
        Julián Andrés Rodríguez G.
      </h2>
      <p className="text-sm font-medium text-gray-500 mt-2 tracking-wide leading-relaxed px-4">
        Ingeniero - Full Stack Developer
      </p>
    </div>
  );
};

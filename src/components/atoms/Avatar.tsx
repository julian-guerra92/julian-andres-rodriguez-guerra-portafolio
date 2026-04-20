import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="relative w-37.5 h-37.5 rounded-full overflow-hidden mx-auto bg-gray-200 shadow-inner">
      <Image src={src} alt={alt} fill className="object-cover" sizes="150px" priority />
    </div>
  );
};

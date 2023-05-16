import Image from "next/image";

export interface TeamMemberProps {
  name: string;
  image: string;
  role: string;
}

export default function TeamMember({ image, name, role }: TeamMemberProps) {
  return (
    <div className="bg-primary rounded-lg p-2 text-white h-auto">
      <div className="w-full h-36 sm:h-40 md:h-64 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="filter grayscale object-cover w-full rounded-lg"
        />
      </div>
      <div className="pt-2 md:pt-4 px-1 md:px-4">
        <h3 className="font-bold text-sm sm:text-xl">{name}</h3>
        <p className="text-xs sm:text-lg">{role}</p>
      </div>
    </div>
  );
}

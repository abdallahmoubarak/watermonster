import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import distance from "../../utils/distance";

export default function ProviderCard({
  name,
  image,
  locationName,
  userLocation,
  providerLocation,
  phone,
}: ProviderCardProps) {
  return (
    <div className="flex items-center bg-white text-primary rounded-xl p-4 shadow-md border border-lightgray">
      <div className="mr-4">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-white border-2 object-cover w-ful"
        />
      </div>
      <div>
        <div className="text-lg font-bold text-primary ">{name}</div>
        <p className="text-primary flex items-center gap-1">
          <BiMap size={18} />
          {locationName} - {distance({ userLocation, providerLocation })} away
        </p>
      </div>
      <div className="ml-auto">
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary">
          <FaWhatsapp className="mr-2" size={40} />
        </a>
      </div>
    </div>
  );
}

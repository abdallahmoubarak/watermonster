import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

export interface ProviderCardProps {
  name: string;
  image: string;
  locationName: string;
  userLocation: {
    latitude: number;
    longitude: number;
  };
  providerLocation: {
    latitude: number;
    longitude: number;
  };
  phone: string;
}

export default function ProviderCard({
  name,
  image,
  locationName,
  userLocation,
  providerLocation,
  phone,
}: ProviderCardProps) {
  // Calculate distance between user and provider
  const distance = () => {
    const lat1 = userLocation.latitude;
    const lon1 = userLocation.longitude;
    const lat2 = providerLocation.latitude;
    const lon2 = providerLocation.longitude;

    const R = 6371e3; // metres
    const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c; // in metres
    const km = d / 1000;

    const ans = d < 1000 ? `${Math.round(d)}m` : `${km.toFixed(2)}km`;
    return ans;
  };

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
          {locationName} - {distance()} away
        </p>
      </div>
      <div className="ml-auto">
        <a
          href={`https://wa.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-primary"
        >
          <FaWhatsapp className="mr-2" size={40} />
        </a>
      </div>
    </div>
  );
}

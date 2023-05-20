import React, { useState, useEffect } from "react";
import ProvidersList, {
  Location,
} from "../../components/molecules/ProvidersList";

const providers = [
  {
    name: "Plumber 1",
    image: "/jpg/abdallah.jpg",
    locationName: "Kampala",
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    providerLocation: {
      latitude: 0.347596,
      longitude: 32.58251,
    },
    phone: "256772123456",
  },
  {
    name: "Plumber 2",
    image: "/jpg/yasser.jpg",
    locationName: "Kampala",
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    providerLocation: {
      latitude: 0.347596,
      longitude: 32.58252,
    },
    phone: "256772123456",
  },
  {
    name: "Plumber 3",
    image: "/jpg/ali.jpg",
    locationName: "Kampala",
    userLocation: {
      latitude: 0,
      longitude: 0,
    },
    providerLocation: {
      latitude: 0.347596,
      longitude: 32.58253,
    },
    phone: "256772123456",
  },
];

interface ProvidersProps {
  serviceType: string;
}

export default function Providers({ serviceType }: ProvidersProps) {
  const [userLocation, setUserLocation] = useState<Location>({
    latitude: 0,
    longitude: 0,
  });
  const [showRequest, setShowRequest] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        () => {
          setShowRequest(true);
        }
      );
    } else {
      setShowRequest(true);
    }
  }, []);

  const handleLocationRequest = () => {
    if (navigator.geolocation) {
      setShowRequest(false);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        () => {
          setShowRequest(true);
        }
      );
    }
  };

  if (showRequest) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">{serviceType}</h1>
        <p>
          Please allow location access to view nearby{" "}
          {serviceType.toLowerCase()}. Click the button below to allow access:
        </p>
        <button
          className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary80"
          onClick={handleLocationRequest}
        >
          Allow Location Access
        </button>
      </div>
    );
  }

  if (!userLocation) {
    return (
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">{serviceType} near you</h1>
        <p>Loading...</p>
      </div>
    );
  }

  useEffect(() => {
    if (userLocation.latitude !== 0 && userLocation.longitude !== 0) {
      setShowRequest(false);
    }
  }, [userLocation]);

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">{serviceType} near you</h1>
      {providers.length > 0 ? (
        <ProvidersList providers={providers} userLocation={userLocation} />
      ) : (
        <p>No {serviceType.toLowerCase()} found</p>
      )}
    </div>
  );
}

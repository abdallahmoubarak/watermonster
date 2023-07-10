interface ButtonProps {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
  isSecondary?: boolean;
  isLoading?: boolean;
  icon: React.ReactNode;
}

interface ProviderCardProps {
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

interface DistansProps {
  userLocation: {
    latitude: number;
    longitude: number;
  };
  providerLocation: {
    latitude: number;
    longitude: number;
  };
}

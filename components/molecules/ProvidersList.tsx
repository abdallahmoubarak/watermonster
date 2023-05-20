import ProviderCard, { ProviderCardProps } from "../atoms/ProviderCard";

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ProvidersArray {
  providers: Array<ProviderCardProps>;
  userLocation: Location;
}

const ProvidersList = ({ providers, userLocation }: ProvidersArray) => {
  return (
    <div className="flex flex-col gap-2">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.phone}
          name={provider.name}
          image={provider.image}
          locationName={provider.locationName}
          userLocation={userLocation}
          providerLocation={provider.providerLocation}
          phone={provider.phone}
        />
      ))}
    </div>
  );
};

export default ProvidersList;

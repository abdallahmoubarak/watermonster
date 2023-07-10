// Calculate distance between user and provider
export default function distance({
  userLocation,
  providerLocation,
}: DistansProps) {
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
}

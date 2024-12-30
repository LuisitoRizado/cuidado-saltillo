import { useState, useEffect } from "react";

export const useUserLocation = (
  defaultLocation: [number, number] = [25.4231, -100.9919],
) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          setError(null); // Resetea cualquier error previo
        },
        () => {
          setError("Error al obtener la ubicación");
          setUserLocation(defaultLocation);
        },
      );
    } else {
      setError("Geolocalización no soportada por el navegador");
      setUserLocation(defaultLocation);
    }
  }, [defaultLocation]);

  return { userLocation, error, setUserLocation };
};

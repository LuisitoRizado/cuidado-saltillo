import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useState, useEffect } from "react";

export function MyMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(
    null
  );

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error al obtener la ubicación:", error.message);
          setUserLocation([25.4231, -100.9919]);
        }
      );
    } else {
      console.error("Geolocalización no está soportada en este navegador.");
      setUserLocation([25.4231, -100.9919]);
    }
  }, []);

  return (
    <Map
      provider={osm}
      height={1000}
      center={userLocation || [25.4231, -100.9919]}
      defaultZoom={16}
    >
      {userLocation && <Marker width={50} anchor={userLocation} />}
      <Marker width={100} anchor={[50.883, 4.68]} />
    </Map>
  );
}

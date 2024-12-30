import { Map, Draggable } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useResizeMapHook } from "@/customHooks/useResizeMapHook";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { UBICACION_CENTRO_CIUDADES } from "@/constants/CitiesCenters";
import { useUserLocation } from "@/customHooks/useUserLocation";
import LocationLoader from "@/customComponents/LocationLoader";
export const MapSelectPlace = () => {
  const { ref: mapContainerRef, dimensions } =
    useResizeMapHook<HTMLDivElement>();
  const [_, setUbication] = useState(UBICACION_CENTRO_CIUDADES.SALTILLO);
  const { userLocation: mapCenter } = useUserLocation();

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full"
      style={{ position: "relative", height: "50vh" }}
    >
      {!mapCenter ? (
        <LocationLoader />
      ) : (
        <Map
          width={dimensions.width}
          height={dimensions.height}
          provider={osm}
          center={mapCenter}
          zoom={16}
        >
          <Draggable anchor={mapCenter} onDragEnd={setUbication}>
            <MapPin
              color="red"
              className="text-red-100"
              width={30}
              height={30}
            />
          </Draggable>
        </Map>
      )}
    </div>
  );
};

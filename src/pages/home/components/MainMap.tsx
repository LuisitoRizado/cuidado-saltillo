import { useState, useEffect, useRef } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useScreenSize } from "@/customHooks/useScreenSize";
import { useUserLocation } from "@/customHooks/useUserLocation";
import LocationLoader from "@/customComponents/LocationLoader";

interface Lugar {
  id: number;
  nombre: string;
  latitud: string;
  longitud: string;
  descripcion: string;
  direccion: string;
  fecha_creacion: string;
  nivel_inseguridad: string;
}

const MainMap = () => {
  const [lugares, _] = useState<Lugar[]>([]);
  const [selectedLugar, setSelectedLugar] = useState<Lugar | null>(null);
  const [zoom, setZoom] = useState(16);
  const mapRef = useRef<Map>(null);
  const { toast } = useToast();
  const { screenSize } = useScreenSize();

  const { userLocation: mapCenter, error } = useUserLocation();

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Ubicación",
        description: error,
      });
    }
  }, [error, toast]);

  useEffect(() => {
    const fetchLugares = async () => {
      console.log("lógica para cargar lugares");
    };

    fetchLugares();
  }, []);

  const handleMarkerClick = (lugar: Lugar) => {
    setSelectedLugar(lugar);
  };

  const closeInfoCard = () => {
    setSelectedLugar(null);
  };

  return (
    <Card className="relative">
      <CardContent className="p-0">
        {!mapCenter ? (
          <LocationLoader />
        ) : (
          <Map
            width={screenSize.width - 50}
            provider={osm}
            height={screenSize.height * 0.7}
            center={mapCenter}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
              setZoom(zoom);
            }}
            onClick={closeInfoCard}
            ref={mapRef}
          >
            {lugares.map((lugar) => (
              <Marker
                key={lugar.id}
                width={50}
                anchor={[parseFloat(lugar.latitud), parseFloat(lugar.longitud)]}
                onClick={() => handleMarkerClick(lugar)}
                color="red"
              />
            ))}
            {selectedLugar && (
              <Overlay
                anchor={[
                  parseFloat(selectedLugar.latitud),
                  parseFloat(selectedLugar.longitud),
                ]}
                offset={[120, 0]}
              >
                <Card className="w-64 shadow-lg">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {selectedLugar.nombre}
                    </h3>
                    <p className="text-sm mb-1">
                      <strong>Dirección:</strong> {selectedLugar.direccion}
                    </p>
                    <p className="text-sm mb-1">
                      <strong>Descripción:</strong> {selectedLugar.descripcion}
                    </p>
                    <p className="text-sm mb-1">
                      <strong>Fecha:</strong> {selectedLugar.fecha_creacion}
                    </p>
                    <p className="text-sm">
                      <strong>Ubicación:</strong> {selectedLugar.latitud},{" "}
                      {selectedLugar.longitud}
                    </p>
                    <p className="text-sm">
                      <strong>Nivel de inseguridad:</strong>{" "}
                      {selectedLugar.nivel_inseguridad}{" "}
                    </p>
                  </CardContent>
                </Card>
              </Overlay>
            )}
          </Map>
        )}
      </CardContent>
    </Card>
  );
};

export default MainMap;

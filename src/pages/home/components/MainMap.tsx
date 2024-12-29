import { useState, useEffect, useRef } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Spinner from "@/customComponents/Spinner";
import { useScreenSize } from "@/customHooks/useScreenSize";

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
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const [selectedLugar, setSelectedLugar] = useState<Lugar | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [zoom, setZoom] = useState(16);
  const mapRef = useRef<Map>(null);
  const { toast } = useToast();
  const { screenSize } = useScreenSize();
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
        },
        () => {
          toast({
            variant: "destructive",
            title: "Ubicación",
            description: "Error al obtener la ubicación",
          });
          setMapCenter([25.4231, -100.9919]);
        },
      );
    } else {
      toast({
        variant: "destructive",
        title: "Ubicación",
        description: "Error al obtener la ubicación",
      });
      setMapCenter([25.4231, -100.9919]);
    }
  }, [toast]);

  useEffect(() => {
    const fetchLugares = async () => {
      try {
        const res = await fetch("http://localhost:3000/lugares");

        if (!res.ok) {
          throw new Error("Error al obtener los lugares");
        }

        const data = await res.json();
        setLugares(data);
      } catch (err: unknown) {
        console.error("Error fetching lugares:", err);
        toast({
          variant: "destructive",
          title: "Error",
          description: "No se pudieron cargar los lugares",
        });
      }
    };

    fetchLugares();
  }, [toast]);

  const handleMarkerClick = (lugar: Lugar) => {
    setSelectedLugar(lugar);
    setMapCenter([parseFloat(lugar.latitud), parseFloat(lugar.longitud)]);
  };

  const closeInfoCard = () => {
    setSelectedLugar(null);
  };

  return (
    <Card className="relative">
      <CardContent className="p-0">
        {!mapCenter ? (
          <Spinner />
        ) : (
          <Map
            width={screenSize.width - 50}
            provider={osm}
            height={screenSize.height * 0.7}
            center={mapCenter}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
              setMapCenter(center);
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

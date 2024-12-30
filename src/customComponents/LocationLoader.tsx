import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const LocationLoader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4">
      <div className="relative">
        <MapPin className="w-12 h-12 text-primary animate-bounce" />
        <span className="absolute bottom-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2 animate-ping" />
      </div>
      <p className="mt-4 text-lg font-medium text-center">
        Obteniendo ubicación de usuario{dots}
      </p>
    </div>
  );
};
export default LocationLoader;

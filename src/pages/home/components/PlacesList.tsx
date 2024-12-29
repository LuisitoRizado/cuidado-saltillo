import IncidenteCard from "./IncidenteCard";

const places = [
  {
    id: 1,
    name: "Callejón Oscuro",
    description: "Poca iluminación y reportes de robos.",
    latitud: "25.440000",
    longitud: "-100.973000",
    hora: "23:10",
    fecha: "10/10/2024",
  },
  {
    id: 2,
    latitud: "25.450000",
    longitud: "-100.980000",
    name: "Parque Abandonado",
    description: "Frecuentado por personas sospechosas.",
  },
];

export default function PlacesList() {
  return (
    <div className="">
      <h5 className="text-gray-600">Incidentes cercanos a tu ubicación</h5>
      <ul className="space-y-4">
        {places.map((place) => (
          <li key={place.id}>
            <IncidenteCard
              titulo={place.name}
              coordenadas={[place.latitud, place.longitud]}
              descripcion={place.description}
              fecha={place.fecha}
              hora={place.hora}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

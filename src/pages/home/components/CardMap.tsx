import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

type CardMapProps = {
  coordenadas: [string, string];
};

const CardMap = (props: CardMapProps) => {
  const [lat, lng] = props.coordenadas;

  return (
    <Map
      width={360}
      height={250}
      provider={osm}
      center={[parseFloat(lat), parseFloat(lng)]}
      zoom={16}
    >
      <Marker anchor={[parseFloat(lat), parseFloat(lng)]} color="red" />
    </Map>
  );
};

export default CardMap;

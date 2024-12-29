import { MarkerProps } from "pigeon-maps/lib/overlays/Marker";

export type CustomMarkerProps = MarkerProps & {
  latitud: number;
  longitud: number;
};

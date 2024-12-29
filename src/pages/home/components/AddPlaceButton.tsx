import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function AddPlaceButton() {
  return (
    <Link to={"crear-reporte"}>
      <Button className="fixed bottom-4 right-4 rounded-full">
        <Plus className="mr-2" /> Agregar Lugar
      </Button>
    </Link>
  );
}

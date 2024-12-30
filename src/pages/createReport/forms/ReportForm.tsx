import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { TIPOS_CRIMENES } from "@/constants/TiposCrimenes";
import { MapSelectPlace } from "../components/MapSelectPlace";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    latitud: "",
    longitud: "",
    direccion: "",
    descripcion: "",
    nivelInseguridad: "",
    tiposCrimen: [] as string[],
    fechaReporte: new Date().toISOString().split("T")[0],
  });
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, nivelInseguridad: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el reporte a la base de datos
    navigateHome();
  };

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Generar reporte de incidente</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="bold text-gray-600">
          Selecciona la ubicación del incidente:{" "}
        </p>
        <MapSelectPlace />
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4"></div>

          <div>
            <Label htmlFor="nivelInseguridad">Tipo de incidente:</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.nivelInseguridad}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un tipo" />
              </SelectTrigger>
              <SelectContent>
                {TIPOS_CRIMENES.map((nivel) => (
                  <SelectItem key={nivel.codigo} value={nivel.codigo}>
                    {nivel.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="estatusIncidente">Estatus:</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.nivelInseguridad}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un estatus" />
              </SelectTrigger>
              <SelectContent>
                {TIPOS_CRIMENES.map((nivel) => (
                  <SelectItem key={nivel.codigo} value={nivel.codigo}>
                    {nivel.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="descripcion">Descripción del incidente:</Label>
            <Textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="fechaReporte">Fecha en que sucedió:</Label>
            <Input
              id="fechaReporte"
              name="fechaReporte"
              type="date"
              value={formData.fechaReporte}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={navigateHome}>
              Cancelar
            </Button>
            <Button type="submit">Enviar Reporte</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

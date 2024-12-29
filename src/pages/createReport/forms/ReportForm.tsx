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
import { NIVELES_SEGURIDAD } from "@/constants/NivelesInseguridad";

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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Crear Reporte de Lugar Peligroso</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="latitud">Latitud</Label>
              <Input
                id="latitud"
                name="latitud"
                value={formData.latitud}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="longitud">Longitud</Label>
              <Input
                id="longitud"
                name="longitud"
                value={formData.longitud}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="direccion">Dirección</Label>
            <Input
              id="direccion"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="descripcion">Descripción del incidente</Label>
            <Textarea
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="nivelInseguridad">Nivel de Inseguridad</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.nivelInseguridad}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccione un nivel" />
              </SelectTrigger>
              <SelectContent>
                {NIVELES_SEGURIDAD.map((nivel) => (
                  <SelectItem key={nivel.codigo} value={nivel.codigo}>
                    {nivel.nombre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="nivelInseguridad">Tipo de Crimen</Label>
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
            <Label htmlFor="fechaReporte">Fecha del Reporte</Label>
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

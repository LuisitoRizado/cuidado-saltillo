import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CardMap from "./CardMap";

interface LocationCardProps {
  titulo?: string;
  descripcion?: string;
  tags?: string[];
  hora?: string;
  fecha?: string;
  coordenadas: [string, string];
}

const IncidenteCard = ({
  titulo = "Headline",
  descripcion = "Please add your content here. Keep it short and simple. And smile :)",
  tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6", "Tag 7"],
  coordenadas,
  fecha,
  hora,
}: LocationCardProps) => {
  return (
    <Card className="w-full max-w-4xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[200px] md:h-full">
          <CardMap coordenadas={coordenadas} />
        </div>
        <div className="flex flex-col justify-between p-6">
          <div className="space-y-4">
            <CardHeader className="p-0">
              <CardTitle className="text-2xl font-bold">{titulo}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-muted-foreground">Descripción:</p>
              <p className="text-muted-foreground">{descripcion}</p>
              <p className="text-muted-foreground">Fecha:</p>
              <p className="text-muted-foreground">{fecha}</p>
              <p className="text-muted-foreground">Hora:</p>
              <p className="text-muted-foreground">{hora}</p>
            </CardContent>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {tags.map((tag, index) => (
              <Badge key={tag} variant={index === 0 ? "default" : "outline"}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
export default IncidenteCard;

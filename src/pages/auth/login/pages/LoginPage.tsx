import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="/placeholder.svg?height=1080&width=1080"
            alt="Mapa de la ciudad"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-emerald-500/20" />
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="mx-auto w-full max-w-[350px] space-y-6">
            <div className="flex flex-col space-y-2 text-center">
              <MapPin className="mx-auto h-8 w-8 text-emerald-500" />
              <h1 className="text-2xl font-semibold tracking-tight">
                Bienvenido de nuevo
              </h1>
              <p className="text-sm text-muted-foreground">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>
            <div className="grid gap-6">
              <form>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      placeholder="nombre@ejemplo.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="bg-emerald-500 hover:bg-emerald-600">
                    Iniciar sesión
                  </Button>
                </div>
              </form>
              <div className="text-center text-sm">
                ¿No tienes una cuenta?{" "}
                <Link
                  to="/register"
                  className="text-emerald-500 hover:underline"
                >
                  Regístrate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

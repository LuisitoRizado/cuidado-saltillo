import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="/placeholder.svg?height=1080&width=1080"
            alt="Mapa de la ciudad"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-emerald-500/20" />
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="mx-auto w-full max-w-[350px] md:max-w-[600px] space-y-8 md:space-y-10">
            <div className="flex flex-col space-y-4 md:space-y-6 text-center">
              <MapPin className="mx-auto h-8 w-8 md:h-12 md:w-12 text-navbar-dark" />
              <h1 className="text-xl md:text-4xl font-semibold tracking-tight">
                Crear una cuenta
              </h1>
              <p className="text-sm md:text-lg text-muted-foreground">
                Regístrate para reportar y ver incidentes en tu área
              </p>
            </div>
            <div className="grid gap-6 md:gap-10">
              <form className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-lg md:text-2xl font-semibold">
                    Información Personal
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="nombre"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Nombre
                      </Label>
                      <Input
                        id="nombre"
                        placeholder="Juan"
                        type="text"
                        autoCapitalize="words"
                        autoComplete="given-name"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="primer_apellido"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Primer Apellido
                      </Label>
                      <Input
                        id="primer_apellido"
                        placeholder="Pérez"
                        type="text"
                        autoCapitalize="words"
                        autoComplete="family-name"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="segundo_apellido"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Segundo Apellido
                      </Label>
                      <Input
                        id="segundo_apellido"
                        placeholder="González"
                        type="text"
                        autoCapitalize="words"
                        autoComplete="additional-name"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="email"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Correo electrónico
                      </Label>
                      <Input
                        id="email"
                        placeholder="nombre@ejemplo.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="telefono"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Teléfono
                      </Label>
                      <Input
                        id="telefono"
                        placeholder="1234567890"
                        type="tel"
                        autoComplete="tel"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="password"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Contraseña
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="rol"
                      className="text-base md:text-xl font-semibold text-gray-800"
                    >
                      Rol
                    </Label>
                    <Select>
                      <SelectTrigger className="h-10 md:h-14 text-base md:text-xl">
                        <SelectValue placeholder="Selecciona tu rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usuario">Usuario</SelectItem>
                        <SelectItem value="admin">Administrador</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-lg md:text-2xl font-semibold">
                    Dirección
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="calle"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Calle
                      </Label>
                      <Input
                        id="calle"
                        placeholder="Nombre de la calle"
                        type="text"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="numero"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Número
                      </Label>
                      <Input
                        id="numero"
                        placeholder="123"
                        type="text"
                        className="p-3 md:p-5 text-base md:text-xl"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="pais"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        País
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 md:h-14 text-base md:text-xl">
                          <SelectValue placeholder="Selecciona tu país" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mx">México</SelectItem>
                          {/* Add more countries as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="estado"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Estado
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 md:h-14 text-base md:text-xl">
                          <SelectValue placeholder="Selecciona tu estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coah">Coahuila</SelectItem>
                          {/* Add more states as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label
                        htmlFor="municipio"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Municipio
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 md:h-14 text-base md:text-xl">
                          <SelectValue placeholder="Selecciona tu municipio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="saltillo">Saltillo</SelectItem>
                          <SelectItem value="torreon">Torreón</SelectItem>
                          <SelectItem value="monclova">Monclova</SelectItem>
                          <SelectItem value="piedras-negras">
                            Piedras Negras
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label
                        htmlFor="colonia"
                        className="text-base md:text-xl font-semibold text-gray-800"
                      >
                        Colonia
                      </Label>
                      <Select>
                        <SelectTrigger className="h-10 md:h-14 text-base md:text-xl">
                          <SelectValue placeholder="Selecciona tu colonia" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* Add colonias as needed */}
                          <SelectItem value="centro">Centro</SelectItem>
                          <SelectItem value="república">República</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="codigo_postal"
                      className="text-base md:text-xl font-semibold text-gray-800"
                    >
                      Código Postal
                    </Label>
                    <Input
                      id="codigo_postal"
                      placeholder="25000"
                      type="text"
                      className="p-3 md:p-5 text-base md:text-xl"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="referencias"
                      className="text-base md:text-xl font-semibold text-gray-800"
                    >
                      Referencias
                    </Label>
                    <Textarea
                      id="referencias"
                      placeholder="Proporciona referencias para ubicar tu dirección"
                      className="p-3 md:p-5 text-base md:text-xl"
                    />
                  </div>
                </div>
                <Button className="w-full bg-navbar-dark hover:bg-emerald-600 py-3 px-6 md:py-4 md:px-8 text-base md:text-xl font-bold">
                  Crear cuenta
                </Button>
              </form>
              <div className="text-center text-sm md:text-lg">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="text-gray-500 hover:underline font-medium"
                >
                  Inicia sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

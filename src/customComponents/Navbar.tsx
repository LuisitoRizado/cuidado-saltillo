import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, LogIn } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Crear Reporte", href: "/crear-reporte", icon: AlertTriangle },
    { name: "Iniciar sesión", href: "/login", icon: LogIn },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbar-dark shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-white text-left">
              Cuidado Coahuila
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "outline" : "outline"}
                    className={`flex justify-center align-center items-center p-2 text-sm font-medium ${
                      isActive
                        ? "bg-navbar-dark text-gray-200 border-transparent"
                        : "bg-navbar-dark text-gray-500 border-transparent hover:text-gray-200"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Botón de menú en pantallas pequeñas */}
          <div className="sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
              onClick={toggleMenu} // Llamar a la función toggleMenu al hacer clic
            >
              <span className="sr-only">Abrir menú principal</span>
              {/* Cambiar el ícono dependiendo de si el menú está abierto */}
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        {" "}
        {/* Condicionalmente mostrar/ocultar el menú */}
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-navbar-dark text-gray-200 text-red-700"
                      : "text-gray-500 hover:bg-gray-700 hover:text-gray-200"
                  } w-full justify-start`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

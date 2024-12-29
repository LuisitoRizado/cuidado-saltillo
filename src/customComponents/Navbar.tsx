import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, Info } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: "Inicio", href: "/", icon: Home },
    { name: "Crear Reporte", href: "/crear-reporte", icon: AlertTriangle },
    { name: "About", href: "/about", icon: Info },
  ];

  return (
    <nav className="bg-navbar-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-white text-left">
              Cuidado Coahuila
            </span>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? "outline" : "outline"}
                    className={`flex justify-center align-center items-center p-2 text-sm font-medium ${
                      isActive
                        ? "bg-navbar-dark text-gray-200 border-transparent "
                        : "bg-navbar-dark  text-gray-500 border-transparent"
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
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Abrir menú principal</span>
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
            </Button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para pantallas pequeñas */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    isActive
                      ? "bg-navbar-dark text-gray-200  text-red-700"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
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

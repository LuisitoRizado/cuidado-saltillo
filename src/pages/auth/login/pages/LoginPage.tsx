import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLoginUserMutation } from "../store/login.api.types";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import Spinner from "@/customComponents/Spinner";
import { Formik, Form, ErrorMessage } from "formik";
import {
  loginFormInitialValues,
  loginFormValidationSchema,
} from "./LoginPage.exports";
export default function LoginPage() {
  const [apiLoginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const { toast } = useToast();

  const onLogin = async (email: string, password: string) => {
    try {
      const res = await apiLoginUser({ email, password }).unwrap();

      if (res.token) {
        localStorage.setItem("jwtToken", res.token);
        navigate("/home");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      const errorMessage =
        error?.data?.message ||
        error?.message ||
        "Hubo un problema al iniciar sesión";

      toast({
        variant: "destructive",
        title: "Error al iniciar sesión",
        description: errorMessage,
      });
    }
  };
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="grid min-h-screen md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="https://th.bing.com/th/id/R.af9c57edbd94b446fe802b14b7b9d3e1?rik=bZdmsa2dgdkZlw&riu=http%3a%2f%2fwww.androidcentral.com%2fsites%2fandroidcentral.com%2ffiles%2fstyles%2fxlarge_wm_brw%2fpublic%2farticle_images%2f2015%2f01%2fgoogle-maps-one-m8.jpg%3fitok%3dXsvypCfa&ehk=pH3oMf3HkNclhDgkzEJ4kkBkv2zctgr6gyGqqVzaR3A%3d&risl=&pid=ImgRaw&r=0"
            alt="Mapa de la ciudad"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex items-center justify-center p-6">
          <div className="mx-auto w-full max-w-[350px] md:max-w-[600px] space-y-8 md:space-y-10">
            <div className="flex flex-col space-y-4 md:space-y-6 text-center">
              <MapPin className="mx-auto h-10 w-10 md:h-14 md:w-14 text-navbar-dark" />
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                Bienvenido de nuevo
              </h1>
              <p className="text-sm md:text-xl text-muted-foreground">
                Ingresa tus credenciales para acceder a tu cuenta
              </p>
            </div>
            <div className="grid gap-6 md:gap-10">
              <Formik
                initialValues={loginFormInitialValues}
                validationSchema={loginFormValidationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("Valores enviados:", values);
                  onLogin(values.email, values.password);
                  setSubmitting(false);
                }}
              >
                {({ values, handleChange, handleBlur }) => (
                  <Form>
                    <div className="grid gap-4 md:gap-8">
                      <div className="grid gap-2 md:gap-4">
                        <Label
                          htmlFor="email"
                          className="text-base md:text-2xl font-semibold text-gray-800"
                        >
                          Correo electrónico
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          placeholder="nombre@ejemplo.com"
                          type="email"
                          autoCapitalize="none"
                          autoComplete="email"
                          autoCorrect="off"
                          className="p-3 md:p-5 text-base md:text-xl"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                      <div className="grid gap-2 md:gap-4">
                        <Label
                          htmlFor="password"
                          className="text-base md:text-2xl font-semibold text-gray-800"
                        >
                          Contraseña
                        </Label>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          className="p-3 md:p-5 text-base md:text-xl"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-600 text-sm"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="bg-navbar-dark hover:bg-emerald-600 py-3 px-6 md:py-4 md:px-8 text-base md:text-xl font-bold"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner /> : <>Iniciar sesión</>}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>

              <div className="text-center text-sm md:text-lg">
                ¿No tienes una cuenta?{" "}
                <Link to="/register" className="text-gray-600 hover:underline">
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

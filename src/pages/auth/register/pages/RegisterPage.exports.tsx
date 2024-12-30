import * as Yup from "yup";
export const registerFormInitialValues = {
  nombre: "",
  primerApellido: "",
  segundoApellido: "",
  telefono: "",
  email: "",
  contrasena: "",
};

export const registerFormValidationSchema = Yup.object().shape({
  nombre: Yup.string()
    .max(50, "Máximo 50 carácteres")
    .matches(/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/, "No se permiten números.")
    .required("Nombre es requerido"),
  primerApellido: Yup.string()
    .max(50, "Máximo 50 carácteres")
    .matches(/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/, "No se permiten números.")
    .required("Primer Apellido es requerido"),
  segundoApellido: Yup.string()
    .max(50, "Máximo 50 carácteres")
    .matches(/^[A-Za-záéíóúÁÉÍÓÚÑñ\s]+$/, "No se permiten números.")
    .required("Segundo Apellido es requerido"),
  telefono: Yup.string()
    .max(10, "Teléfono Incorrecto")
    .required("Teléfono es requerido"),
  email: Yup.string().email().required("Email es requerido"),
  contrasena: Yup.string()
    .max(255, "Máximo 255 carácteres")
    .required("Contraseña es requerida"),
});

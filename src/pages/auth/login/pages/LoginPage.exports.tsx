import * as Yup from "yup";

export const loginFormInitialValues = {
  email: "",
  password: "",
};

export const loginFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email inválido")
    .required("El correo electrónico es obligatorio"),
  password: Yup.string()
    .max(255, "Máximo 255 caracteres")
    .required("La contraseña es obligatoria"),
});

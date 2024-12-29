export type User = {
  usuarioId: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
  telefono: string;
  rolCodigo: string;
};

export type CreateUserRequest = {
  usuarioId: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
  telefono: string;
  direccionId: number;
  contrasena: string;
  rolCodigo: string;
};

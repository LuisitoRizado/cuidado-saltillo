export type CreateUsuarioRequest = {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  telefono: string;
  email: string;
  contrasena: string;
};

export type BasicUserInfo = {
  id: number;
  nombre: string;
  email: string;
  primerApellido: string;
};

export type CreateUsuarioResponse = {
  token: string;
  user: BasicUserInfo;
};

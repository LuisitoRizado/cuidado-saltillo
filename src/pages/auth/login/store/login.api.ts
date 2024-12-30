export type LoginUserRequest = {
  email: string;
  password: string;
};

export type BasicUserInfo = {
  id: number;
  nombre: string;
  email: string;
  primerApellido: string;
};
export type LoginUserResponse = {
  token: string;
  user: BasicUserInfo;
};

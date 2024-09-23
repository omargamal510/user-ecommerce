export type RegisterData = {
  name: "string";
  email: "string";
  password: "string";
  rePassword: "string";
  phone: "string";
};

export type RegisterResponse = {
  message: string;
  token: string;
  user: {
    email: string;
    name: string;
    role: string;
  };
};

export type loginData = {
  email: string;
  password: string;
};

export type forgotPasswordSucces = {
  statusMsg: string;
  message: string;
};

export type ResetCode = {
  resetCode: string;
};

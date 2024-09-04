export type RegisterData = {
  name: "string";
  email: "string";
  password: "string";
  confirmPassword: "string";
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

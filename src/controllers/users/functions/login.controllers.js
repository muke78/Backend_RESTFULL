import { loginService } from "../../../services/users/index.js";

export const Login = async (userData) => {
  const token = await loginService(userData);
  return token;
};

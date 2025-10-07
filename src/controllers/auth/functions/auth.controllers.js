import {
	loginService,
	registerUserService,
} from "../../../services/auth/index.js";

export const Login = (userData) => loginService(userData);

export const RegisterUser = (register) => registerUserService(register);

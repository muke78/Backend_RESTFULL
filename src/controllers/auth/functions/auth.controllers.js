import {
	loginService,
	registerUserService,
} from "../../../services/auth/index.js";

export const Login = async (userData) => {
	const login = await loginService(userData);
	return login;
};

export const RegisterUser = async (register) => {
	const registerUser = await registerUserService(register);
	return registerUser;
};

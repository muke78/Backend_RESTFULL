import { connectionQuery } from "./connection.helper.js";

// Esta funcion es para regresar en la peticion de la solicitud cuando es exitosa,
// regresa los campos seleccioandos en la consulta
export const getUserByEmail = async (email) => {
  const query = `SELECT NameUser, Email, Role, AccountStatus FROM users WHERE Email = ?`;
  const result = await connectionQuery(query, [email]);
  return result[0];
};

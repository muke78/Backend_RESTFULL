import { connectionQuery } from "./connection.helper.js";

// Esta funcion se ocupa para verificar si un correo ya se ha ingresado anteriormente y si es asi, va mandar un error que el correo ya se ingreso
// y fallara la insercion regresando un estado Conflict

export const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE Email = ?`;
  const params = [email];
  const result = await connectionQuery(query, params);
  return result[0];
};

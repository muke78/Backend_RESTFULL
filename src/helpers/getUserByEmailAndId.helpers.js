import { connectionQuery } from "./connection.helpers.js";

// Esta funcion se ocupa para verificar si un correo ya se ha ingresado anteriormente cuando se edita a un usuario y si es asi,
// va mandar un error que el correo ya se ingreso
// y fallara la insercion regresando un estado Conflict

export const findEmailInOtherUser = async (email, id) => {
  const query = `SELECT id FROM users WHERE Email = ? AND ID != ?`;
  const params = [email, id];
  const result = await connectionQuery(query, params);
  return result[0];
};

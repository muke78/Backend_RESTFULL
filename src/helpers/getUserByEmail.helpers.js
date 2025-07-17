import { connectionQuery } from "./connection.helpers.js";

// Esta funcion se ocupa para que al momento de crear o registrar un usuario, este regrese los campos importantes como lo es
// el nombre del usuario, su email, su rol que tiene y su estatus dentro del sistema, sirve tanto para la insercion y el registro

export const getUserByEmail = async (email) => {
  const query = `SELECT
                  name_user, 
                  email,
                  role.name AS rol,
                  cat_status.name AS status
                FROM users
                LEFT JOIN role ON role.role_id = users.role_id
                LEFT JOIN cat_status ON cat_status.status_id = users.status_id
                WHERE email = ?;
`;
  const result = await connectionQuery(query, [email]);
  return result[0];
};

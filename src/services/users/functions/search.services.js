import { connectionQuery } from "../../../helpers/connection.helpers.js";

export const searchUserService = async (email) => {
  let querySearchUsers = `SELECT 
    user_id,
    role.name AS role_name,
    name_user,
    email,
    profile_picture,
    account_type,
    last_login,
    created,
    updated,
    cat_status.name AS status_name
FROM
    users
        LEFT JOIN
    role ON role.role_id = users.role_id
        LEFT JOIN
    cat_status ON cat_status.status_id = users.status_id
WHERE
    1 = 1`;
  const queryParamsSearch = [];

  if (email) {
    querySearchUsers += ` AND email LIKE ?`;
    queryParamsSearch.push(`%${email}%`);
  } else {
    throw {
      statusCode: 400,
      message: "Debe proporcionar un correo para buscar",
      code: "EMAIL_REQUIRED",
      details: "El campo de correo es obligatorio para realizar busquedas",
    };
  }

  const resultSearch = await connectionQuery(
    querySearchUsers,
    queryParamsSearch,
  );

  if (resultSearch.length === 0) {
    throw {
      statusCode: 404,
      message: `No se encontro el correo ${email}`,
      code: "USER_NOT_FOUND",
      details: `No se encontraron usuarios con el correo proporcionado: ${email}`,
    };
  }

  return resultSearch;
};

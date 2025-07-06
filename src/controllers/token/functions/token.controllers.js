import { refreshToken } from "../../../helpers/jwt.helpers.js";

export const RefreshToken = async (token) => {
  const refresh = await refreshToken(token);
  return refresh;
};

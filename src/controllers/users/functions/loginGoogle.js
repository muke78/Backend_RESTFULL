import { loginGoogleService } from "../../../services/users/index.js";

export const loginFromGoogle = async (credential) => {
  const { responseData, isNewUser } = await loginGoogleService(credential);
  return { responseData, isNewUser };
};

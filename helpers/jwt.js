process.loadEnvFile();
import jwt from 'jwt-simple';
import { addDay } from '@formkit/tempo';

const secret = process.env.JWT_SECRET || 'defaultSecret';

export const createToken = (user) => {
  // Duracion de 2 minutos para probar que el toke se expire correctamente
  // const expirationDate = addMinute(new Date(), 2);

  const expirationDate = addDay(new Date(), 1);

  const expirationTime = Math.floor(expirationDate.getTime() / 1000);

  const payload = {
    id: user.id,
    nameUser: user.nameUser,
    email: user.email,
    role: user.role,
    lastLogin: user.lastLogin,
    accountStatus: user.accountStatus,
    iat: Math.floor(Date.now() / 1000),
    exp: expirationTime,
  };
  return jwt.encode(payload, secret);
};

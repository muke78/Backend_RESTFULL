import jwt from 'jsonwebtoken';

const verificarToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  const bearerToken = token.split(' ')[1];
  if (!bearerToken) {
    return res
      .status(401)
      .json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    const decoded = jwt.verify(bearerToken, secretKey);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: 'Acceso no autorizado. Token inválido.' });
  }
};

export { verificarToken };

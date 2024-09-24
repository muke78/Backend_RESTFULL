const { connectionQuery } = require('../helpers/connection.helper');

const ObtenerTodosLosUsuarios = async (req, res) => {
  try {
    let obtenerUser = `SELECT * FROM usuarios;`;
    const result = await connectionQuery(obtenerUser);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  ObtenerTodosLosUsuarios,
};

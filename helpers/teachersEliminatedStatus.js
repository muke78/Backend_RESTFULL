const { connectionQuery } = require('./connection.helper');

const deleteUserByTeacherID = async (teacherID) => {
  try {
    const queryDeleteUser = `DELETE FROM users WHERE ID = ?`;
    await connectionQuery(queryDeleteUser, [teacherID]);
  } catch (error) {}
};

module.exports = { deleteUserByTeacherID };

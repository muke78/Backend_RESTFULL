import { connectionQuery } from "./connection.helper.js";

const deleteUserByTeacherID = async (teacherID) => {
  try {
    const queryDeleteUser = `DELETE FROM users WHERE ID = ?`;
    await connectionQuery(queryDeleteUser, [teacherID]);
  } catch (error) {}
};

export { deleteUserByTeacherID };

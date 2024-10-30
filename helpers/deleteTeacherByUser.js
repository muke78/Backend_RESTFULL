import { connectionQuery } from "./connection.helper.js";

const deleteTeacherByUser = async (userId) => {
  try {
    const resultQuery = await connectionQuery(
      "SELECT ID FROM teachers WHERE TeacherID = ?",
      [userId],
    );

    if (resultQuery.length === 0) {
      console.log("No se encontró ningún maestro con el userId proporcionado.");
      return;
    }

    const teacherId = resultQuery[0].ID;

    const deleteteacher = await connectionQuery(
      "DELETE FROM teachers WHERE ID = ?",
      [teacherId],
    );
    console.log("Maestro eliminado:", deleteteacher);
  } catch (error) {
    console.error({ message: "Se encontro un error", error });
  }
};

export { deleteTeacherByUser };

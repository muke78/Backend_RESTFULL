const { connectionQuery } = require('./connection.helper');

const insertTeacherBeforeUser = async (email) => {
  try {
    const queryValidate = `SELECT ID as userId FROM users WHERE Email = ?`;
    const resultValidate = await connectionQuery(queryValidate, [email]);

    const { userId } = resultValidate[0];
    
    const newTeacherId = 'UUID()';

    const queryInsert = `INSERT INTO teachers(ID, TeacherID, FirstName, LastName, NameSchool, LevelStudies, StudentsInCharge, Grade, \`Group\`, CCT, SchoolZone, WorkShift, Curp, Email, Phone, Age, Address, EmergencyContact, EmergencyPhone) 
        VALUES (${newTeacherId}, ?, "", "", "", "", 0, "", "", "", "", "", "", "" ? ,"", 0 , "", "", "")`;
    await connectionQuery(queryInsert, [userId, email]);
  } catch (error) {
    console.error(error);
    throw new Error('Ocurrio un error', error);
  }
};

module.exports = {
  insertTeacherBeforeUser,
};

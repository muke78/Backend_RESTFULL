import { connectionQuery } from './connection.helper.js';

const insertTeacherBeforeUser = async (email) => {
  try {
    await connectionQuery('CALL InsertTeacherBeforeUser(?)', [email]);
  } catch (error) {
    console.error({ message: 'No se pudo realizar el stored producer', error });
  }
};

export { insertTeacherBeforeUser };

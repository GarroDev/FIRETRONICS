// userController.js
const { poolPromise, sql } = require('./database');

async function registrarUsuario(name, email, password) {
  try {
    const pool = await poolPromise;
    const result = await pool
      .request()
      .input('Name', sql.VarChar, name)
      .input('email', sql.VarChar, email)
      .input('password', sql.VarChar, password)
      .query('INSERT INTO CUSTOMERS (Name, Email, Password) VALUES (@Name, @email, @password)');
    return result.recordset;
  } catch (error) {
    throw new Error('Error al registrar el usuario en la base de datos');
  }
}

module.exports = { registrarUsuario };

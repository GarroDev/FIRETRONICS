// database.js
const sql = require('mssql');

const config = {
  user: 'Usr_FireTronics',
  password: 'Usr_FireTronics',
  server: 'localhost',
  database: 'ECommerce_ENU',
  options: {
    encrypt: false // Desactivar la encriptación
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Conectado a la base de datos');
    return pool;
  })
  .catch((err) => console.log('Error de conexión', err));

module.exports = { sql, poolPromise };

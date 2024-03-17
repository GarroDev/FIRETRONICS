module.exports = {
    HOST: "localhost",
    PORT: "1434",
    USER: "Usr_FireTronics",
    PASSWORD: "Usr_FireTronics",
    DB: "ECommerce_ENU",
    dialect: "mssql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
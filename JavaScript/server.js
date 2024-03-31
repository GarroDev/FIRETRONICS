const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
const port = 3002;

// Configuración para la conexión a la base de datos
const config = {
  user: 'Usr_FireTronics',
  password: 'Usr_FireTronics',
  server: 'localhost',
  database: 'ECommerce_ENU_V1',
  options: {
    trustServerCertificate: true // Opción para confiar en el certificado autofirmado (si es necesario)
  }
};

// Middleware para analizar los datos del formulario
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Manejador de la ruta /registro
app.post('/registro', async (req, res) => {
  try {
    // Extraer los datos del formulario
    const { name, email, password } = req.body;  
    console.log(req.body);
    // Establecer una conexión con la base de datos
    await sql.connect(config);
    // Definir la consulta SQL para insertar los datos del usuario
    const query = `INSERT INTO CUSTOMERS (Name, Email, Password) VALUES ('${name}', '${email}', '${password}')`;
    console.log(query)
    // Ejecutar la consulta SQL
    await sql.query(query, {
      name,
      email,
      password
    });

    // Cerrar la conexión con la base de datos
    await sql.close();
    // Responder con un mensaje de éxito
    res.send('¡Registro exitoso!');
  } catch (error) {
    // Manejar errores
    console.error('Error al insertar en la base de datos:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});


app.post('/usuario', async (req, res) => {
  try {
    const { email, password } = req.body;  
    console.log("Inicio")
    await sql.connect(config);
    const query = `SELECT Email, Password FROM CUSTOMERS WHERE Email = '${email}' and Password = '${password}'`;
    console.log(query)
    const result = await sql.query(query);
    // Verificar si se encontraron resultados
    if (result.recordset.length === 0) {
      // Si no se encontraron resultados, responder con un mensaje indicando que el usuario no existe
      res.status(404).send('Usuario no encontrado');
    } else {
      // Si se encontraron resultados, responder con los datos del usuario
      res.send("Usuario encontrado");
    }
    // Cerrar la conexión con la base de sdatos
    await sql.close();
  } catch (error) {
    // Manejar errores
    console.error('Error al obtener datos del usuario:', error.message);
    res.status(500).send('Error interno del servidor');
  }
});




// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

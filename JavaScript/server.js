const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
const bcrypt = require('bcrypt');
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
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(req.body);
    // Establecer una conexión con la base de datos
    await sql.connect(config);
    // Definir la consulta SQL para insertar los datos del usuario
    const query = `INSERT INTO CUSTOMERS (Name, Email, Password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
    console.log(query)
    // Ejecutar la consulta SQL
    await sql.query(query, {
      name,
      email,
      hashedPassword
    });

    // Cerrar la conexión con la base de datos
    await sql.close();
    // Responder con un mensaje de éxito
    res.send('¡Successful registration!');
  } catch (error) {
    // Manejar errores
    console.error('Error insterting values:', error.message);
    res.status(500).send('Internal server error');
  }
});



app.post('/usuario', async (req, res) => {
  try {
    const { email, password } = req.body;  

    // Establecer una conexión con la base de datos
    await sql.connect(config);

    // Consultar la contraseña almacenada en la base de datos para el usuario dado
    const query = `SELECT Email, Password FROM CUSTOMERS WHERE Email = '${email}'`;
    const result = await sql.query(query);

    // Verificar si se encontraron resultados
    if (result.recordset.length === 0) {
      // Si no se encontraron resultados, responder con un mensaje indicando que el usuario no existe
      res.status(404).send('User no found');
      return;
    }

    // Obtener la contraseña almacenada en la base de datos
    const storedPassword = result.recordset[0].Password;

    // Comparar la contraseña proporcionada por el usuario con la contraseña almacenada en la base de datos
    const passwordMatch = await bcrypt.compare(password, storedPassword);

    if (passwordMatch) {
      // Si las contraseñas coinciden, responder con un mensaje indicando que el usuario fue encontrado
      res.send("User found");
    } else {
      // Si las contraseñas no coinciden, responder con un mensaje indicando que la contraseña es incorrecta
      res.status(401).send('Incorrect password');
    }

    // Cerrar la conexión con la base de datos
    await sql.close();
  } catch (error) {
    // Manejar errores
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
const bcrypt = require('bcrypt');
const port = 3002;
const cors = require('cors');

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




// Configurar CORS
app.use(cors({
  // Permitir todos los orígenes
  origin: '*',
  // Permitir los métodos de solicitud que deseas permitir
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  // Permitir los encabezados personalizados que deseas permitir
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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


    //--------------------------------------------------------------------------------------------------------------------------------------


    /*
        if (passwordMatch) {
          Perfil = 1;
                // Si las contraseñas coinciden, redirigir al usuario a la página indicada
          res.redirect('http://127.0.0.1:5500/HTML/Index.html');
        } else {
          // Si las contraseñas no coinciden, responder con un mensaje indicando que la contraseña es incorrecta
          res.status(401).send('Incorrect password');
        }  
    */

    if (passwordMatch) {
      // Redirigir al usuario a la página indicada con el valor de Perfil como parámetro
      //res.redirect('http://127.0.0.1:5500/HTML/Index.html?Perfil=2');
      localStorage.setItem('perfil', 2);
    } else {
      // Si las contraseñas no coinciden, responder con un mensaje indicando que la contraseña es incorrecta
      res.status(401).send('Incorrect password');
    }



    //--------------------------------------------------------------------------------------------------------------------------------------






    // Cerrar la conexión con la base de datos
    await sql.close();
  } catch (error) {
    // Manejar errores
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/cartitems', async (req, res) => {
  try {
    const { id } = req.body;

    // Establecer una conexión con la base de datos
    await sql.connect(config);

    // Consultar la contraseña almacenada en la base de datos para el usuario dado
    const query = `SELECT ID_Product, Name, Price, Stock, Description, IMG FROM PRODUCTS WHERE ID_Product = '${id}'`;
    const result = await sql.query(query);
    const Name = result.recordset[0];
    // Verificar si se encontraron resultados
    if (result.recordset.length === 0) {
      // Si no se encontraron resultados, responder con un mensaje indicando que el usuario no existe
      res.status(404).send('product no found');
      return;
    } else {
      res.send(Name);
    }

    // Cerrar la conexión con la base de datos
    await sql.close();
  } catch (error) {
    // Manejar errores
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/getitems', async (req, res) => {
  try {
    // Establecer una conexión con la base de datos
    await sql.connect(config);

    // Consultar todas las filas de la tabla PRODUCTS
    const query = `SELECT * FROM PRODUCTS`;
    const result = await sql.query(query);

    // Verificar si se encontraron resultados
    if (result.recordset.length === 0) {
      // Si no se encontraron resultados, responder con un mensaje indicando que no se encontraron productos
      res.status(404).send('No products found');
      return;
    } else {
      // Enviar los resultados como respuesta
      res.send(result.recordset);

      // Imprimir los resultados en la consola
      console.log("Products:");
      result.recordset.forEach(row => {
        console.log(row);
      });
    }

    // Cerrar la conexión con la base de datos
    await sql.close();
  } catch (error) {
    // Manejar errores
    console.error('Error getting product information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/receive-data', (req, res) => {
  // Recibir datos JSON del cuerpo de la solicitud
  const data = req.body;

  // Guardar los IDs recibidos en la variable local
  if (data && data.productIds) {
    ids = data.productIds;
    console.log('IDs guardados en la variable local:', ids);
    res.json({ message: 'Datos recibidos y guardados correctamente' });
    localStorage.setItem('ids', ids)
  } else {
    res.status(400).json({ error: 'Datos incorrectos o faltantes' });
  }
});
// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



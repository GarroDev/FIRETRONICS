const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
const bcrypt = require('bcrypt');
const port = 3002;
const cors = require('cors');

//Database connection configuration
const config = {
  user: 'Usr_FireTronics',
  password: 'Usr_FireTronics',
  server: 'localhost',
  database: 'ECommerce_ENU_V1',
  options: {
    trustServerCertificate: true
  }
};



<<<<<<< HEAD

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
=======
// Middleware to analyze form data
>>>>>>> 65789231e62d47d5aea9f161c73fd5d1fee32314
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Route handler/registration
app.post('/registro', async (req, res) => {
  try {
    // Extract data from the form
    const { name, email, password } = req.body;  
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(req.body);
    // Establish a connection to the database
    await sql.connect(config);
    // Define SQL query to insert user data
    const query = `INSERT INTO CUSTOMERS (Name, Email, Password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
    console.log(query)
    // Execute SQL query
    await sql.query(query, {
      name,
      email,
      hashedPassword
    });

    // Close database connection
    await sql.close();
    // Respond with a success message
    res.send('¡Successful registration!');
  } catch (error) {
    // Handling errors
    console.error('Error insterting values:', error.message);
    res.status(500).send('Internal server error');
  }
});



app.post('/usuario', async (req, res) => {
  try {
    const { email, password } = req.body;  

    // Establish a connection to the database
    await sql.connect(config);

    // Query password stored in the database for the given user
    const query = `SELECT Email, Password FROM CUSTOMERS WHERE Email = '${email}'`;
    const result = await sql.query(query);

    // Check if results were found
    if (result.recordset.length === 0) {
      res.status(404).send('User no found');
      return;
    }

    // Get the password stored in the database
    const storedPassword = result.recordset[0].Password;

    // Compare the password provided by the user with the password stored in the database
    const passwordMatch = await bcrypt.compare(password, storedPassword);







    let Perfil = 0;

/*
    if (passwordMatch) {
<<<<<<< HEAD
      Perfil = 1;
            // Si las contraseñas coinciden, redirigir al usuario a la página indicada
      res.redirect('http://127.0.0.1:5500/HTML/Index.html');
=======
      // If the passwords match, reply with a message indicating that the user was found.
      res.send("User found");
>>>>>>> 65789231e62d47d5aea9f161c73fd5d1fee32314
    } else {
      // If the passwords do not match, reply with a message indicating that the password is incorrect.
      res.status(401).send('Incorrect password');
    }  
*/

if (passwordMatch) {
  // Redirigir al usuario a la página indicada con el valor de Perfil como parámetro
  res.redirect('http://127.0.0.1:5500/HTML/Index.html?Perfil=1');
} else {
  // Si las contraseñas no coinciden, responder con un mensaje indicando que la contraseña es incorrecta
  res.status(401).send('Incorrect password');
}







    

    // Close database connection
    await sql.close();
  } catch (error) {
    // Handling errors
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/cartitems', async (req, res) => {
  try {
    const { id } = req.body;  

    //Establish a connection to the database
    await sql.connect(config);

    const query = `SELECT ID_Product, Name, Price, Stock, Description, IMG FROM PRODUCTS WHERE ID_Product = '${id}'`;
    const result = await sql.query(query);
    const Name = result.recordset[0];
    // Verificar si se encontraron resultados
    if (result.recordset.length === 0) {
      // Si no se encontraron resultados, responder con un mensaje indicando que el usuario no existe
      res.status(404).send('product no found');
      return;
    } else{
      res.send(Name);
    }

    // Close database connection
    await sql.close();
  } catch (error) {
    // Handling errors
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/getitems', async (req, res) => {
  try {
    //Establish a connection to the database
    await sql.connect(config);

    // Query all rows of the PRODUCTS table
    const query = `SELECT * FROM PRODUCTS`;
    const result = await sql.query(query);

    // Check if results were found
    if (result.recordset.length === 0) {
      // If no results were found, reply with a message indicating that no products were found.
      res.status(404).send('No products found');
      return;
    } else {
      // Send the results as a response
      res.send(result.recordset);

      // Print the results on the console
      console.log("Products:");
      result.recordset.forEach(row => {
        console.log(row);
      });
    }

    // Close database connection
    await sql.close();
  } catch (error) {
    // Handling errors
    console.error('Error getting product information:', error.message);
    res.status(500).send('Internal server error');
  }
});

<<<<<<< HEAD
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
=======
// Start server
>>>>>>> 65789231e62d47d5aea9f161c73fd5d1fee32314
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



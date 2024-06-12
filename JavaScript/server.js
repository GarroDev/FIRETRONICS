const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
const bcrypt = require('bcrypt');
const port = 3002;
const cors = require('cors');
const nodemailer = require('nodemailer');

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

// HEAD

app.use(cors({

  origin: '*',

  methods: ['GET', 'POST', 'PUT', 'DELETE'],

  allowedHeaders: ['Content-Type', 'Authorization']
}));



app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));



app.post('/register', async (req, res) => {
  try {
    // Extract data from the form
    const { name, email, password } = req.body;

    // Name validation (only letters)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.send('<script>alert("Name must contain only letters!"); window.location.href = "http://127.0.0.1:5500/HTML/SignUp.html";</script>');
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.send('<script>alert("Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, one number, and one special character."); window.location.href = "http://127.0.0.1:5500/HTML/SignUp.html";</script>');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(req.body);

    // Allowed email domains
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'elpoli.edu.co', 'yahoo.com'];

    // Extract the domain from the email
    const emailDomain = email.split('@')[1];

    // Check if the email domain is allowed
    if (!allowedDomains.includes(emailDomain)) {
      return res.send('<script>alert("Email domain is not allowed!"); window.location.href = "http://127.0.0.1:5500/HTML/SignUp.html";</script>');
    }

    // Establish a connection to the database
    await sql.connect(config);

    // Check if the email is already registered
    const emailCheckQuery = `SELECT COUNT(*) as count FROM CUSTOMERS WHERE Email = '${email}'`;
    const result = await sql.query(emailCheckQuery);
    const emailCount = result.recordset[0].count;

    if (emailCount > 0) {
      // Close the database connection
      await sql.close();
      // Respond with an alert that the email is already in use
      return res.send('<script>alert("Email is already in use!"); window.location.href = "http://127.0.0.1:5500/HTML/SignUp.html";</script>');
    }

    // Define the SQL query to insert user data
    const insertQuery = `INSERT INTO CUSTOMERS (Name, Email, Password) VALUES ('${name}', '${email}', '${hashedPassword}')`;
    console.log(insertQuery);
    // Execute the SQL query
    await sql.query(insertQuery);

    // Close the database connection
    await sql.close();
    // Respond with a success message
    res.send('<script>alert("Successful registration!"); window.location.href = "http://127.0.0.1:5500/HTML/SignUp.html";</script>');
  } catch (error) {
    // Handle errors
    console.error('Error inserting values:', error.message);
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


    //--------------------------------------------------------------------------------------------------------------------------------------
    /*
        if (passwordMatch) {
          Profile = 1;
                // Si las contraseñas coinciden, redirigir al usuario a la página indicada
          res.redirect('http://127.0.0.1:5500/HTML/Index.html');
        } else {
          // Si las contraseñas no coinciden, responder con un mensaje indicando que la contraseña es incorrecta
          res.status(401).send('Incorrect password');
        }  
    */
    if (passwordMatch) {
      // If the passwords match, reply with a message indicating that the user was found.
      //res.send("User found");
      //res.redirect('http://127.0.0.1:5500/HTML/Index.html');

      const getUserQuery = `SELECT Name FROM CUSTOMERS WHERE Email = '${email}'`;
      const userResult = await sql.query(getUserQuery);
      const userName = userResult.recordset[0].Name;

      // If the passwords match, reply with a message indicating that the user was found.
      res.redirect(`http://127.0.0.1:5500/HTML/Index.html?Profile=2&location=2&username=${userName}`);

    } else {
      // If the passwords do not match, reply with a message indicating that the password is incorrect.
      res.status(401).send('Incorrect password');
    }



    //--------------------------------------------------------------------------------------------------------------------------------------






    // Close database connection
    await sql.close();
  } catch (error) {
    // Handling errors
    console.error('Error geting user information1:', error.message);
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

    if (result.recordset.length === 0) {

      res.status(404).send('product no found');
      return;
    } else {
      res.send(Name);
    }

    // Close database connection
    await sql.close();
  } catch (error) {
    // Handling errors
    console.error('Error geting user information2:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/getitems', async (req, res) => {
  try {
    await sql.connect(config);

    let query = 'SELECT * FROM PRODUCTS WHERE 1=1';

    if (req.body.category) {
      query += ' AND Category = @category';
    }
    if (req.body.stock) {
      if (req.body.stock === 'inStock') {
        query += ' AND Stock > 0';
      } else if (req.body.stock === 'outOfStock') {
        query += ' AND Stock = 0';
      }
    }
    if (req.body.priceRange) {
      if (req.body.priceRange === '0-50') {
        query += ' AND Price BETWEEN 0 AND 50';
      } else if (req.body.priceRange === '51-100') {
        query += ' AND Price BETWEEN 51 AND 100';
      } else if (req.body.priceRange === '101-200') {
        query += ' AND Price BETWEEN 101 AND 200';
      } else if (req.body.priceRange === '201-500') {
        query += ' AND Price BETWEEN 201 AND 500';
      } else if (req.body.priceRange === '501-1000') {
        query += ' AND Price BETWEEN 501 AND 1000';
      } else if (req.body.priceRange === '1000+') {
        query += ' AND Price > 1000';
      }
    }

    const request = new sql.Request();

    if (req.body.category) {
      request.input('category', sql.VarChar, req.body.category);
    }

    const result = await request.query(query);

    if (result.recordset.length === 0) {
      res.status(404).send('No products found');
      return;
    } else {
      res.send(result.recordset);
    }

    await sql.close();
  } catch (error) {
    console.error('Error getting product information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/updateStock', async (req, res) => {
  try {
      await sql.connect(config);

      const { products } = req.body; // products es un array de objetos { id: number, quantity: number }

      const request = new sql.Request();

      for (const product of products) {
          const { id, quantity } = product;
          console.log(id)
          const updateQuery = 'UPDATE PRODUCTS SET Stock = Stock - @quantity WHERE ID_Product = @id';
          await request.input('id', sql.Int, id)
                       .input('quantity', sql.Int, quantity)
                       .query(updateQuery);
      }

      await sql.close();
      res.status(200).send('Stock updated successfully');
  } catch (error) {
      console.error('Error updating stock:', error.message);
      res.status(500).send('Internal server error');
  }
});


app.post('/receive-data', (req, res) => {
  // Receive JSON data from the request body
  const data = req.body;

  // Save the received IDs in the local variable
  if (data && data.productIds) {
    ids = data.productIds;
    console.log('IDs guardados en la variable local:', ids);
    res.json({ message: 'Datos recibidos y guardados correctamente' });
    localStorage.setItem('ids', ids)
  } else {
    res.status(400).json({ error: 'Datos incorrectos o faltantes' });
  }
});


/*
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
*/

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;

  // Extraer información del perfil del usuario de Google
  var email = profile.getEmail();
  var name = profile.getName();
  var imageUrl = profile.getImageUrl();



  // Enviar la información al servidor para autenticación y almacenamiento
  // Enviar la información del usuario al servidor
fetch('/google-login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id_token: id_token,
    email: email,
    name: name,
    imageUrl: imageUrl
  })
})
.then(response => response.json())
.then(data => {
  // Manejar la respuesta del servidor
  console.log(data);
  // Redirigir al usuario a la página deseada
  window.location.href = '/next-page';
})
.catch(error => {
  console.error('Error:', error);
});


  // Aquí enviarás esta información al servidor utilizando una solicitud POST
  // Ruta para manejar la solicitud de inicio de sesión con Google
app.post('/google-login', async (req, res) => {
  try {
    const { id_token, email, name, imageUrl } = req.body;

    // Verificar la identidad del usuario con el token de Google
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: CLIENT_ID
    });
    const payload = ticket.getPayload();
    const userid = payload['sub'];

    // Verificar si el usuario ya existe en la base de datos
    // Si existe, establecer la sesión del usuario
    // Si no existe, crear un nuevo usuario en la base de datos y establecer la sesión

    // Redirigir o responder con algún mensaje de éxito
    res.json({ message: 'Usuario autenticado con éxito.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});



}





app.post('/payInfo', async (req, res) => {
  try {
    // Extract data from the form
    const { name, address, city, zip, country, total, payment } = req.body;

    const hashedZip = await bcrypt.hash(zip, 10);
    await sql.connect(config);

    // Define the SQL query to insert user data
    const insertQuery = `INSERT INTO PAYSINFO (Name, Address, City, Zip, Country, Total, Payment) VALUES ('${name}', '${address}', '${city}', '${hashedZip}', '${country}', '${total}', '${payment}')`;
    console.log(insertQuery);
    // Execute the SQL query
    await sql.query(insertQuery);

    // Close the database connection
    await sql.close();
    // Respond with a success message
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'firetronicstech@outlook.com',
        pass: 'zxcasdqwe1234'
      }
  });

    let mailOptions = {
        from: 'firetronicstech@outlook.com',
        to: 'cristian_garro23191@elpoli.edu.co',
        subject: 'Order sent',
        text: 'Your order was sent properly'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        //res.redirect('http://127.0.0.1:5500/HTML/Index.html');
    });

    res.send('<script>alert("Successful registration!"); window.location.href = "http://127.0.0.1:5500/HTML/Index.html";</script>');
  } catch (error) {
    // Handle errors
    console.error('Error inserting values:', error.message);
    res.status(500).send('Internal server error');
  }
});


// -------------------------------------------------
// mail section


app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'firetronicstech@outlook.com',
        pass: 'zxcasdqwe1234'
      }
  });

    let mailOptions = {
        from: 'firetronicstech@outlook.com',
        to: 'juan_jimenez82202@elpoli.edu.co',
        subject: 'Order sent',
        text: 'Your order was sent properly'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.redirect('http://127.0.0.1:5500/HTML/Index.html');
    });
});


app.listen(port, () => {
  console.log(`Server listening to http://localhost:${port}`);
});


// -------------------------------------------------

app.post('/getProductDetails', async (req, res) => {
  try {
      const { id } = req.body;

      if (isNaN(id)) {
          res.status(400).send('Invalid product ID');
          return;
      }

      await sql.connect(config);

      const query = `SELECT * FROM PRODUCTS WHERE ID_Product = @id`;
      const request = new sql.Request();
      request.input('id', sql.Int, id);
      const result = await request.query(query);

      if (result.recordset.length === 0) {
          res.status(404).send('Product not found');
          return;
      }

      res.send(result.recordset[0]);
      await sql.close();
  } catch (error) {
      console.error('Error fetching product details:', error.message);
      res.status(500).send('Internal server error');
  }
});

// Fetch comments

// Get Comments
app.post('/getComments', async (req, res) => {
  try {
    const { productId } = req.body;
    await sql.connect(config);
    const query = `SELECT rating, text FROM Comments WHERE productId = @productId`;
    const request = new sql.Request();
    request.input('productId', sql.Int, productId);
    const result = await request.query(query);
    res.send(result.recordset);
  } catch (error) {
    console.error('Error fetching comments:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});

// Add comments
app.post('/addComment', async (req, res) => {
  try {
    const { productId, rating, text } = req.body;
    await sql.connect(config);
    const query = `INSERT INTO Comments (productId, rating, text) VALUES (@productId, @rating, @text)`;
    const request = new sql.Request();
    request.input('productId', sql.Int, productId);
    request.input('rating', sql.Int, rating);
    request.input('text', sql.NVarChar, text);
    await request.query(query);
    res.status(200).send('Comment added successfully');
  } catch (error) {
    console.error('Error adding comment:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});



// CRUD Operations
// Create a new product
// Rutas para la administración de productos
app.post('/addProduct', async (req, res) => {
  try {
    const { ID_Product, name, price, stock, description, img, category } = req.body;
    await sql.connect(config);
    const insertQuery = `
      INSERT INTO PRODUCTS (ID_Product, Name, Price, Stock, Description, IMG, Category)
      VALUES (@ID_Product, @Name, @Price, @Stock, @Description, @IMG, @Category)
    `;
    const request = new sql.Request();
    request.input('ID_Product', sql.Int, ID_Product);
    request.input('Name', sql.NVarChar, name);
    request.input('Price', sql.Numeric, price);
    request.input('Stock', sql.Int, stock);
    request.input('Description', sql.NVarChar, description);
    request.input('IMG', sql.NVarChar, img);
    request.input('Category', sql.NVarChar, category);
    await request.query(insertQuery);
    res.status(201).send('Product added successfully');
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});

app.delete('/deleteProduct', async (req, res) => {
  try {
    const { id } = req.body;
    await sql.connect(config);
    const deleteQuery = `DELETE FROM PRODUCTS WHERE ID_Product = @id`;
    const request = new sql.Request();
    request.input('id', sql.Int, id);
    await request.query(deleteQuery);
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    console.error('Error deleting product:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});

app.get('/getAllProducts', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await new sql.Request().query('SELECT * FROM PRODUCTS');
    res.status(200).send(result.recordset);
  } catch (error) {
    console.error('Error getting products:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});

// Ruta para actualizar productos
app.put('/updateProduct', async (req, res) => {
  try {
    const { id, name, category, price, stock, description, img } = req.body;
    await sql.connect(config);
    const updateQuery = `
      UPDATE PRODUCTS
      SET Name = @Name,
          Category = @Category,
          Price = @Price,
          Stock = @Stock,
          Description = @Description,
          IMG = @IMG
      WHERE ID_Product = @ID_Product
    `;
    const request = new sql.Request();
    request.input('ID_Product', sql.Int, id);
    request.input('Name', sql.NVarChar, name);
    request.input('Category', sql.NVarChar, category);
    request.input('Price', sql.Numeric, price);
    request.input('Stock', sql.Int, stock);
    request.input('Description', sql.NVarChar, description);
    request.input('IMG', sql.NVarChar, img);
    await request.query(updateQuery);
    res.status(200).send('Product updated successfully');
  } catch (error) {
    console.error('Error updating product:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});


// Get users
app.get('/getAllUsers', async (req, res) => {
  try {
    await sql.connect(config);
    const result = await new sql.Request().query('SELECT ID_Customer, Name, Email FROM CUSTOMERS');
    res.status(200).send(result.recordset);
  } catch (error) {
    console.error('Error getting users:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});

app.delete('/deleteUser', async (req, res) => {
  try {
    const { id } = req.body;
    await sql.connect(config);
    const deleteQuery = `DELETE FROM CUSTOMERS WHERE ID_Customer = @id`;
    const request = new sql.Request();
    request.input('id', sql.Int, id);
    await request.query(deleteQuery);
    res.status(200).send('Customer deleted successfully');
  } catch (error) {
    console.error('Error deleting customer:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});


// Add users
app.post('/addUsers', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await sql.connect(config);
    const query = `INSERT INTO CUSTOMERS (Name, Email, Password) VALUES (@name, @email, @password)`;
    const request = new sql.Request();
    request.input('name', sql.NVarChar, name);
    request.input('email', sql.NVarChar, email);
    request.input('password', sql.NVarChar, password);
    await request.query(query);
    res.status(200).send('Comment added successfully');
  } catch (error) {
    console.error('Error adding comment:', error.message);
    res.status(500).send('Internal server error');
  } finally {
    await sql.close();
  }
});
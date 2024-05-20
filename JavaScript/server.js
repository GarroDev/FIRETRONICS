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

      // If the passwords match, reply with a message indicating that the user was found.
      res.redirect('http://127.0.0.1:5500/HTML/Index.html?Profile=2');

    } else {
      // If the passwords do not match, reply with a message indicating that the password is incorrect.
      res.status(401).send('Incorrect password');
    }



    //--------------------------------------------------------------------------------------------------------------------------------------






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
    console.error('Error geting user information:', error.message);
    res.status(500).send('Internal server error');
  }
});

app.post('/getitems', async (req, res) => {
  try {
    await sql.connect(config);

    let query = 'SELECT * FROM PRODUCTS WHERE 1=1';

    if (req.body.category) {
      query += ' AND category = @category';
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

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



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
    res.send('<script>alert("Successful registration!"); window.location.href = "http://127.0.0.1:5500/HTML/Index.html";</script>');
  } catch (error) {
    // Handle errors
    console.error('Error inserting values:', error.message);
    res.status(500).send('Internal server error');
  }
});

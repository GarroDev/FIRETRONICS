// app.js
const express = require('express');
const { registrarUsuario } = require('./userController');

const app = express();
app.use(express.urlencoded({ extended: true }));

app.post('/registro', async (req, res) => {
  const { Name, email, passwrod } = req.body;
  try {
    await registrarUsuario(Name, email, passwrod);
    res.send('Usuario registrado correctamente');
  } catch (error) {
    res.status(500).send('Error al registrar usuario');
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

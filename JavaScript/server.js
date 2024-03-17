const express = require('express');
const app = express();
const port = 3000; // Puedes usar cualquier puerto que desees

app.use(express.urlencoded({ extended: true }));

app.post('/registro', (req, res) => {
  // Aquí es donde manejarás la solicitud de registro
  const { Name, email, password } = req.body;
  // Puedes imprimir los datos recibidos desde el formulario
  console.log('Name:', Name);
  console.log('email:', email);
  console.log('password:', password);
  // Puedes conectar con la base de datos y guardar los datos del usuario aquí
  // Por ahora, solo responderemos con un mensaje de éxito
  res.send('¡Registro exitoso!');
});

app.listen(port, () => {
  console.log('Servidor escuchando en http://localhost:${port}');
});

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const puerto = 3245;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    // Procesa la solicitud del webhook aquí
    console.log('Webhook recibido:', req.body);

    // Ejecuta el script o comando para actualizar y reiniciar tu aplicación Node.js
    // ...

    res.status(200).send('Webhook recibido correctamente.');
});

app.listen(puerto, () => {
    console.log(`Servidor Express.js escuchando en el puerto ${puerto}`);
});

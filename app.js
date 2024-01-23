const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const puerto = 3245;

app.use(bodyParser.json());



app.post('/living', (req, res) => {
    
    console.log("Push Detectado")

    const { ref } = req.body

    switch (ref) {
        case "refs/heads/main":
            deployliving((error, stdout, stderr) => {
                if (error) {
                    console.error('Error al ejecutar el comando de despliegue:', error);
                } else {
                    console.log('Despliegue exitoso:', stdout);
                }
            });

            break;
        default:
            console.log(ref)
    }

    res.end()
    
});

const deployliving = (callback) => {
    exec('git pull && npm install && pm2 restart living', callback);
}


app.listen(puerto, () => {
    console.log(`Servidor Express.js escuchando en el puerto ${puerto}`);
});





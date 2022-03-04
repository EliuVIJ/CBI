//importar el modulo express
const express = require ('express'); 
const app = express (); 
//importamos mysql2
const mysql = require('mysql2');
const myConnection = require('express-myconnection');
//importamos cors
const cors = require('cors');

//configurar el puerto por el cual estará trabajando el servidor
app.set ('port', process.env.PORT || 8000);

//Parámetros para la conexión de la base de datos
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'evaluacion'
}

// middlewares -------------------------------------
app.use(myConnection(mysql, dbOptions, 'single'))
app.use(express.json())
app.use(cors())

//Rutas
const customerRouters = require('./routes/users');

//obtenemos el puerto
app.listen (app.get('port'),() => {
    console.log ('Server on port 8000'); //mandamos mensaje por consola
});

//establecer nuestra conección
app.use('/users', customerRouters);
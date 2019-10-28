const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const usuarioRota = require('./src/rotas/user')
let connect = require('./src/functions/connect')
const usuarioModel = require('./src/models/user');



// Cors use produção Heroku
var whitelist = [
    'https://jotinhabr.github.io',
    'http://jotinhabr.github.io',
    'https://localhost:8081', 
    'http://localhost:8081', 
    'https://localhost', 
    'http://localhost',
]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));


// Use in LocalHost server
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//     next();
// });


const PORT = process.env.PORT || 8085

app.get('/', (req, res) => {
    res.json({ 'mensagem': 'Bem-vindo à API dos Escooteros' })
});

app.use('/user', usuarioRota);

app.listen(PORT, (err) => {
    console.log(`Backend rodando na porta ${PORT}.`);
    connect.connect();
    usuarioModel.usuarioModel;
});
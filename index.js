const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const usuarioRota = require('./src/rotas/user')
let connect = require('./src/functions/connect')
const usuarioModel = require('./src/models/user');

// Cors 
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

// Then pass them to cors:
app.use(cors(corsOptions));

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
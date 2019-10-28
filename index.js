const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const usuarioRota = require('./src/rotas/user')
let connect = require('./src/functions/connect')
const usuarioModel = require('./src/models/user');

app.use(cors())

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
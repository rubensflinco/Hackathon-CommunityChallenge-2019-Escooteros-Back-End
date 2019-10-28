const mongoose = require('mongoose');
const config = require('./config');
const usuario = 'admin'; 
const senha = 'admin'; 
const MONGO_URL = `mongodb+srv://${usuario}:${senha}@cluster0-c5suq.mongodb.net/test?retryWrites=true&w=majority`;


function connect () {
    mongoose.connect(MONGO_URL,
        {useNewUrlParser: true},
        function (error){
            if (error){
                console.log('Erro na conexão com o banco de dados: ' + error)
            }else {
                console.log('Aplicação conectada com o banco de dados!')
            }
        }
    );
}

module.exports = { connect }
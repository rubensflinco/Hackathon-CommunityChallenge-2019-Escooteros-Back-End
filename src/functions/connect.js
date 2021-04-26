const mongoose = require('mongoose');
const config = require('../../config');
const MONGO_URL = `mongodb://${config.mongodb.user}:${config.mongodb.pass}@${config.mongodb.host}/${config.mongodb.db}${config.mongodb.urlAdd}`;


function connect () {
    mongoose.connect(MONGO_URL,
        {useNewUrlParser: true, useUnifiedTopology: true },
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

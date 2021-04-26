const mongoose = require('mongoose');
const config = require('../../config');
let MONGO_URL = `mongodb://`;
if (config.mongodb.user) {
    MONGO_URL += `${config.mongodb.user}:${config.mongodb.pass}@${config.mongodb.host}/${config.mongodb.db}${config.mongodb.urlAdd}`;
} else {
    MONGO_URL += `${config.mongodb.host}/${config.mongodb.db}${config.mongodb.urlAdd}`;
}


function connect () {
    mongoose.connect(MONGO_URL,
        {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
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

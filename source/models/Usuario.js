const { Schema, model } = require('mongoose')

const UsuarioSchema = new Schema({
    idUser: {
        type: String, 
        required: true
    }, 
    tokenFace: {
        type: String, 
        required: true
    },
    nome: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    foto: {
        type: String, 
        required: true 
    }, 
    pontos: {
        type: String, 
        requried: true 
    }, 

})
const usuarioModel = mongoose.model('Usuario', UsuarioSchema)

module.exports = {usuarioModel, UsuarioSchema}
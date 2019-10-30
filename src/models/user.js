const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const UsuarioSchema = new Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId, 
        auto: true
    }, 
    userFbID: {
        type: String, 
        required: true,
        unique: true
    },
    token: {
        type: String, 
        required: true,
        unique: true
    },
    nome: {
        type: String, 
        required: true
    },
    apelido: {
        type: String, 
        required: true
    },
    foto: {
        type: String, 
        required: true 
    },
    pontos: {
        type: String, 
        default: '0',
        requried: true 
    }, 

},
{
  timestamps: true
})
const usuarioModel = mongoose.model('Usuario', UsuarioSchema)

module.exports = {usuarioModel, UsuarioSchema}
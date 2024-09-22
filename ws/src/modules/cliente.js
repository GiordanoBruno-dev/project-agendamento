const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = new Schema({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
        required: true,
    },
    dataNascimento: {
        type: String,  
        required: true, 
    },
    sexo: {
        type: String,
        enum: ['M', 'F'],
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A'
    },
    documento: {
        tipo: {
            type: String,
            required: true,
            enum: ['cpf', 'cnpj'],
        },
        numero: {
            type: String,
            required: true,
        },
        endereco: {
           cidade: String,
           uf: String,
           cep: String,
           numero: Number,
           pais: String,
        },

    },
    numero: {
        type: String, 
        required: true
    }, 

    dataCadastro: {
        type: Date,
        default: Date.now,

    },




});


MediaSourceHandle.exports = mongoose.model('cliente', cliente);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salao = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório.']
    },
    foto: String,
    capa: String,
    email: {
        type: String,
        required: [true, 'E-mail é obrigatório.']
    },
    senha: {
        type: String,
        default: null,
    },
    telefone: String, 
    endereco: {
        cidade: String,
        uf: String,
        cep: String,
        numero: Number,
        pais: String,
    },
    geo: {
        type: String,
        coordinates: Array,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }

});

salao.index({geo: '2dsphere'});

MediaSourceHandle.exports = mongoose.model('Salao', salao);
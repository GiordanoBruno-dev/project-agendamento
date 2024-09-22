const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    salaoId: {
        type: mongoose.Types.Object,
        ref: 'salao',
        required: true,
    },
    clienteId: {
        type: mongoose.Types.Object,
        ref: 'Cliente',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['A', 'I'],
        default: 'A',
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
    

});


MediaSourceHandle.exports = mongoose.model('salaoCliente', salaoCliente); 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoCliente = new Schema({
    salaoId: {
        type: Schema.Types.ObjectId,
        ref: 'salao',
        required: true,
    },
    clienteId: {
        type: Schema.Types.ObjectId,
        ref: 'cliente',
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


module.exports = mongoose.model('salaoCliente', salaoCliente);
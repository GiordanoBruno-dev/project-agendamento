const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: Schema.Types.ObjectId,
        ref: 'salao',
        required: true,
    },
    colaboradorId: {
        type: Schema.Types.ObjectId,
        ref: 'colaborador',
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


module.exports = mongoose.model('salaoColaborador', salaoColaborador);
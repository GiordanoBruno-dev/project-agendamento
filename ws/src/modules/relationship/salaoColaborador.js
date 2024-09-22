const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaoColaborador = new Schema({
    salaoId: {
        type: mongoose.Types.Object,
        ref: 'Salao',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Types.Object,
        ref: 'Colaborador',
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


MediaSourceHandle.exports = mongoose.model('SalaoColaborador', salaColaborador); 
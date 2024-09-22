const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    servicoId: {
        type: mongoose.Types.Object,
        ref: 'Colaborador',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Types.Object,
        ref: 'Servico',
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


MediaSourceHandle.exports = mongoose.model('colaboradorServico', colaboradorServico); 
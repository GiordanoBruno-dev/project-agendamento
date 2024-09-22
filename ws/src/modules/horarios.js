const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    salaoId: {
        type: mongoose.Types.Object,
        ref: 'Salao',
        required: true,
    },
    especialidades: [
        {
        type: mongoose.Types.Object,
        ref: 'Servico',
        required: true,
    },
    ],
    colaboradores: [
        {
        type: mongoose.Types.Object,
        ref: 'Servico',
        required: true,
    },
    ],
    dias: {
        type: [Number],
        required: true,
    },
     inicio: {
        type: Date,
        required: true,
     },
     fim: {
        type: Date,
        required: true,
     },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
    

});


MediaSourceHandle.exports = mongoose.model('horario', horario);
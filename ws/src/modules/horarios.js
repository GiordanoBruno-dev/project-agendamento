const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const horario = new Schema({
    salaoId: {
        type: Schema.Types.ObjectId,
        ref: 'salao',
        required: true,
    },
    especialidades: [
        {
        type: Schema.Types.ObjectId,
        ref: 'servico',
        required: true,
    },
    ],
    colaboradores: [
        {
        type: Schema.Types.ObjectId,
        ref: 'colaborador',
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


module.exports = mongoose.model('horario', horario);
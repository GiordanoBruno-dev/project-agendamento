const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const colaboradorServico = new Schema({
    servicoId: {
        type: Schema.Types.ObjectId,
        ref: 'servico',
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


module.exports = mongoose.model('colaboradorServico', colaboradorServico);
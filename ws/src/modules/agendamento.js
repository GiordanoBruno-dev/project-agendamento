const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
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
    data: {
        type: Date,
        required: true,
    },
    comissao: {
        type: Number,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    transactionId: {
        type: String,
        required: true,
    },
    dataCadastro: {
        type: Date,
        default: Date.now,
    }
    

});


module.exports = mongoose.model('agendamento', agendamento);
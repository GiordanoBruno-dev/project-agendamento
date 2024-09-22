const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const agendamento = new Schema({
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
    servicoId: {
        type: mongoose.Types.Object,
        ref: 'servico',
        required: true,
    },
    colaboradorId: {
        type: mongoose.Types.Object,
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


MediaSourceHandle.exports = mongoose.model('agendamento', agendamento); 
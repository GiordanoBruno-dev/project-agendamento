const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servico = new Schema({
    
    salaoID: {
        type: mongoose.Types.ObjectId,
        ref: 'Salao',
        required: true,
    },
    titulo:{
        type:String,
        required: true,
    },
    preco:{
        type:Number,
        required: true,
    },
    comissao:{
        type:Number,  // % de comissão sobre o preço
        required: true,
    },
    duracao:{
        type:Number,  // Duração em minutos
        required: true,
    },
    recorrencia:{
        type:NUmber,   // Periodo de volta do cliente em dias 
        required: true,
    },
    descricao:{
        type:String,
        required: true,
    },
    status:{
        type:String,
        required: true,
        enum: ['A', 'I', 'E'],
        default: 'A',
    },

    dataCadastro: {
        type: Date,
        default: Date.now,
    },

});


MediaSourceHandle.exports = mongoose.model('servico', servico);
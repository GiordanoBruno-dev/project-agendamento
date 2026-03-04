const mongoose = require('mongoose');
const URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/agendamento';

mongoose
	.connect(URI)
	.then(() => console.log('DB conectado'))
	.catch((err) => console.log(err));
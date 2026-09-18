const mongoose = require('mongoose')

const MONGO_URL ='mongodb+srv://afonsodevf_db_user:7O74LFNgAJ9mV6ca@cluster0.jp2dggc.mongodb.net';

async function connectDatabase(){
    await mongoose.connect(MONGO_URL, {dbName:'alunos'});
    console.log('MongoDB conectado com sucesso');
}

module.exports = connectDatabase;
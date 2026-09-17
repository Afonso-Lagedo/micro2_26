const mongoose = require('mongoose')

const MONGO_URL ='mongodb+srv://afonsodevf_db_user:U9zN7rDizOtgtADa@cluster0.0jcbb17.mongodb.net/?appName=Cluster0';

async function connectDatabase(){
    await mongoose.connect(MONGO_URL);
    console.log('MongoDB conectado com sucesso');
}

module.exports = connectDatabase;
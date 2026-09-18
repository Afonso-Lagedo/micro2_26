const express = require('express');
const connectDatabase = require ('./config/database');
const Aluno = require ('./models/Aluno');

const app = express();
const PORT = 3003;

app.use(express.json())

app.get('/', (req, res) =>{
    res.send("SEJA BEM VINDO!")
})

app.get('/alunos', async (req, res) =>{
    try{
        const alunos = await Aluno.find();
        res.status(200).json(alunos)
    }
    catch(error){
        res.status(500).json({
            mensagem: 'Deu erro porra!!!',
            erro: error.message
        })
    }
})

async function startServer() {
    try {
        await connectDatabase();
        app.listen(PORT, ()=>{
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        })
    }
    catch(error){
        console.error('Nao foi possivel iniciar a aplicacao.', error.message);
    }
}

startServer();
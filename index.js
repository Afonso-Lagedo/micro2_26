const express = require('express');

const app = express()

app.get('/teste', (req, res) =>{
    res.send("Minha primeira API")
})

app.listen(3003, ()=>{
    console.log("Servidor ligado")
})
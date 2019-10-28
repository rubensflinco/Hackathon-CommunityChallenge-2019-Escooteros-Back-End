const express = require('express') 
const mongoose = require('mongoose')
const router = express.Router() 

router.use(express.json())


router.post('/autenticar', (req, res) =>{
    res.json({'mensagem':'Rota /usuario'});
});

router.get('/unico/:tokenUser', (req, res) =>{
    res.json({'mensagem':'Rota /usuario'});
});

router.get('/todos', (req, res) =>{
    let nome = res.body.nome;
    res.json({'mensagem':`Rota /usuario/:${nome}`});
});

router.put('/ponto', (req, res) =>{

});

// router.delete('/deletar', (req, res) =>{
// });


module.exports = router

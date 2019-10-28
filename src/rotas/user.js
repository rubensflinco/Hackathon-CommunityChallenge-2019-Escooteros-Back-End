const express = require('express')
let connect = require('../functions/connect')
const mongoose = require('mongoose')
const router = express.Router()
const md5 = require('md5');

router.use(express.json())


router.post('/autenticar', async (req, res) => {
    let userFbID = req.body.userFbID;
    let responseFind = await mongoose.model('Usuario').find({ userFbID });
    responseFind = responseFind[0];
    if (responseFind.userFbID == userFbID) {
        // Usario já criado no banco
        res.json({ 'mensagem': 'OK: Login feito.', 'data': responseFind, 'token': responseFind.token });
        return;
    } else {
        //  Usuario sem registro no banco
        try {
            let json = req.body;
            json.token = md5(Math.random());
            let response = await mongoose.model('Usuario').create(json);
            res.json({ 'mensagem': 'OK: Cadastro e login feito.', 'data': response, 'token': response.token });
            return;
        } catch (error) {
            res.status(400);
            res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
            return;
        }
    }


});

router.post('/criar', async (req, res) => {
    try {
        let json = req.body;
        json.token = md5(Math.random());
        let response = await mongoose.model('Usuario').create(json);
        res.json({ 'mensagem': 'OK', 'data': response });
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
    }
});

router.get('/unico/:token', async (req, res) => {
    try {
        let token = req.params.token;
        let response = await mongoose.model('Usuario').find({ token: token });
        response = response[0];
        res.json({ 'mensagem': 'OK', 'data': response });
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
    }
});

router.get('/todos', async (req, res) => {
    try {
        let response = await mongoose.model('Usuario').find({});
        res.json({ 'mensagem': 'OK', 'data': response });
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
    }
});

router.post('/ponto', async (req, res) => {
    try {
        let token = req.body.token;
        let tipo = req.body.tipo;
        let quantidade = req.body.quantidade;
        let pontos, responseFind;

        try {
            responseFind = await mongoose.model('Usuario').find({ token });
            responseFind = responseFind[0];
        } catch (error) {
            res.status(400);
            res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
            return;
        }

        switch (tipo) {
            case "somar":
                pontos = (parseInt(quantidade) + parseInt(responseFind.pontos))
                break;

            case "subtrair":
                pontos = (parseInt(quantidade) - parseInt(responseFind.pontos))
                break;

            default:
                res.status(400);
                res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': 'Passe um tipo certo!' });
                return;
        }

        let response = await mongoose.model('Usuario').update({ pontos });
        try {
            responseFind = await mongoose.model('Usuario').find({ token });
            responseFind = responseFind[0];
        } catch (error) {
            res.status(400);
            res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
            return;
        }
        res.json({ 'mensagem': 'OK', 'data': responseFind, 'response': response });
        return;
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
        return;
    }
});

router.delete('/deletar/:id', async (req, res) => {
    try {
        let response = await mongoose.model('Usuario').remove({ _id: req.params.id });
        res.json({ 'mensagem': 'OK', 'data': response });
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
    }
});

router.delete('/deletar/todos', async (req, res) => {
    try {
        let response = await mongoose.model('Usuario').remove({});
        res.json({ 'mensagem': 'OK', 'data': response });
    } catch (error) {
        res.status(400);
        res.json({ 'mensagem': 'ERRO: Todo mundo um dia vai errar!', 'data': error });
    }
});


module.exports = router

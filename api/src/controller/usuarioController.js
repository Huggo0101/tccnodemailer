import { Router } from "express";
import { cadastrarUsuario, loginUsuario, realizarDoacao } from "../repository/usuarioRepository.js";

const server = Router();

// cadastrar usuario
server.post('/usuario/cadastro', async (req, resp) => {
    try{
        const usuarioParaInserir = req.body;
        if(!usuarioParaInserir.nome){
            throw new Error('Nome do usuário é obrigatório!');
        }
        if(!usuarioParaInserir.email){
            throw new Error('Email do usuário é obrigatório!');
        }
        if(!usuarioParaInserir.senha){
            throw new Error('Senha é obrigatória');
        }
        if(!usuarioParaInserir.cpf){
            throw new Error('CPF do usuário é obrigatório');
        }
        const usuarioInserido = await cadastrarUsuario(usuarioParaInserir);
        resp.send(usuarioInserido);
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

//login usuario
server.post('/usuario/login', async (req,resp) => {
    try{
        const {email, senha} = req.body;
        const resposta = await loginUsuario(email, senha);

        if(!resposta){
            throw new Error('Credenciais inválidas');
        }
        
        resp.send(resposta)
    }
    catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

//Fazer doação

server.post('/usuario/doacao', async (req,resp) => {
    try{
        const {projeto, usuario, doacao } = req.body;
        const resposta = await realizarDoacao(projeto, usuario, doacao);
        
        if(!usuario)
            throw new Error('Faça seu Login!');
        if(!projeto)
            throw new Error('Selecione um Projeto!');
        if(!doacao)
            throw new Error('Selecione um valor a ser doado!');
        
        resp.status(204).send(resposta)
    }
    catch(err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server;
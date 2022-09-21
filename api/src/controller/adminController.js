import { Router } from 'express';
import { login, adicionarProjeto, removerProjeto, alterarImagem } from '../repository/adminRepository.js';

import multer from 'multer';

const upload = multer({ dest: 'storage/imgProjetos' })
const server = Router();

server.post('/admin/login', async (req, resp) => {
    try{
        const {email, senha} = req.body;
        const resposta =  await login(email, senha);
        if(!resposta){
            throw new Error('Credenciais inválidas')
        }


        resp.send(resposta)
    }catch(err){
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;

//cadastrar novo projeto
server.post('/admin/projeto', async (req, resp) => {
    try {
        const projetoParaInserir = req.body
        if (!projetoParaInserir.nome)
            throw new Error('Nome do projeto é obrigatório!');

        if (!projetoParaInserir.descricao)
            throw new Error('descrição do projeto é obrigatório!');

        if (projetoParaInserir.meta == undefined || projetoParaInserir < 0)
            throw new Error('meta do projeto é obrigatório!');
            
        const projeto = await adicionarProjeto(projetoParaInserir);
        resp.send(projeto);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//deletar projeto
server.delete('/admin/projeto/:id', async (req, resp) => {
    try {
        const { id } = req.params;

        const resposta = await removerProjeto(id);

        if (resposta != 1)
            throw new Error('projeto não pode ser removido')
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

//alterar imagem do projeto
server.put('/admin/projeto/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1)
            throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
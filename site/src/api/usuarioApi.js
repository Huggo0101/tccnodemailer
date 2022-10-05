import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function login(email, senha) {
    const r = await api.post('/usuario/login', {
          email:email,
          senha:senha
    });

    return r.data;
}
export async function cadastrarUsuario(nome,cpf,email,senha,confirmar){
    const resposta= await api.post('/usuario/cadastrar',{
        nome:nome,
        cpf:cpf,
        email:email,
        senha:senha,
        confirmar:confirmar
    });

    return resposta.data;
}
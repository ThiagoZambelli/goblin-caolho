import INovoUsuario from "interfaces/INovoUsuario";
import INovoUsuarioValidacao from "interfaces/INovoUsuarioValidacao";

export default function useValidaUserCriacao() {


    return (userParaTestar: INovoUsuarioValidacao) => {
        const validado = testaSenha(userParaTestar);

        const userValidado: INovoUsuario = {           
            email: userParaTestar.email,            
            nome: userParaTestar.nome,
            senha: userParaTestar.senha
        }
        if (validado) {
            return userValidado;
        } else {
            alert("Problema ao cadastrar")
            return null
        }
    }
}

function testaSenha(user: INovoUsuarioValidacao) {
    return user.senha === user.confSenha;
}
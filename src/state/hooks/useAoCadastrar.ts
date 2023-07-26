import useAbrirModalCadastro from "./useAbrirModalCadastro";
import INovoUsuarioValidacao from "interfaces/INovoUsuarioValidacao";
import useValidaUserCriacao from "./useValidaUserCriacao";
import { postUser } from "servicos/user";


export default function useAoCadastrar() {

    const validaUser = useValidaUserCriacao();
    const abrirModal = useAbrirModalCadastro();

    return async (userData:INovoUsuarioValidacao) => {
        const userValidado = validaUser(userData);
        try {
            if(userValidado) {
                await postUser(userValidado);
                abrirModal();
            } else {
                alert("Erro ao validar o Usuario. Dados Incorretos.")
            }
        } catch (err) {
            console.log(err)

        };        
    }
}


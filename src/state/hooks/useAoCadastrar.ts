import useAbrirModalCadastro from "./useAbrirModalCadastro";
import INovoUsuarioValidacao from "interfaces/INovoUsuarioValidacao";
import useValidaUserCriacao from "./useValidaUserCriacao";
import { postUser } from "servicos/user";


export default function useAoCadastrar() {

    const validaUser = useValidaUserCriacao();
    const abrirModal = useAbrirModalCadastro();

    return async (userData: INovoUsuarioValidacao) => {
        const userValidado = validaUser(userData);
        if (userValidado) {
            try {
                const menssagem = await postUser(userValidado);
                alert(menssagem?.data.menssage)                
                if(menssagem?.status === 201){
                    abrirModal();
                }
            }
            catch (err) {

            }

        } else {
            alert("Erro ao validar o Usuario. Dados Incorretos.")
        }
    }
}


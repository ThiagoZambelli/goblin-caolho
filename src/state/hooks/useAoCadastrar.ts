import useAbrirModalCadastro from "./useAbrirModalCadastro";
import INovoUsuarioValidacao from "interfaces/INovoUsuarioValidacao";
import useValidaUserCriacao from "./useValidaUserCriacao";
import { postUser } from "servicos/user";


export default function useAoCadastrar() {

    const validaUser = useValidaUserCriacao();
    const abrirModal = useAbrirModalCadastro();

    return async (userData: INovoUsuarioValidacao) => {
        const userValidado = validaUser(userData);
        try {
            if (userValidado) {
                const menssagem = await postUser(userValidado);
                alert(await menssagem.menssage);
                if (menssagem.menssage !== "Email ja Cadastrado!") {
                    abrirModal();
                }
            } else {
                alert("Erro ao validar o Usuario. Dados Incorretos.")
            }
        } catch (err) {
            console.log(err)

        };
    }
}


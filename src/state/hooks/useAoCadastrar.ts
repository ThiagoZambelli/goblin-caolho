import axios from "axios";
import INovoUsuario from "interfaces/INovoUsuario";
import useAbrirModalCadastro from "./useAbrirModalCadastro";

export default function useAoCadastrar() {
    const fecharModal = useAbrirModalCadastro();

    return (novoUsuario: INovoUsuario) => {
        axios.post('http://localhost:8000/public/registrar', novoUsuario)
            .then(() => {
                alert('Usuario cadastrado com sucesso!');
                fecharModal();
            })
            .catch((erro) => {
                alert(`Algo deu errado ! : ${erro}`)
            })
    }
}
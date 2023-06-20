import axios from "axios";
import ILogin from "interfaces/ILogin";
import useAbrirModalLogin from "./useAbrirModalLogin";

export default function useAoLogar(){
    const fecharModal = useAbrirModalLogin();
    
    return (usuarioLogin : ILogin) => {
        axios.post('http://localhost:8000/public/login', usuarioLogin)
            .then((resposta) => {
                alert('Login efetuado !');
                console.log(resposta)
                fecharModal();
            })
            .catch((erro) => {
                alert(`Algo deu errado ! : ${erro}`)
            })
    }
}
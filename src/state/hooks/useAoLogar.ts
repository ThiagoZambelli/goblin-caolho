import axios from "axios";
import ILogin from "interfaces/ILogin";
import useAbrirModalLogin from "./useAbrirModalLogin";


export default function useAoLogar(){
    const fecharModal = useAbrirModalLogin();   
    
    return (usuarioLogin : ILogin) => {
        axios.post('http://localhost:8000/public/login', usuarioLogin)
            .then((resposta) => {
                alert('Login efetuado !');
                sessionStorage.setItem('token', resposta.data.access_token)
                fecharModal();
            })
            .catch((erro) => {
                if(erro?.response?.data?.message){
                    alert(erro.response.data.message);                    
                } else {
                    alert(`Algo deu errado ! : /n ${erro}`)                    
                }
            })
    }
}
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalLogin } from 'state/atom';


export default function useAbrirModalLogin(){
    const estadoAtual = useRecoilValue(modalLogin);
    const aberto = useSetRecoilState(modalLogin)
    return () => {
        aberto(!estadoAtual);
    }
}
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalCadastro } from 'state/atom';


export default function useAbrirModalCadastro() {
    const estadoAtual = useRecoilValue(modalCadastro);
    const aberto = useSetRecoilState(modalCadastro)
    return () => {
        aberto(!estadoAtual);
    }
}
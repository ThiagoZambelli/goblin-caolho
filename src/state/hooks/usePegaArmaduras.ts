import itensMagicos from 'assets/itensMagicos.json';
import useItensAleatorios from './useItensAleatorios';


export default function usePegaArmaduras(){
    const itens = itensMagicos.filter(item => {
        return item.nome.includes('Armor')
    })

    const armaduras = useItensAleatorios(itens)
    return armaduras;
}
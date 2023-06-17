import itensMagicos from 'assets/litsaItensMagicos.json';
import useItensAleatorios from './useItensAleatorios';


export default function usePegaArmaduras(){
    const itens = itensMagicos.filter(item => {
        return item.tipo === 'Armor'
    })

    const armaduras = useItensAleatorios(itens)
    return armaduras;
}
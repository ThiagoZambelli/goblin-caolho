import { useEffect, useState } from 'react';
import { getItens } from 'servicos/itens';


export default function useItensMagicos() {
    const [itens, setItens] = useState([]);
    async function fetchIntens() {
        const itensAPI = await getItens();
        setItens(itensAPI)
    }

    useEffect(() => {
        fetchIntens()
    }, [])

    return itens;

}
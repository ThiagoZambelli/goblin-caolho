import { useParams } from 'react-router-dom'
import usePegaItem from './hook/usePegaItem';
import PaginaErro from 'pages/PaginaErro';
import { styled } from 'styled-components';
import styles from './PaginaDeItem.module.scss';
import useTestaCorPorRaridade from 'pages/PaginaLoja/CardLoja/hook/useTetsaCorPorraridade';
import armor from './assets/armor.png';
import weapon from './assets/weapons.png';

const FooterEstylizado = styled.span<IFooter>`
    color: #402C25;
    background-color: ${(prop) =>  prop.$cor};
    font-weight: bold;
    padding: .5em 1em;
    border-radius: 1em;
    
`
interface IFooter {
    $cor: string    
}
const testaTipo = (tipo: string) => {
    if (tipo.toLowerCase().includes('armor')) {
        return armor;
    } else {
        return weapon;
    }
}

function PaginaDeItem() {
    const { id } = useParams();
    const item = usePegaItem(id!);
    const corDaRaridade = useTestaCorPorRaridade(item?.raridade);

    return (
        item && id ? <main className={styles.pagina}>
            <header>
                <section>
                    <h1>{item.nome}</h1>
                    <h2>{item.tipo}</h2>
                </section>
                <FooterEstylizado $cor={corDaRaridade}>{item.raridade}</FooterEstylizado>
            </header>
            <img src={testaTipo(item.tipo)} alt="Imagem do item" />
            <p className={styles.pagina__descricao}>
                {item.descricao}
            </p>
        </main> : <PaginaErro />
    )
}

export default PaginaDeItem
import ICardItemC from 'interfaces/ICardItemC'
import styles from './CardLoja.module.scss';
import useTestaCorPorRaridade from './hook/useTetsaCorPorraridade';
import { styled } from 'styled-components';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const FooterEstylizado = styled.footer<IFooter>`
    color:${(prop) => (!prop.$foco ? prop.$cor : '#402C25')};
    background-color: ${(prop) => (!prop.$foco ? 'trasparent' : prop.$cor)};
    font-weight: bold;
    padding: .5em 1em;
    
`
const FavoritoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    font-size: 1.3rem;
    padding: .5em 0;
`

interface IFooter {
    $cor: string,
    $foco: boolean
}

function CardLoja({ ...item }: ICardItemC) {
    const corDaRaridade = useTestaCorPorRaridade(item.raridade)
    const [foco, setFoco] = useState(false)
    const ir = useNavigate();

    const hover = () => {
        setFoco(true);
    };

    const naoHover = () => {
        setFoco(false);
    };

    const irParaPagina = (id:string) => {
        ir(`/item/${id}`)
    }


    return (
        <section
            className={styles.cardLoja}
            onMouseEnter={hover}
            onMouseLeave={naoHover}
            onClick={() => irParaPagina(item._id)}
        >
            <FavoritoStyled>{item.favorito ? <AiFillHeart /> : <AiOutlineHeart />}</FavoritoStyled>
            <header>{item.nome}</header>
            <h2>{item.tipo}</h2>
            <div className={styles.cardLoja__descricao}>
                {item.descricao}
            </div>
            <FooterEstylizado $foco={foco} $cor={corDaRaridade}>{item.raridade}</FooterEstylizado>
        </section>
    )
}

export default CardLoja
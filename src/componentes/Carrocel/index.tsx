import ICardItemC from 'interfaces/ICardItemC'
import { LzBotao, LzCard } from 'lithtlez-ds';
import React, { useState, useEffect } from 'react';
import styles from './Carrocel.module.scss';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

interface CarrocelProps {
    cards: ICardItemC[],
    titulo?: string,
    invertido?: boolean
}

function Carrocel({ cards, titulo, invertido = true }: CarrocelProps) {

    const fila = cards.length - 1;
    const primeiroDaFila = cards[0].id

    const [lugarNaFilaAtual, setLugarNaFilaAtual] = useState(0)
    const [idItemMostrado, setIdItemMostrado] = useState(primeiroDaFila);
    const [itemMostrado, setItemMostrado] = useState({ id: 0, nome: '', raridade: '', descricao: '',  tipo:''});
    


    const praFrente = () => {
        if (lugarNaFilaAtual === fila) {
            setLugarNaFilaAtual(0)
        } else {
            setLugarNaFilaAtual(lugarNaFilaAtual + 1)
        };
    }

    const praTras = () => {
        if (lugarNaFilaAtual === 0) {
            setLugarNaFilaAtual(fila)
        } else {
            setLugarNaFilaAtual(lugarNaFilaAtual - 1)
        };
    }

    const mudarMostrado = () => {
        const mostrado = cards.filter(card => card.id === cards[lugarNaFilaAtual].id)
        setItemMostrado(mostrado[0])
    }
    const mudarClicando = (card: ICardItemC) => {
        setItemMostrado(card)
        setIdItemMostrado(card.id)
    }

    useEffect(() => {
        // Código a ser executado quando o componente for montado
        setIdItemMostrado(cards[lugarNaFilaAtual].id)
        mudarMostrado();

    }, [lugarNaFilaAtual]); // Coloque as dependências aqui, se necessário


    return (

        <div>
            {titulo ? <h2 className={styles.titulo}>{titulo}</h2> : ''}
            <section className={styles.carrocelContainer}>
                <section className={styles.carrocel}>
                    <div className={styles.carrocel__sumirBTN}>
                        <LzBotao corHover='#161B21' corPrimaria='#26100E' corSecundaria='#B69E7C' onClick={praTras} ><AiOutlineArrowLeft /></LzBotao>
                    </div>
                    <div className={styles.carrocel__cards}>
                        {cards.map(card => (
                            <LzCard
                                key={card.id}
                                bgColor='#B69E7C'
                                onClick={() => { mudarClicando(card) }}
                                children={<h4>{card.nome}</h4>}
                                className={card.id === idItemMostrado
                                    ? 'cursor: pointer; max-width: 180px; text-align: center; display: flex;justify-content: center; text-align: justify;'
                                    : 'cursor: pointer; transform: scale(0.8); text-align: center; opacity: .5; max-width: 150px; font-size:10px; display: flex; justify-content: center; text-align: justify;'
                                }
                            />
                        ))}
                    </div>
                    <div className={styles.carrocel__sumirBTN}>
                        <LzBotao corHover='#161B21' corPrimaria='#26100E' corSecundaria='#B69E7C' onClick={praFrente} ><AiOutlineArrowRight /></LzBotao>
                    </div>
                </section>
                <div className={`${styles.carrocelContainer__descricao} ${invertido && styles.carrocelContainer__invertido}`}>
                    <LzCard bgColor='#B69E7C' className={'display: flex;flex-direction: column;align-items: center; row-gap: 4rem; justify-content: center;'}>
                        <h3 className={styles.carrocelContainer__descricao__titulo}>{itemMostrado.nome}</h3>
                        <p>{itemMostrado.descricao}</p>
                        <LzBotao tipo='secundario' corHover='#161B21' corPrimaria='#26100E' corSecundaria='#B69E7C' forma="gota" >Ver mais</LzBotao>
                    </LzCard>
                </div>
            </section>

        </div>
    )
}

export default Carrocel

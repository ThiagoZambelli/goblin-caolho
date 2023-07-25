import ICardItemC from 'interfaces/ICardItemC'
import React from 'react'
import styles from './CardCarrocel.module.scss';

interface CardCarrocelProps {
    item: ICardItemC,
    ativo: boolean,
    onClick: () => void
    
}

function CardCarrocel({onClick, item, ativo }: CardCarrocelProps) {
    return (
        <div            
            className={`
                ${styles.cardCarrocel} 
                ${!ativo && styles.cardCarrocel__inativo}`
            }
            onClick={onClick}
        >{item.nome}</div>
    )
}

export default CardCarrocel
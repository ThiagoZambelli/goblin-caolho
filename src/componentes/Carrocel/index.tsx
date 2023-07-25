import ICardItemC from "interfaces/ICardItemC";
import CardCarrocel from "./CardCarrocel";
import { useEffect, useState } from "react";
import styles from './Carrocel.module.scss'
import BannerCarrocel from "./BannerCarrocel";

interface CarrocelProps {
    listaCards: ICardItemC[],
    titulo?: string
}

function Carrocel({ listaCards, titulo }: CarrocelProps) {
    const [cardAtivo, setCardAtivo] = useState<ICardItemC>()


    useEffect(() => {
        setCardAtivo(listaCards[0])
    }, [])

    const mudarComClick = (item: ICardItemC) => {
        setCardAtivo(item);
    }

    return (
        <section className={styles.carrocel}>
            <h1 className={styles.carrocel__titulo}>{titulo}</h1>
            <div className={styles.carrocel__container}>
                <section className={styles.carrocel__cards}>
                    {listaCards.map(item => {
                        return (<CardCarrocel
                            onClick={() => mudarComClick(item)}
                            key={item._id}
                            item={item}
                            ativo={cardAtivo?._id === item._id}
                        />)
                    })}
                </section>
                <section className={styles.carrocel__banner}>
                    {cardAtivo?.nome && <BannerCarrocel key={cardAtivo?._id} item={cardAtivo!} />}
                </section>
            </div>
        </section>
    )
}

export default Carrocel;
import ICardItemC from 'interfaces/ICardItemC'
import styles from './CardCarrocel.module.scss';
import armor from './assets/armor.png';
import weapon from './assets/weapons.png';

interface CardCarrocelProps {
    item: ICardItemC,
    ativo: boolean,
    onClick: () => void
}
const testaTipo = (tipo: string) => {
    if (tipo.toLowerCase().includes('armor')) {
        return armor;
    } else {
        return weapon;
    }
}

function CardCarrocel({ onClick, item, ativo }: CardCarrocelProps) {
    return (
        <div
            className={`
                ${styles.cardCarrocel} 
                ${!ativo && styles.cardCarrocel__inativo}`
            }
            onClick={onClick}
        >
            <h2>{item.nome}</h2>
            <img src={testaTipo(item.tipo)} alt="Imagem relacionada ao tipo do item" />
        </div>
    )
}

export default CardCarrocel
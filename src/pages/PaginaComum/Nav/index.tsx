import React from 'react'
import logo from 'assets/logoLithtleZ.svg';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
import usePegaLogado from 'state/hooks/usePegaLogado';
import LinkNav from './LinkNav';
import {RxAvatar} from 'react-icons/rx'


function Nav() {

    const clicar = () => {
        console.log('ja cliquei')
    }
    const logado = usePegaLogado();

    return (
        <header className={styles.header}>
            <h1>
                <img src={logo} alt='Logo do LiththleZ' />
            </h1>
            <nav>
                <div className={styles.header__links}>
                    <LinkNav to='https://novo-projeto-solo-react-ts.vercel.app/' id='forjaDeLendas'  nome='Forja de Lendas' />
                    <LinkNav to='/' id='goblinCaolho'  nome='Goblin Caolho' />
                    <LinkNav to='#' id='favoritos'  nome='Favoritos' />                    
                </div>
                {logado
                    ? <div>
                        <Link to={"#"}>Meu perfil</Link>
                    </div>
                    : <div>
                        <button><RxAvatar /> Logar</button>
                    </div>
                }
            </nav>
        </header>
    )
}

export default Nav
import React, { useState } from 'react'
import logo from 'assets/logoLithtleZ.svg';
import styles from './NavLithtleZ.module.scss';
import { Link } from 'react-router-dom';
import usePegaLogado from 'state/hooks/usePegaLogado';
import LinkNav from './LinkNav';
import { RxAvatar } from 'react-icons/rx'
import useAbrirModalLogin from 'state/hooks/useAbrirModalLogin';


function NavLithtleZ() {

    const estadoModal = useAbrirModalLogin()
    const [navAberto, setNavAberto] = useState(false)

    const abrirNav = () => {
        setNavAberto(!navAberto)
    }

    const abrirModal = () => {
        estadoModal()
    }

    const logado = usePegaLogado();   

    return (
        <>
            <div className={styles.topo}>
                <header className={`${styles.topo__header} ${navAberto ? styles.topo__header__aberto : ''}`}>
                    <h1>
                        <img src={logo} alt='Logo do LiththleZ' />
                    </h1>
                    <nav>
                        <div className={styles.links}>
                            <LinkNav to='https://novo-projeto-solo-react-ts.vercel.app/' id='forjaDeLendas' nome='Forja de Lendas' />
                            <LinkNav to='/' id='goblinCaolho' nome='Goblin Caolho' />
                            <LinkNav to='#' id='favoritos' nome='Favoritos' />
                        </div>
                        {logado
                            ? <div>
                                <Link to={"#"}>Meu perfil</Link>
                            </div>
                            : <div>
                                <button className={`${styles.topo__btn}`} onClick={abrirModal}><RxAvatar /> Logar</button>
                            </div>
                        }                       
                    </nav>
                </header>
            </div>
            <div className={styles.btnAbertura}>
                <button className={`${styles.btnAbertura__btn} ${styles.topo__btn}`} onClick={abrirNav}>Menu</button>
            </div>
        </>
    )
}

export default NavLithtleZ
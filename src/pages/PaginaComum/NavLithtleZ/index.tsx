import React, { useState } from 'react'
import logo from 'assets/logoLithtleZ.svg';
import styles from './NavLithtleZ.module.scss';
import { Link } from 'react-router-dom';
import usePegaLogado from 'state/hooks/usePegaLogado';
import LinkNav from './LinkNav';
import useAbrirModalLogin from 'state/hooks/useAbrirModalLogin';
import useAbrirModalCadastro from 'state/hooks/useAbrirModalCadastro';
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/ai";


function NavLithtleZ() {

    const estadoModalCadastro = useAbrirModalCadastro()
    const estadoModalLogin = useAbrirModalLogin()
    const [navAberto, setNavAberto] = useState(false)

    const abrirNav = () => {
        setNavAberto(!navAberto)
    }

    const abrirModalCadastro = () => {
        estadoModalCadastro()
    }
    const abrirModalLogin = () => {
        estadoModalLogin()
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
                            ? <div className={styles.ancora}>
                                <Link to={"#"}>Meu perfil</Link>
                            </div>
                            : <div>
                                <button className={`${styles.topo__btn}`} onClick={abrirModalLogin}><AiOutlineUser /> Logar</button>
                                <button className={`${styles.topo__btn}`} onClick={abrirModalCadastro}><AiOutlineUserAdd /> Cadastrar</button>
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
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './MenuNav.module.scss';

function MenuNav() {
    const paginas = [
        {
            to: '/' || '',
            nome: 'Inicio'
        },
        {
            to: '/loja',
            nome: 'Loja'
        }
    ]
    const paginaAtual = useLocation();    

    return (
        <nav className={styles.nav}>
            {paginas.map(page => (<Link
                className={`${paginaAtual.pathname === page.to ? styles.nav__linkAtual :styles.nav__linkNormal }`}
                key={page.nome}
                to={page.to}>{page.nome}</Link>))}
        </nav>
    )
}

export default MenuNav
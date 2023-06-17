import React from 'react'
import NavLithtleZ from './NavLithtleZ'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { LzModal } from 'lithtlez-ds'
import useEstadoModalLogin from 'state/hooks/useEstadoModalLogin'
import useAbrirModalLogin from 'state/hooks/useAbrirModalLogin'

function PaginaComum() {
  const modalAberto = useEstadoModalLogin();
  const mudarModal = useAbrirModalLogin();

  const abrirModal = () => {
    mudarModal()
  }

  return (
    <div>
      {modalAberto
        ? <LzModal titulo='Pipoca' children={<div>Pipoca</div>} aberta={modalAberto} aoFechar={abrirModal} />
        : ''}
      <NavLithtleZ />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PaginaComum
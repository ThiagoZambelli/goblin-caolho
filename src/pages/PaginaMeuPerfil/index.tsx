import PaginaErro from 'pages/PaginaErro';
import React from 'react'
import { Outlet } from 'react-router-dom';
import usePegaLogado from 'state/hooks/usePegaLogado'

function PaginaMeuPerfil() {
  const logado = usePegaLogado();
  return (
    <>
      {logado
        ? <div>
          <Outlet />
        </div>
        : <PaginaErro />}
    </>
  )
}

export default PaginaMeuPerfil
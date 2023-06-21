import PaginaErro from 'pages/PaginaErro';
import React from 'react'
import usePegaLogado from 'state/hooks/usePegaLogado'

function PaginaMeuPerfil() {
    const logado = usePegaLogado();
  return (
    <>
        {logado ? <div>PaginaMeuPerfil</div> : <PaginaErro />}
    </>
  )
}

export default PaginaMeuPerfil
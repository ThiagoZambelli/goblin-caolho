import NavLithtleZ from './NavLithtleZ'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { LzModal } from 'lithtlez-ds'
import useEstadoModalLogin from 'state/hooks/useEstadoModalLogin'
import useAbrirModalLogin from 'state/hooks/useAbrirModalLogin'
import useEstadoModalCadastro from 'state/hooks/useEstadoModalCadastro'
import useAbrirModalCadastro from 'state/hooks/useAbrirModalCadastro'
import ModalCdastro from 'componentes/ModalCadastro'
import ModalLogin from 'componentes/ModalLogin'
import usePegaItensAPI from 'state/hooks/usePegaItensAPI'
import MenuNav from './MenuNav'

function PaginaComum() {
  const modalAbertoLogin = useEstadoModalLogin();
  const modalAbertoCadastro = useEstadoModalCadastro();
  const mudarModalLogin = useAbrirModalLogin();
  const mudarModalCadastro = useAbrirModalCadastro();
  const carregaLista = usePegaItensAPI();
  carregaLista()

  const abrirModalLogin = () => {
    mudarModalLogin()
  }
  const abrirModalCadastro = () => {
    mudarModalCadastro()
  }
  const variaveisCor = {
    corPrimaria: '#402C25',
    corSecundaria: 'rgba(182,158,124, .9)',
    corBg: 'rgba(242,238,182, .5)'

  }
  return (
    <div>
      {modalAbertoLogin
        ? <LzModal {...variaveisCor} titulo='Login' children={<ModalLogin />} aberta={modalAbertoLogin} aoFechar={abrirModalLogin} />
        : ''}
      {modalAbertoCadastro
        ? <LzModal {...variaveisCor} titulo='Cadastro' children={<ModalCdastro />} aberta={modalAbertoCadastro} aoFechar={abrirModalCadastro} />
        : ''}
      <NavLithtleZ />
      <MenuNav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PaginaComum
import { LzBotao, LzInput } from 'lithtlez-ds'
import { useState } from 'react';
import imagemLogin from './assets/cadastro.png';
import styles from './ModalCadastro.module.scss';
import useAoCadastrar from 'state/hooks/useAoCadastrar';

function ModalCdastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [confSenha, setConfSenha] = useState('')  

  const aoCadastrar = useAoCadastrar();


  const variaveisCorFontsize = {
    fontSize: 14,
    corPrimaria: '#402C25',
    corSecundaria: '#B69E7C',
    required: true
  }

  const aoSubmeterCriacaoDeUsuario = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const novoUsuario = {
      nome,
      email,
      senha,
      confSenha      
    }
    aoCadastrar(novoUsuario);

    setNome('')
    setEmail('')
    setSenha('')
    setConfSenha('')    
  }

  return (
    <div className={styles.cadastro}>
      <figure>
        <img src={imagemLogin} alt='Imagem de cadastro' />
      </figure>
      <form onSubmit={aoSubmeterCriacaoDeUsuario}>
        <LzInput {...variaveisCorFontsize} label='Nome Completo' onChange={event => { setNome(event) }} value={nome} />
        <LzInput {...variaveisCorFontsize} label='Email' onChange={event => { setEmail(event) }} value={email} type='email' />        
        <LzInput {...variaveisCorFontsize} label='Senha' onChange={event => { setSenha(event) }} value={senha} type='password' />
        <LzInput {...variaveisCorFontsize} label='Confirmar Senha' onChange={event => { setConfSenha(event) }} value={confSenha} type='password' />
        <footer>
          <LzBotao  {...variaveisCorFontsize} forma='gota' >Cadastrar</LzBotao>
        </footer>
      </form>
    </div>
  )
}

export default ModalCdastro
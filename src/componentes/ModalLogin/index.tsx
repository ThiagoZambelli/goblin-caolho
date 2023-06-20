import { LzBotao, LzInput } from 'lithtlez-ds'
import { useState } from 'react';
import styles from './ModalLogin.module.scss';
import useAoLogar from 'state/hooks/useAoLogar';


function ModalLogin() {
  const [email, setEmail] = useState('')  
  const [senha, setSenha] = useState('')
  

  const aoLogar = useAoLogar();

  const variaveisCorFontsize = {
    fontSize: 14,
    corPrimaria: '#402C25',
    corSecundaria: '#B69E7C',
    required: true
  }

  const aoSubmeterLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const usuarioLogin = {
      email,      
      senha      
    }

    aoLogar(usuarioLogin);
    setEmail('');  
    setEmail('');  
  }

  return (
    <div className={styles.login}>
      <figure>
        <img src='#' alt='Imagem de Login' />
      </figure>
      <form onSubmit={aoSubmeterLogin}>
        <LzInput {...variaveisCorFontsize} label='Email' onChange={event => { setEmail(event) }} value={email} type='email'/>
        <LzInput {...variaveisCorFontsize} label='Senha' onChange={event => { setSenha(event) }} value={senha} type='password' />       
        <footer>
          <LzBotao  {...variaveisCorFontsize} forma='gota' >Logar</LzBotao>
        </footer>
      </form>
    </div>
  )
}

export default ModalLogin
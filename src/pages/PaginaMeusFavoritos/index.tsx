import axios from 'axios'
import React, { useEffect } from 'react'

function PaginaMeusFavoritos() {
  const token = sessionStorage.getItem('token')

  useEffect(() => {
    // axios.get<o que ta buscando (ex. IItens[])>
    axios.get('http://localhost:8000/pedidos', {
      headers:{
        'Authorization': `Bearer ${token}`
      }
    }).then(resposta => {})
    .catch(erro => {})
    
  }, [])

  return (
    <div>PaginaMeusFavoritos</div>
  )
}

export default PaginaMeusFavoritos
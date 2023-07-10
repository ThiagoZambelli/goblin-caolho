import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Carregando from './pages/Carregando'
import PaginaErro from './pages/PaginaErro'
import PaginaComum from './pages/PaginaComum'
import PaginaInicio from 'pages/PaginaInicio'
import PaginaMeuPerfil from 'pages/PaginaMeuPerfil'
import PaginaMeusFavoritos from 'pages/PaginaMeusFavoritos'
import PaginaLoja from 'pages/PaginaLoja'
import PaginaDeItem from 'pages/PaginaDeItem'

const Rotas = () => {
    return (
        <Suspense fallback={<Carregando />}>
            <Routes>
                <Route path='/' element={<PaginaComum />}>
                    <Route index element={<PaginaInicio />} />
                    <Route path='/loja' element={<PaginaLoja />} />
                    <Route path='/item/:id' element={<PaginaDeItem />} />
                    <Route path='/meuperfil' element={<PaginaMeuPerfil />} >
                        <Route path='meusfavoritos' element={<PaginaMeusFavoritos />} />
                    </Route>
                </Route>
                <Route path='*' element={<PaginaErro />} />
            </Routes>
        </Suspense>
    )
}
export default Rotas
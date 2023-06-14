import {Routes, Route } from 'react-router-dom'
import {Suspense} from 'react'
import Carregando from './pages/Carregando'
import PaginaErro from './pages/PaginaErro'
import PaginaComum from './pages/PaginaComum'
import PaginaInicio from 'pages/PaginaInicio'

const Rotas = () => {
    return (
        <Suspense fallback={<Carregando />}>
        <Routes>
            <Route path='/' element={<PaginaComum />}>
                <Route index element={<PaginaInicio />} />               
            </Route>
            <Route path='*' element={<PaginaErro />} />
        </Routes>
    </Suspense>
    )
}
export default Rotas
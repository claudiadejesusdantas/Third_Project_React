import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './components/Menu'
import { Inicio } from './pages/Inicio'
import { Sobre } from './pages/Sobre'
import { Portfolio } from './pages/Portfolio'
import { Contato } from './pages/Contato'

export function ApplicationRoutes(){
    return(
        <BrowserRouter>
                <Menu />
            <Routes>
                <Route path='/' element={<Inicio/>} />
                
                <Route path='/sobre' element={<Sobre/>} />
                
                <Route path='/portfolio' element={<Portfolio/>} />
                
                <Route path='/contato' element={<Contato/>} />
                
            </Routes>
        </BrowserRouter>
    )
}


// BrowserRouter abraça os outros componentes
// Routes é o guia mais das rotas, o super mapão
// Route cada um dos endereços
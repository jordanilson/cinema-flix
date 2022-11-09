import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import MeusFilmes from './pages/Meus Filmes'
import Erro from './pages/Erro-404'
import React from 'react'
import SaibaMais from './Saiba-Mais'
import Header from './componets/Header'


const RoutesApp = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/meusfilmes' element={<MeusFilmes/>}/>
    <Route path={'/saibamais/:id'} element={<SaibaMais/>}/>
    <Route path='*' element={<Erro/>}/>
   </Routes>

   </BrowserRouter>
  )
}

export default RoutesApp
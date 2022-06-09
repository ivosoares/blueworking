import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MeuComponente from './meu-componente';
import NewSpot from './components/NewSpot';
import Dashboard from './components/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      {/* Routes - gerencia as rotas do react-router-dom fazendo renderizar o 
      componente correto para o caminho (path) correto */}
      <Routes>
        {/* componente Route tem a propriedade onde passamos o caminho */}
        <Route path='/' element={<Home/>}/>
        <Route path='/nova-rota' element={<MeuComponente/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/new' element={<NewSpot/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
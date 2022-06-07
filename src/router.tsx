import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MeuComponente from './meu-componente';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* componente Route tem a propriedade onde passamos o caminho */}
        <Route path='/' element={<Home/>}/>
        <Route path='/nova-rota' element={<MeuComponente/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
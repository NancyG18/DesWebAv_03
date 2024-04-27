import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/Inicio'
import Personaje from './components/Personaje'
import Imagenes from './components/Imagenes'
import './App.css'


function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )


  return (
    <>
      <h1>RICK AND MORTY</h1>
    </>
  )
}

export default App

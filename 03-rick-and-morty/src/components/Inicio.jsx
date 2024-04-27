import { todosPersonajes } from '../funciones/funciones'
import React, { useEffect, useState } from 'react'
import Personaje from './Personaje'

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null)

  useEffect(() => {
    todosPersonajes(setPersonajes)
  }, [])

  return (
    <>
        {personajes === null ? (
        personajes.map (personaje => (
          <div key={personaje.id}>
            <a href='/personaje/${persoanje.id}'> {personaje.name} </a>
            </div>
            ))
         ) : ( 'no hay')}
    </>
  )
}

export default Inicio
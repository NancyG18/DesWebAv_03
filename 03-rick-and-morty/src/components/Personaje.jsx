import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {unicoPersonaje} from '../funciones/funciones'

const Personaje = () => {
    const [personaje, setPersonaje] = useState(null)

    const params = UseParams()
    useEffect(()=>{
    unicoPersonaje(params.id, setPersonaje)
},[])

  return (
    <>
    <h2>Personaje con el id {params.id} </h2>
    <p>Nombre {personaje.name} </p>
    <img src={personaje.image} alt='' />
    </>
  )
}

export default Personaje
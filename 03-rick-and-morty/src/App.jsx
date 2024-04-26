import { useState, useEffect } from 'react'
import Imagenes from './components/Imagenes'
import './App.css'

function App () {
  const [image, setImagenes] = useState([])
  const GET = import.meta.env.GET

  useEffect(() => {

  }, [])

  return (
    <>
      <h1>RICK AND MORTY</h1>
    </>
  )
}

export default App

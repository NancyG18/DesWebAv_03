import { useState, useEffect } from 'react'
import './App.css'

function App () {
  const [characters, setCharacters] = useState([])

  const getApi = async () => {
    try {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()

      console.log(data.results)

      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getApi()
  }, [])

  return (
    <div className='w-11/12 m-auto'>
      <h1 className='py-6 text-center text-3xl'>RICK AND MORTY</h1>
      <div className='grid grid-cols-4 gap-4'>
        {characters.map(character => (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt="" />
            <p>{character.species}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
    </div>
        ))}
        </div>
      </div>
  ) 
}

export default App

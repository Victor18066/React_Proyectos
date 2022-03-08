import { Link, useLocation } from "wouter"
import { useState } from "react"
import { useGifs } from "../../hooks/useGifs"
import ListOfGifs from "../../components/ListOfGifs"

export default function Home() {

    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
            </form>

            <h3 className="App-title">Gifs populares</h3>
            <li><Link to='/search/mono'>Gifs de monos </Link> </li>
            <li><Link to='/search/mapache'>Gifs de mapaches </Link> </li>
            <li><Link to='/search/panda'>Gifs de pandas </Link> </li>

            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
        </div>
    ) 
    
}
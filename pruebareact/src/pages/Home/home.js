import { Link, useLocation } from "wouter"
import { useState } from "react"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import TrendingSearches from "components/TrendingSearches"

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
                <div className="App-main">
                    <div className="App-results">
                        <h3 className="App-title">Última búsqueda</h3>
                        <ListOfGifs gifs={gifs} />
                    </div>

                <div className="App-category">
                    <TrendingSearches></TrendingSearches>
                </div>
            </div>
        </div>
    ) 
    
}
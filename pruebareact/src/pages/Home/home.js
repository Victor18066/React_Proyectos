import { useLocation } from "wouter"
import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import TrendingSearches from "components/TrendingSearches"
import SearchFrom from "components/SearchForm/searchform"
import { useCallback } from "react"
import {Helmet} from "react-helmet"

export default function Home() {
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGifs()

    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <div>
            <Helmet>
                <title>Home | Giphy</title>
            </Helmet>
            <SearchFrom onSubmit={handleSubmit}></SearchFrom>
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
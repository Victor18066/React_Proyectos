import { useGifs } from "hooks/useGifs"
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import TrendingSearches from "components/TrendingSearches"
import SearchForm from "components/SearchForm/searchform"
import {Helmet} from "react-helmet"

export default function Home() {

    const {loading, gifs} = useGifs()

    return (
        <div>
            <Helmet>
                <title>Home | Giphy</title>
            </Helmet>
            <SearchForm></SearchForm>
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
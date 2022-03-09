import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";

export default function SearchResults({params}) {

    const { keyword } = params
    
    const {loading, gifs} = useGifs({keyword}) //custom Hook

    return <>
        {loading
            ? "Cargando..."
            : <> 
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
            </>
        }
    </>

}
  
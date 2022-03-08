import { useGifs } from "../../hooks/useGifs";
import ListOfGifs from "../../components/ListOfGifs";

export default function SearchResults({params}) {

    const { keyword } = params
    
    const {loading, gifs} = useGifs({keyword}) //custom Hook

    return <>
        {loading
            ? "Cargando..."
            : <ListOfGifs gifs={gifs} />
        }
    </>

}
  
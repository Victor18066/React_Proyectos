import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs/ListOfGifs";
import useNearScreen from "hooks/useNearScreen";
import { useEffect, useRef, useCallback } from "react";
import debounce from "just-debounce-it";
//import useSEO from "hooks/useSEO";
import {Helmet} from "react-helmet"
import SearchForm from 'components/SearchForm/searchform'

export default function SearchResults({params}) {
    const { keyword, rating = 'g' } = params
    const {loading, gifs, setPage} = useGifs({keyword, rating}) //custom Hook
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once:false
    })

    const title = gifs ? `${gifs.length} Resultados de ${keyword}` : ''
    //useSEO({title})

    //const handleNextPage = () => setPage(prevPage => prevPage + 1)

    const debounceHandleNextPage = useCallback(debounce(() =>setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function (){
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? "Cargando..."
            : <> <Helmet>
                <title>{title}</title>
                <meta name="description" content= {title}/>
                <meta name="rating" content="General"/>
                </Helmet>
                <SearchForm initialKeyword={keyword} initialRating={rating}/>
                <h3 className="App-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
        {/*<button onClick={handleNextPage}>Get next page</button>*/}
    </>

}
  
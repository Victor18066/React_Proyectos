import React, { useContext } from "react"
//import GifsContext from "context/GifsContext"
import Gif from "components/Gif/Gif"
import useSingleGif from "hooks/useSingleGif"
import { Redirect } from "wouter"
//import useSEO from "hooks/useSEO"
import {Helmet} from "react-helmet"

export default function Detail ({params}) {
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''

    //useSEO({description: `Detail of ${title}`, title})

    //const {gifs} = useContext(GifsContext)
    //const gif = gifs.find(singleGif => singleGif.id === params.id)

    if (isLoading) {
        return ( 
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
            </>
        )      
    }

    if (isError) return <Redirect to='/404'/>
    if (!gif) return null

    return <>
    <Helmet>
        <title>{title} || Giphy</title>
    </Helmet>
    <h3 className="App-title">{gif.title}</h3>
    <Gif {...gif} />
    </>
}
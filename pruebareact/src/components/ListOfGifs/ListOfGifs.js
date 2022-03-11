import Gif from 'components/Gif/Gif'
import React from 'react'
import './ListOfGifs.css'

export default function ListOfGifs ({gifs}) {
    
    return <div className='ListOfGifs'> 
        {
        gifs?.map(({id, title, url, ...restOfGif}) => 
            <Gif 
                key={id}
                title={title} 
                url={url} 
                id={id} 
                extraInfo={restOfGif}
            />
        ) 
        }
    </div>

}


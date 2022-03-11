import './Gif.css'
import { Link } from 'wouter'
import React from 'react'

function Gif({title, id, url}){
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} className="Gif-link">
                <h4>{title}</h4>
                {/* <small>{id}</small> */}
                <img alt={title} src={url} />
            </Link>
        </div>
    ) 
}

export default React.memo(Gif, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id 
})
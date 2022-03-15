import  React from "react";
import { useLocation } from "wouter"
import useForm from "./hook";

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm ({initialKeyword = "", initialRating = RATINGS[0]}) {
    const [_, pushLocation] = useLocation()

    const {keyword, rating, times, updateKeyword, updateRating} = useForm({initialKeyword, initialRating})

    const handleChange = (event) => {
        updateKeyword(event.target.value)
    }

    const handleChangeRating = (event) => {
        updateRating(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    return (
            <form onSubmit={handleSubmit}>
                <input placeholder="Search..." onChange={handleChange} type="text" value={keyword} />
                <button>Buscar</button>
                <select onChange={handleChangeRating} value={rating}>
                    <option disabled>Rating type</option> 
                    {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                </select>
                {/*<small>{times}</small>*/}
            </form>
            )
}

export default React.memo(SearchForm)
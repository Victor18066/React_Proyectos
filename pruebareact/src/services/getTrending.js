import {API_KEY} from './settings'
import {API_URL} from './settings'

export default function getTrendingTerms () {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    const fromApiResponseToGifs = apiResponse => {
        const {data = []} = apiResponse
        return data
    }

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
          
}


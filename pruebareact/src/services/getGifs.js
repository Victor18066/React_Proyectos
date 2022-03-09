import {API_KEY} from './settings'
import {API_URL} from './settings'

export default function getGifs ({keyword = 'monkey'} = {}) {
const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`

  return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
          const {data} = response
          const gifs = data.map(image => {
            const { images, title, id} = image
            const { url } = images.original
            return { title, id, url}
          })
        return gifs
      })

}


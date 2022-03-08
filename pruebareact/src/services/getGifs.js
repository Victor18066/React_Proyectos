const apiKey = 'zwNxG5u0GpN5gW1qh33ZEYREkKv3dd8U'

export default function getGifs ({keyword = 'monkey'} = {}) {
const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=es`

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


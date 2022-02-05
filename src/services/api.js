const API_KEY = 'e4b307fd956091d438d0e11b7de51c5e'
const BASE_URL = 'https://swapi.dev/'

const baseFetch = async (endpoint) => {

  const req = await fetch(`${BASE_URL}${endpoint}`)
  const data = await req.json()

  return data
}

export default {

  getPlanetsList: async () => {
    return [
      {
        slug: 'planets_list',
        items: await baseFetch(`api/planets/`)
      }
    ]
  },

  getFeaturedInfo: async (id, type) => {
    let info = {}

    if (id) {
      switch (type) {
        case 'movie':
            info = await baseFetch(`movie/${id}?api_key=${API_KEY}`)
          break;
        
        case 'tv':
            info = await baseFetch(`tv/${id}?api_key=${API_KEY}`)
          break;

        default:
            info = null
          break;
      }
    }

    return info
  }
}
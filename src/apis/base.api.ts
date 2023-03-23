import { resTypeMovieList } from 'src/types/typeResponseMovie'
import { http } from 'src/Utils/http'

export const category = {
  movie: 'movie',
  tv: 'tv'
}

export const movieType = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
}

export const tvType = {
  top_rated: 'top_rated',
  popular: 'popular',
  on_the_air: 'on_the_air',
  upcoming: 'upcoming'
}

export const tmdbAPI = {
  getMovieList: (type: keyof typeof movieType, params = {}) => {
    const url = 'movie/' + movieType[type]
    return http.get<resTypeMovieList>(url, { params: params })
  },

  getTvList: (type: keyof typeof tvType, params = {}) => {
    const url = 'tv/' + tvType[type]
    return http.get(url, { params: params })
  },

  getVideos: (type: keyof typeof category, id: number, params = {}) => {
    const url = `${category[type]}/${id}/videos`
    return http.get(url, { params: params })
  },

  search: (type: keyof typeof category, params = {}) => {
    const url = `search/${category[type]}`
    return http.get(url, { params: params })
  },

  detail: (type: keyof typeof category, id: number, params = {}) => {
    const url = `${category[type]}/${id}`
    return http.get(url, { params: params })
  },

  credits: (type: keyof typeof category, id: number, params = {}) => {
    const url = `${category[type]}/${id}/credits`
    return http.get(url, { params: params })
  },

  similar: (type: keyof typeof category, id: number, params = {}) => {
    const url = `${category[type]}/${id}/similar`
    return http.get(url, { params: params })
  }
}

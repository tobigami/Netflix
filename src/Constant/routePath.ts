import { category, movieType } from 'src/apis/base.api'

export const routePath = {
  home: '/',
  detail: ':type/:id',
  movie: '/movie',
  tv: '/tv',
  movieUpcoming: '/movie/upcoming',
  movieTopRated: '/movie/top_rated',
  moviePopular: '/movie/popular',
  tvPopular: '/tv/popular',
  tvTopRated: '/tv/top_rated',
  tvOnTheAir: '/tv/on_the_air',
  search: 'search/:type'
} as const

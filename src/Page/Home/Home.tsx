import React from 'react'
import { Link } from 'react-router-dom'
import { tmdbAPI } from 'src/apis/base.api'
import Button from 'src/Components/Button/Button'
import MovieListHorizontal from 'src/Components/MovieListHorizontal'
import Slider from 'src/Components/Slider'
import { routePath } from 'src/Constant/routePath'

export default function Home() {
  // tmdbAPI.getMovieList('popular', { page: 2 })
  tmdbAPI.detail('movie', 550)
  return (
    <div>
      <Slider />
      {/* trending movie*/}
      <div className='container mt-[-100px] sm:mt-0'>
        <MovieListHorizontal category={'movie'} title='top trending movie' type={'popular'}></MovieListHorizontal>

        <MovieListHorizontal category={'movie'} title='top rated  movie' type={'top_rated'}></MovieListHorizontal>

        <MovieListHorizontal category={'movie'} title='upcoming movie' type={'upcoming'}></MovieListHorizontal>

        <MovieListHorizontal category={'tv'} title='trending TV' type={'popular'}></MovieListHorizontal>

        <MovieListHorizontal category={'tv'} title='top rated TV' type={'top_rated'}></MovieListHorizontal>

        <MovieListHorizontal category={'tv'} title='on the air TV' type={'on_the_air'}></MovieListHorizontal>
      </div>
    </div>
  )
}

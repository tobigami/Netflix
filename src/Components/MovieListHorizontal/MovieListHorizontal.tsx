import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { movieType, tmdbAPI, tvType } from 'src/apis/base.api'
import { routePath } from 'src/Constant/routePath'
import { resultType } from 'src/types/typeResponseMovie'
import Button from '../Button/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ImgC } from 'src/Utils/image'
import MovieCard from '../MovieCard'

interface Props {
  category: 'movie' | 'tv'
  type: keyof typeof movieType
  title: string
}

export default function MovieListHorizontal({ category, type, title }: Props) {
  const [item, setItem] = useState<resultType[]>([])

  useEffect(() => {
    const getItem = async () => {
      try {
        let res = null
        if (category === 'movie') {
          res = await tmdbAPI.getMovieList(type)
        } else if (category === 'tv') {
          res = await tmdbAPI.getTvList(type)
        }
        setItem(res?.data.results)
      } catch (error) {}
    }
    getItem()
  }, [])
  if (item.length < 0) return null
  return (
    <div>
      <div className='flex items-center justify-between py-12'>
        <h2 className='font-bold text-2xl capitalize'>{title}</h2>
        <Link to={routePath[category]}>
          <Button btnSize='sm' btnType='OutLine'>
            view more
          </Button>
        </Link>
      </div>
      <SwiperComponent movies={item} type={category} />
    </div>
  )
}

interface SwiperProps {
  type: 'movie' | 'tv'
  movies: resultType[]
}

export const SwiperComponent = ({ type, movies }: SwiperProps) => {
  if (movies.length < 0) return null
  return (
    <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
      {movies.map((value, index) => {
        return (
          <SwiperSlide key={index} className='w-[15%]'>
            <MovieCard category={type} item={value} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

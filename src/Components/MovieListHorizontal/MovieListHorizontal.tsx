import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { movieType, tmdbAPI, tvType } from 'src/apis/base.api'
import { routePath } from 'src/Constant/routePath'
import { resultType } from 'src/types/typeResponseMovie'
import Button from '../Button'
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
          res = await tmdbAPI.getMovieList(type, {})
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
    <div className='z-20 relative'>
      <div className='flex items-center justify-between sm:py-12 py-6 px-4'>
        <h2 className='font-bold sm:text-2xl text-xl capitalize'>{title}</h2>
        <Link to={`/${category}/${type}`}>
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
          <SwiperSlide key={index} className='xl:w-[15%] lg:w-[22%] sm:w-[35%] w-[50%]'>
            <MovieCard category={type} item={value} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movieType, tmdbAPI } from 'src/apis/base.api'
import Button from 'src/Components/Button/Button'
import Slider from 'src/Components/Slider'
import { resultType } from 'src/types/typeResponseMovie'
import { ImgC } from 'src/Utils/image'
import Cast from './Cast'
import Similar from './Similar'
import Video from './Video'

export default function Detail() {
  const [item, setItem] = useState<any>({})
  const navigate = useNavigate()
  const { id, type } = useParams()
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await tmdbAPI.detail(type as 'movie' | 'tv', Number(id))
        setItem(res.data)
        window.scrollTo(0, 0)
        return res
      } catch (error) {
        throw error
      }
    }
    getDetail()
  }, [type, id])

  const imgSrc = ImgC.origin(item.backdrop_path || item.poster_path)
  if (!item || !id || !type) return null
  return (
    <div>
      {/* bg */}
      <div
        className='sm:mt-[-8rem] mt-[-6rem] relative sm:pt-[30%] pt-[100%] w-full bg-center bg-cover bg-no-repeat
                  before:absolute before:content-[""] before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-60
                  after:absolute after:content-[""] after:w-full after:h-[100px] after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-[#0f0f0f] after:to-transparent
                  '
        style={{
          backgroundImage: `url(${imgSrc})`
        }}
      ></div>
      <div className='container mt-[-150px]'>
        {/* body */}
        <div className='flex flex-row justify-center lg:px-20 px-4 relative'>
          {/* poster */}
          <div className='flex-shrink-0 flex-[30%] hidden lg:block'>
            <img
              className='shadow-custom rounded-[30px] w-full transition-all scale-100 duration-700 ease-in-out'
              src={ImgC.w500(item.poster_path)}
              alt={item.title}
            />
          </div>
          {/* content */}
          <div className='lg:ml-8'>
            {/* title */}
            <div className='xl:text-[5rem] lg:text-[4rem] md:text-[3rem] text-[2rem] pb-8 font-bold'>
              {item.title || item.name}
            </div>
            {/* genres */}
            <div className='flex'>
              {item.genres &&
                item.genres.map((value: { name: string; id: number }) => {
                  return (
                    <Button className='mr-4 mb-4' btnSize='sm' btnType='OutLine' key={value.id}>
                      {value.name}
                    </Button>
                  )
                })}
            </div>
            {/* over view */}
            <div className='sm:text-base text-xs leading-6 mb-6'>{item.overview}</div>
            {/* casts */}
            <Cast id={id} type={type} />
          </div>
        </div>
        {/* video trailer */}
        <div className='mt-10'>
          <Video type={type} id={id} />
        </div>
        {/* similar */}
        <div>
          <Similar type={type} id={id} />
        </div>
      </div>
    </div>
  )
}

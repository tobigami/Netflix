import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { tmdbAPI } from 'src/apis/base.api'
import { ImgC } from 'src/Utils/image'

interface Props {
  id: string
  type: string
}

export default function Cast({ id, type }: Props) {
  const [cast, setCast] = useState([])
  useEffect(() => {
    const getCredits = async () => {
      try {
        const res = await tmdbAPI.credits(type as 'movie' | 'tv', Number(id))
        setCast(res.data.cast.slice(0, 5))
      } catch (error) {}
    }
    getCredits()
  }, [])

  if (cast.length < 0) return null

  return (
    <div>
      <div className='font-semibold text-xl mb-4'>Casts</div>
      <div className='grid grid-cols-7 gap-4'>
        {cast.map((value: any, index) => {
          return (
            <div key={index} className='col-span-1'>
              <div
                className=' bg-no-repeat bg-cover bg-center w-full pt-[160px]'
                style={{
                  backgroundImage: `url(${ImgC.w500(value.profile_path)})`
                }}
              ></div>
              <div className='mt-2 text-center text-sm'>{value.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import { type } from 'os'
import React, { useEffect, useState } from 'react'
import { tmdbAPI } from 'src/apis/base.api'
import { SwiperComponent } from 'src/Components/MovieListHorizontal/MovieListHorizontal'

interface Props {
  type: string
  id: string
}

export default function Similar({ type, id }: Props) {
  const [similar, setSimilar] = useState([])
  useEffect(() => {
    const getSimilar = async () => {
      try {
        const res = await tmdbAPI.similar(type as 'movie' | 'tv', Number(id))
        setSimilar(res.data.results)
        return res
      } catch (error) {}
    }
    getSimilar()
  }, [])

  if (similar.length < 0) return null
  return (
    <div>
      <h2 className='text-xl font-bold mt-4'>Similar</h2>
      <div>
        <SwiperComponent movies={similar} type={type as 'movie' | 'tv'} />
      </div>
    </div>
  )
}

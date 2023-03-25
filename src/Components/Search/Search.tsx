import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { tmdbAPI } from 'src/apis/base.api'
import getParamsString from 'src/Hooks/getParamsString'
import Button from '../Button'
import MovieCard from '../MovieCard'
import FooterBg from 'src/assets/Image/footer-bg.jpg'

export default function Search() {
  const { pathname } = useLocation()
  const type = pathname.split('/')[2]
  const paramsObj = getParamsString()
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [keyword, setKeyword] = useState(paramsObj.query)
  const [page, setPage] = useState(Number(paramsObj.page))
  useEffect(() => {
    console.log('goi lai useEffect')
    const getSearch = async () => {
      const res = await tmdbAPI.search(type as 'movie' | 'tv', { query: keyword, page: page })
      setData([...data, ...(res.data.results as [])])
    }
    getSearch()
  }, [keyword, type, page])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.trim().length > 0) {
      console.log('nhay vao day')
      setKeyword(search)
      setData([])
    }
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  console.log('page', page)

  if (data.length < 0) return null

  return (
    <div>
      <div
        className='bg-white text-black sm:mt-[-124px] mt-[-91px] bg-top sm:pt-[8%] pt-[20%]   bg-cover w-full relative
        after:contents-[""] after:absolute after:bottom-0 after:w-full after:left-0 after:from-black after:to-transparent after:h-[40%] after:bg-gradient-to-t
        '
        style={{ backgroundImage: `url(${FooterBg})` }}
      >
        anh
      </div>
      <div className='container'>
        <form className='flex mb-8 mt-8 sm:justify-start justify-center' onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            value={search}
            className='shadow-before mr-8 px-4 py-1 outline-none rounded-[30px] capitalize text-white text-sm font-semibold bg-black focus:shadow-after'
            type='text'
            placeholder='enter your key word'
          />

          <Button type='submit' btnType='Normal' btnSize='sm'>
            search
          </Button>
        </form>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4'>
          {data.map((value, index) => {
            return (
              <div className='col-span-1' key={index}>
                <MovieCard category={type as 'movie' | 'tv'} item={value} />
              </div>
            )
          })}
        </div>
        <div className='text-center mt-12'>
          <Button onClick={handleLoadMore} btnType='OutLine' btnSize='sm'>
            Load more
          </Button>
        </div>
      </div>
    </div>
  )
}

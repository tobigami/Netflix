import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { tmdbAPI } from 'src/apis/base.api'
import { movieType } from 'src/apis/base.api'
import Button from 'src/Components/Button/Button'
import MovieCard from 'src/Components/MovieCard'
import Search from 'src/Components/Search'
import FooterBg from 'src/assets/Image/footer-bg.jpg'

export default function Movie() {
  const [page, setPage] = useState(1)
  const { pathname } = useLocation()
  const [params] = useSearchParams()
  const paramObj = Object.fromEntries([...params])
  const type = pathname.split('/')[1]
  const category = pathname.split('/')[2] === undefined ? 'popular' : pathname.split('/')[2]
  const navigate = useNavigate()

  const [list, setList] = useState([])
  useEffect(() => {
    const getList = async () => {
      try {
        let res = null
        if (type === 'movie') {
          res = await tmdbAPI.getMovieList(category as keyof typeof movieType, { page: page })
        } else if (type === 'tv') {
          res = await tmdbAPI.getTvList(category as keyof typeof movieType, { page: page })
        }
        setList([...list, ...(res?.data.results as [])])
      } catch (error) {}
    }
    getList()
  }, [page, category, type])

  const [search, setSearch] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (search.trim().length > 0) {
      navigate(`/search/${type}?page=1&query=${search}`)
    }
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }
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
        <form className='flex justify-center sm:justify-start mb-8 mt-8' onSubmit={handleSubmit}>
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
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4'>
          {list.map((value, index) => {
            return (
              <div className='col-span-1' key={index}>
                <MovieCard category={type as 'movie' | 'tv'} item={value} />
              </div>
            )
          })}
        </div>
        <div className='text-center mt-12'>
          <Button btnType='OutLine' btnSize='sm' onClick={handleLoadMore}>
            Load more
          </Button>
        </div>
      </div>
    </div>
  )
}

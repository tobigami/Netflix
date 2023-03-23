import { Link } from 'react-router-dom'
import { resultType } from 'src/types/typeResponseMovie'
import { ImgC } from 'src/Utils/image'
import Button from '../Button/Button'

interface Props {
  category: 'tv' | 'movie'
  item: resultType
}

export default function MovieCard({ item, category }: Props) {
  const imgSrc = ImgC.w500(item.poster_path || item.backdrop_path)

  return (
    <Link to={`/${category}/${item.id}`}>
      <div className='relative'>
        <div className='absolute text-red-600 z-10 bg-black hover:bg-black/30 opacity-0 w-full h-full hover:opacity-100 inset-0 flex justify-center items-center transition-all ease-in-out duration-300'>
          <Button btnType='Normal'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4 fill-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z'
              />
            </svg>
          </Button>
        </div>
        <div
          className='relative rounded-[30px] top-0 pt-[160%] bg-top bg-cover bg-no-repeat 
          after:absolute after:content-[""] after:w-full after:h-[100px] after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-[#0f0f0f] after:to-transparent
          '
          style={{
            backgroundImage: `url(${imgSrc})`
          }}
        ></div>

        <h3 className='text-center mt-4'>{item.title || item.name}</h3>
      </div>
    </Link>
  )
}

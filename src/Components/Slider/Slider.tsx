import { useEffect, useState } from 'react'
import { tmdbAPI, category, movieType } from 'src/apis/base.api'
import { resultType } from 'src/types/typeResponseMovie'
import { ImgC } from 'src/Utils/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'

export default function Slider() {
  const [showModal, setShowModal] = useState(false)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const [movies, setMovie] = useState<resultType[] | []>([])
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await tmdbAPI.getMovieList('popular', { page: 1 })
        setMovie(res.data.results.slice(0, 20))
      } catch (error) {
        console.log('error', error)
      }
    }
    getMovie()
  }, [])

  const navigate = useNavigate()
  const handleWatchNow = (id: number) => {
    navigate(`movie/${id}`)
  }

  const handleVideoTrailer = async (id: number) => {
    console.log('click')

    try {
      const res = await tmdbAPI.getVideos('movie', id)
      if (res.data.results.length > 0) {
        console.log(res)
        setVideoSrc(res.data.results[0].key)
        setShowModal(true)
      } else {
        setVideoSrc('')
        setShowModal(true)
      }
      return res
    } catch (error) {}
  }

  if (movies.length < 0) return null

  return (
    <div className='mt-[-8rem]'>
      <Modal onClose={() => setShowModal(false)} isShow={showModal} link={videoSrc} />
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        loop={true}
      >
        {movies.map((item, index) => {
          const background = ImgC.origin(item.backdrop_path ? item.backdrop_path : item.poster_path)

          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                // bg image
                <div
                  className='relative py-36 w-full bg-center bg-cover bg-no-repeat
                  before:absolute before:content-[""] before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-60
                  after:absolute after:content-[""] after:w-full after:h-[100px] after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-[#0f0f0f] after:to-transparent
                  '
                  style={{
                    backgroundImage: `url(${background})`
                  }}
                >
                  {/* container */}
                  <div className='flex items-center justify-center relative container'>
                    {/* info */}
                    <div className='w-[55%] mx-12 relative'>
                      {/* title */}
                      <h2 className='text-[5rem] font-bold'>{item.title}</h2>
                      {/* overview */}
                      <div className='mt-12 font-bold leading-6'>{item.overview}</div>
                      {/* btn */}
                      <div className='flex items-center mt-12'>
                        <Button
                          btnType='Normal'
                          onClick={() => {
                            handleWatchNow(item.id)
                          }}
                        >
                          Watch now
                        </Button>
                        <Button onClick={() => handleVideoTrailer(item.id)} className='ml-4'>
                          Watch trailer
                        </Button>
                      </div>
                    </div>

                    {/* poster */}
                    <div className='flex-1'>
                      <img
                        className='shadow-custom rounded-[30px] w-[400px] transition-all scale-100 duration-700 ease-in-out'
                        src={ImgC.w500(item.poster_path)}
                        alt={item.title}
                      />
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

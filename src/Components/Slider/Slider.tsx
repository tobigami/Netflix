import { useEffect, useState } from 'react'
import { tmdbAPI, category, movieType } from 'src/apis/base.api'
import { resultType } from 'src/types/typeResponseMovie'
import { ImgC } from 'src/Utils/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'
import classNames from 'classnames'

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
        slot={'wrapper-end'}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false
        // }}
        loop={true}
        wrapperClass='items-end border-[2px]'
      >
        {movies.map((item, index) => {
          const background = ImgC.origin(item.backdrop_path)

          return (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                // bg image
                <div
                  className='relative sm:py-[11rem]  pt-28 pb-10 min-h-[572px]  bg-center bg-cover bg-no-repeat
                  before:absolute before:content-[""] before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-60
                  after:absolute after:content-[""] after:w-full after:h-[20%] after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black after:to-transparent
                  '
                  style={{
                    backgroundImage: `url(${background})`
                  }}
                >
                  {/* container */}
                  <div className='flex items-center justify-center relative container'>
                    {/* info */}
                    <div className='lg:w-[55%] w-[100%] sm:mx-12 mx-4 relative'>
                      {/* title */}
                      <h2
                        className={classNames(
                          'xl:text-[5rem] lg:text-[4rem] md:text-[3rem] text-[2rem] font-bold  transition-all ease-in-out duration-500',
                          {
                            'opacity-0 -translate-y-28': !isActive,
                            'opacity-100 translate-y-0': isActive
                          }
                        )}
                      >
                        {item.title}
                      </h2>
                      {/* overview */}
                      <div
                        className={classNames(
                          'sm:mt-12 mt-6 font-bold sm:text-base text-sm leading-6 transition-all ease-in-out duration-500 delay-300',
                          {
                            'opacity-0 translate-y-[-100px]': !isActive,
                            'opacity-100 translate-y-0': isActive
                          }
                        )}
                      >
                        {item.overview}
                      </div>
                      {/* btn */}
                      <div
                        className={classNames(
                          'flex items-center sm:mt-12 mt-6 transition-all ease-in-out duration-500 delay-700',
                          {
                            'opacity-0 translate-y-[-100px]': !isActive,
                            'opacity-100 translate-y-0': isActive
                          }
                        )}
                      >
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
                    <div
                      className={classNames('flex-1 transition-all hidden lg:block duration-1000', {
                        'scale-100': isActive,
                        'scale-0': !isActive
                      })}
                    >
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

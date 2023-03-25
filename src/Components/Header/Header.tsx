import { NavLink, Link } from 'react-router-dom'
import { routePath } from 'src/Constant/routePath'
import classNames from 'classnames'
import { useEffect, useState } from 'react'

export default function Header() {
  const headerNav = [
    {
      path: routePath.home,
      display: 'Home'
    },
    {
      path: routePath.movie,
      display: 'Movie'
    },
    {
      path: routePath.tv,
      display: 'Tv Series'
    }
  ]

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const eventScroll = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        return setScroll(true)
      } else setScroll(false)
    }
    window.addEventListener('scroll', eventScroll)
    return () => {
      window.removeEventListener('scroll', eventScroll)
    }
  }, [])
  return (
    <div
      className={classNames('sticky top-0 left-0 right-0 z-30 transition-all duration-1000', {
        'bg-black': scroll
      })}
    >
      <div className='container'>
        <div
          className={classNames('flex items-center justify-between h-full transition-all duration-300', {
            'py-4': scroll,
            'py-8': !scroll
          })}
        >
          {/* logo */}
          <div className='w-full sm:w-fit flex justify-center'>
            <Link to={routePath.home}>
              <img
                className='sm:w-[200px] w-[100px]'
                src='https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
                alt='logo'
              />
            </Link>
          </div>
          <div className='flex justify-between bg-black sm:bg-transparent items-center sm:static fixed bottom-0 w-full sm:w-fit mb-0'>
            {/* nhung tag */}
            {headerNav.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => {
                    return classNames(
                      'mx-2 py-2 px-2 capitalize  text-2xl text-white font-bold hover:text-primary transition-all duration-300 relative after:absolute after:bg-primary after:w-0 after:h-[2px] after:bottom-[-2px] after:left-1/2 after:translate-x-[-50%] after:transition-all after:duration-300 hover:after:w-full',
                      {
                        'text-primary border-b-[2px] border-primary': isActive,
                        'text-black border-b-[2px] border-transparent': !isActive
                      }
                    )
                  }}
                >
                  {item.display}
                </NavLink>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

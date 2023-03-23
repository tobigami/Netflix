import React from 'react'
import { Link } from 'react-router-dom'

import bg from 'src/assets/Image/footer-bg.jpg'
import { routePath } from 'src/Constant/routePath'

export default function Footer() {
  return (
    <div className='mt-16 w-full bg-top bg-cover py-36]' style={{ backgroundImage: `url(${bg})` }}>
      <div className='container p-16'>
        <div className='flex items-center justify-center flex-col'>
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
          {/* content */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4'>
            <div className='col-span-1 sm:col-span-1 mx-5 flex flex-col '>
              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                Home
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                contact us
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                term of services
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                about us
              </Link>
            </div>

            <div className='col-span-1 sm:col-span-1 mx-5 flex flex-col '>
              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                Live
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                faq
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                premium
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                Privacy policy
              </Link>
            </div>

            <div className='col-span-1 sm:col-span-1 mx-5 flex flex-col '>
              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                you must watch
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                recent release
              </Link>

              <Link
                to='/'
                className='sm:py-3 py-1 capitalize font-bold text-white sm:text-xl text-sm hover:text-primary ease-in-out duration-300'
              >
                top imdb
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

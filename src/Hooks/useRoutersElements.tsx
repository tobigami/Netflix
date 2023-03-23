import { ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
// import { routePath } from 'src/Constant/routePath'
import MainLayout from 'src/Layouts'
import Detail from 'src/Page/Detail'
import Home from 'src/Page/Home'
import Movie from 'src/Page/Movie'
import TvSeries from 'src/Page/TvSeries'

const routePath = {
  home: '/',
  detail: ':type/:id',
  movie: '/movie',
  tv: '/tv'
}

export default function useRoutersElements() {
  const routers = useRoutes([
    {
      path: routePath.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: ':type/:id',
      element: (
        <MainLayout>
          <Detail />
        </MainLayout>
      )
    },
    {
      path: routePath.movie,
      element: (
        <MainLayout>
          <Movie />
        </MainLayout>
      )
    },
    {
      path: routePath.tv,
      element: (
        <MainLayout>
          <TvSeries />
        </MainLayout>
      )
    }
  ])
  return routers
}
